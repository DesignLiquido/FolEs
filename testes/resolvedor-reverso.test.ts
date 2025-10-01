import { AvaliadorSintaticoReverso } from "../fontes/avaliador-sintatico/avaliador-sintatico-reverso";
import { LexadorReverso } from "../fontes/lexador/lexador-reverso";
import { ResolvedorReverso } from "../fontes/resolvedores/resolvedor-reverso";
import estruturasLmht from "../fontes/tradutores/estruturas-lmht";
import { AvaliadorSintaticoInterface, ImportadorInterface, LexadorInterface } from "../fontes/interfaces";
import { Importador } from "../fontes/importador";
import { TraducaoReversa } from "./listas/traducao-reversa";

describe.skip('Resolvedor Reverso', () => {
    let lexadorReverso: LexadorInterface;
    let importador: ImportadorInterface;
    let avaliadorReverso: AvaliadorSintaticoInterface;
    let resolvedorReverso: ResolvedorReverso;

    beforeEach(() => {
        lexadorReverso = new LexadorReverso();
        importador = new Importador(lexadorReverso);
        avaliadorReverso = new AvaliadorSintaticoReverso(importador);
        resolvedorReverso = new ResolvedorReverso();
    });

    // TODO: Descobrir por que  dá erro.
    it.skip('Testando tradução das estruturas HTML', () => {
        for (let index = 0; index < Object.keys(estruturasLmht).length; index += 1) {
            // Lexador recebe as estruturas FolEs
            const resultadoLexador = lexadorReverso.mapear([
                `${Object.keys(estruturasLmht)[index]} {`,
                "   font-size: 60px;",
                "}"
            ])

            // Avaliador Sintático
            const resultadoAvaliadorSintatico = avaliadorReverso.analisar(resultadoLexador.simbolos);

            // Tradutor deve retornar a estrutura HTML correspondente
            const resultadoResolvedor = resolvedorReverso.resolver(resultadoAvaliadorSintatico);

            if (Object.values(estruturasLmht)[index].length > 1) {
                const estruturaLmhtString = Object.values(estruturasLmht)[index][0].toString();
                expect(resultadoResolvedor).toContain(estruturaLmhtString);
            } else {
                const estruturaLmhtString = Object.values(estruturasLmht)[index].toString();
                expect(resultadoResolvedor).toContain(estruturaLmhtString);
            }
        }
    });

    // TODO: Finalizar a lógica em `declaracaoPorSeletor()` (avaliador sintático reverso) para testes abaixo funcionarem
    it.skip('Testando tradução reversa de modificadores', () => {
        for (let index = 0; index < Object.keys(TraducaoReversa).length; index += 1) {

            // Lexador Reverso recebe as estruturas FolEs
            const resultadoLexador = lexadorReverso.mapear([
                `html {`,
                `   ${TraducaoReversa[index]['css']}: 60px;`,
                "}"
            ])
            
            // Avaliador Sintático Reverso
            const resultadoAvaliadorSintatico = avaliadorReverso.analisar(resultadoLexador.simbolos);

            // Resolvedor reverso
            const resultadoResolvedor = resolvedorReverso.resolver(resultadoAvaliadorSintatico);

            // Resolvedor reverso deve retornar a estrutura HTML correspondente
            expect(resultadoResolvedor).toContain('lmht');
            expect(resultadoResolvedor).toContain(TraducaoReversa[index]['foles']);
            expect(resultadoResolvedor).toContain('60px;');
        }
    });

    // OBS.: Teste genérico, precisa de implementações no Av. Sintático Reverso antes de funcionar
    // TODO: Implementar lista de métodos quando estiver funcionando
    it.skip('Testando tradução reversa de métodos', () => {
        // Lexador Reverso recebe as estruturas FolEs
        const resultadoLexador = lexadorReverso.mapear([
            `html {`,
            `   filter: blur(4px);`,
            "}"
        ])

        // Avaliador Sintático Reverso
        const resultadoAvaliadorSintatico = avaliadorReverso.analisar(resultadoLexador.simbolos);

        // Resolvedor reverso
        const resultadoResolvedor = resolvedorReverso.resolver(resultadoAvaliadorSintatico);

        // Resolvedor reverso deve retornar a estrutura HTML correspondente
        expect(resultadoResolvedor).toContain('lmht');
        expect(resultadoResolvedor).toContain('borrar');
        expect(resultadoResolvedor).toContain('4px;');
    });
});