import { AvaliadorSintaticoReverso } from "../fontes/avaliador-sintatico/avaliador-sintatico-reverso";
import { LexadorReverso } from "../fontes/lexador/lexador-reverso";
import { ResolvedorReverso } from "../fontes/resolvedores/resolvedor-reverso";
import estruturasLmht from "../fontes/tradutores/estruturas-lmht";
import { AvaliadorSintaticoInterface, ImportadorInterface, LexadorInterface } from "../fontes/interfaces";
import { Importador } from "../fontes/importador";
import { TraducaoReversa, TraducaoReversaMetodos, TraducaoReversaValorNumericoFracionario } from "../fontes/listas/traducao-reversa";
import { BlocoDeclaracao } from "../fontes/declaracoes";

describe('Resolvedor Reverso', () => {
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

    it('Testando tradução das estruturas HTML', () => {
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

            // Resolvedor reverso
            const resultadoResolvedor = resolvedorReverso.resolver(resultadoAvaliadorSintatico);

            // Resolvedor reverso deve retornar a estrutura HTML correspondente
            expect(resultadoResolvedor).toContain('lmht');
            expect(resultadoResolvedor).toContain(TraducaoReversa[index]['foles']);
            expect(resultadoResolvedor).toContain('60px;');
        }
    });

    it('Testando tradução reversa de métodos', () => {
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
        expect(resultadoResolvedor).toContain('4px');
    });

    it('Testando tradução reversa de valores numéricos fracionários com quantificador', () => {
        for (let index = 0; index < Object.keys(TraducaoReversaValorNumericoFracionario).length; index += 1) {
            // Lexador Reverso recebe as estruturas FolEs
            const resultadoLexador = lexadorReverso.mapear([
                `html {`,
                `   ${TraducaoReversaValorNumericoFracionario[index]}: 0.5px;`,
                "}"
            ])

            // Avaliador Sintático Reverso
            const resultadoAvaliadorSintatico = avaliadorReverso.analisar(resultadoLexador.simbolos);

            // Resolvedor reverso
            const resultadoResolvedor = resolvedorReverso.resolver(resultadoAvaliadorSintatico);

            // Resolvedor reverso deve retornar a estrutura HTML e valor numérico correspondente
            expect(resultadoResolvedor).toContain('lmht');
            expect(resultadoResolvedor).toContain('0.5px;');
        }
    });

    it('Testando tradução reversa de valores numéricos fracionários sem quantificador', () => {
        // Lexador Reverso recebe as estruturas FolEs
        const resultadoLexador = lexadorReverso.mapear([
            `html {`,
            '   shape-image-threshold: 0.5;',
            "}"
        ])

        // Avaliador Sintático Reverso
        const resultadoAvaliadorSintatico = avaliadorReverso.analisar(resultadoLexador.simbolos);

        // Resolvedor reverso
        const resultadoResolvedor = resolvedorReverso.resolver(resultadoAvaliadorSintatico);

        // Resolvedor reverso deve retornar a estrutura HTML e valor numérico correspondente
        expect(resultadoResolvedor).toContain('lmht');
        expect(resultadoResolvedor).toContain('0.5;');
    });

    it('Testando tradução reversa de valores numéricos precedidos de ponto e com quantificador', () => {
        // Lexador Reverso recebe as estruturas FolEs
        const resultadoLexador = lexadorReverso.mapear([
            `html {`,
            '   letter-spacing: .2rem;',
            "}"
        ])

        // Avaliador Sintático Reverso
        const resultadoAvaliadorSintatico = avaliadorReverso.analisar(resultadoLexador.simbolos);

        // Resolvedor reverso
        const resultadoResolvedor = resolvedorReverso.resolver(resultadoAvaliadorSintatico);

        // Resolvedor reverso deve retornar a estrutura HTML e valor numérico correspondente
        expect(resultadoResolvedor).toContain('lmht');
        expect(resultadoResolvedor).toContain('.2rem;');
    });

    // TraducaoReversaMetodos
    it('Testando tratamento de métodos reversos', () => {
        for (let index = 0; index < Object.keys(TraducaoReversaMetodos).length; index += 1) {            
            // Lexador Reverso recebe as estruturas FolEs
            const resultadoLexador = lexadorReverso.mapear([
                `html {`,
                `   ${TraducaoReversaMetodos[index]['modificador']}: ${TraducaoReversaMetodos[index]['metodo']}(${TraducaoReversaMetodos[index]['valor']});`,
                "}"
            ]);
            // console.log(resultadoLexador.simbolos);
            

            // Avaliador Sintático Reverso
            const resultadoAvaliadorSintatico = avaliadorReverso.analisar(resultadoLexador.simbolos);

            // A estrutura deve ser devidamente instanciada como BlocoDeclaracao
            const primeiroResultado = resultadoAvaliadorSintatico[0];
            expect(primeiroResultado).toBeInstanceOf(BlocoDeclaracao);

            // O primeiro resultado deve conter modificadores em seu mapeamento
            const primeiroResultadoTipado = primeiroResultado as BlocoDeclaracao;
            expect(primeiroResultadoTipado.modificadores.length).toBeGreaterThanOrEqual(1);

            // O valor deve ser instanciado como ValorNumerico
            // const resultadoAvaliadorSintaticoTipado = primeiroResultado as BlocoDeclaracao;
            // expect(resultadoAvaliadorSintaticoTipado.modificadores[0].valores[0]).toBeInstanceOf(Valorm);

            // Resolvedor reverso
            const resultadoResolvedor = resolvedorReverso.resolver(resultadoAvaliadorSintatico);

            // Resolvedor reverso deve retornar a estrutura HTML correspondente
            expect(resultadoResolvedor).toContain('lmht');

            if (TraducaoReversaMetodos[index]['contemTraducao']) {
                expect(resultadoResolvedor).toContain(TraducaoReversaMetodos[index]['traducao']);
            } else {
                expect(resultadoResolvedor).toContain(TraducaoReversaMetodos[index]['valor']);
            }
        }
    });
});