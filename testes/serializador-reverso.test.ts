import { AvaliadorSintaticoReverso } from "../fontes/avaliador-sintatico/avaliador-sintatico-reverso";
import { LexadorReverso } from "../fontes/lexador/lexador-reverso";
import { SerializadorReverso } from "../fontes/serializadores/serializador-reverso";
import estruturasLmht from "../fontes/tradutores/estruturas-lmht";
import { AvaliadorSintaticoInterface, ImportadorInterface, LexadorInterface } from "../fontes/interfaces";
import { Importador } from "../fontes/importador";
import { TraducaoReversa } from "./listas/traducao-reversa";

describe('Serializador Reverso', () => {
    let lexadorReverso: LexadorInterface;
    let importador: ImportadorInterface;
    let avaliadorReverso: AvaliadorSintaticoInterface;
    let serializadorReverso: SerializadorReverso;

    beforeEach(() => {
        lexadorReverso = new LexadorReverso();
        importador = new Importador(lexadorReverso);
        avaliadorReverso = new AvaliadorSintaticoReverso(importador);
        serializadorReverso = new SerializadorReverso();
    });

    it('Testando tradução das estruturas HTML', () => {
        for (let index = 0; index < Object.keys(estruturasLmht).length; index += 1) {

            // Lexador recebe as estruturas FolEs
            const resultadoLexador = lexadorReverso.mapear([
                `${Object.keys(estruturasLmht)[index]} {`,
                "   font-size: 60px;",
                "}"
            ])

            // Lexador deve montar um objeto de 8 símbolos sem retornar erros
            expect(resultadoLexador.simbolos).toHaveLength(8);
            expect(resultadoLexador.erros).toHaveLength(0);

            // Avaliador Sintático
            const resultadoAvaliadorSintatico = avaliadorReverso.analisar(resultadoLexador.simbolos);

            // Tradutor deve retornar a estrutura HTML correspondente
            const resultadoSerializador = serializadorReverso.serializar(resultadoAvaliadorSintatico);

            if (Object.values(estruturasLmht)[index].length > 1) {
                const estruturaLmhtString = Object.values(estruturasLmht)[index][0].toString();
                expect(resultadoSerializador).toContain(estruturaLmhtString);
            } else {
                const estruturaLmhtString = Object.values(estruturasLmht)[index].toString();
                expect(resultadoSerializador).toContain(estruturaLmhtString);
            }
        }
    });

    // TODO: Finalizar a lógica em `declaracaoPorSeletor()` (avaliador sintático reverso) para testes abaixo funcionarem
    it('Testando tradução reversa de modificadores', () => {
        for (let index = 0; index < Object.keys(TraducaoReversa).length; index += 1) {

            // Lexador Reverso recebe as estruturas FolEs
            const resultadoLexador = lexadorReverso.mapear([
                `html {`,
                `   ${TraducaoReversa[index]['css']}: 60px;`,
                "}"
            ])
            
            // Avaliador Sintático Reverso
            const resultadoAvaliadorSintatico = avaliadorReverso.analisar(resultadoLexador.simbolos);

            // Serializador reverso
            const resultadoSerializador = serializadorReverso.serializar(resultadoAvaliadorSintatico);

            // Serializador reverso deve retornar a estrutura HTML correspondente
            expect(resultadoSerializador).toContain('lmht');
            expect(resultadoSerializador).toContain(TraducaoReversa[index]['foles']);
            expect(resultadoSerializador).toContain('60px;');
        }
    });

    // OBS.: Teste genérico, precisa de implementações no Av. Sintático Reverso antes de funcionar
    it.skip('Testando tradução reversa de métodos', () => {
        // Lexador Reverso recebe as estruturas FolEs
        const resultadoLexador = lexadorReverso.mapear([
            `html {`,
            `   filter: blur(4px);`,
            "}"
        ])

        // Avaliador Sintático Reverso
        const resultadoAvaliadorSintatico = avaliadorReverso.analisar(resultadoLexador.simbolos);

        // Serializador reverso
        const resultadoSerializador = serializadorReverso.serializar(resultadoAvaliadorSintatico);

        // Serializador reverso deve retornar a estrutura HTML correspondente
        expect(resultadoSerializador).toContain('lmht');
        expect(resultadoSerializador).toContain('borrar');
        expect(resultadoSerializador).toContain('4px;');
    });
});