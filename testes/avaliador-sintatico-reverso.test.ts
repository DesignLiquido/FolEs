import { AvaliadorSintaticoReverso } from "../fontes/avaliador-sintatico/avaliador-sintatico-reverso";
import { LexadorReverso } from "../fontes/lexador/lexador-reverso";
import { ResolvedorReverso } from "../fontes/resolvedores/resolvedor-reverso";
import { AvaliadorSintaticoInterface, ImportadorInterface, LexadorInterface } from "../fontes/interfaces";
import { Importador } from "../fontes/importador";
import { ValoresQualitativosCss, ValoresQuantificadoresCSS } from "../fontes/listas/valores-quantificadores";
import { BlocoDeclaracao } from "../fontes/declaracoes";
import { ValorNumerico, ValorQualitativo } from "../fontes/valores";
import { SeletorClasse, SeletorEstrutura } from "../fontes/seletores";

describe('Avaliador Sintático Reverso', () => {
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

    it('Casos de sucesso - testando seletores valor-quantificador', () => {
        for (let index = 0; index < ValoresQuantificadoresCSS.length; index += 1) {
            // Lexador recebe modificadores com valor-quantificador
            const resultadoLexador = lexadorReverso.mapear([
                `div {`,
                `   ${ValoresQuantificadoresCSS[index]}: 60px;`,
                "}"
            ]);

            // Avaliador Sintático
            const resultadoAvaliadorSintatico = avaliadorReverso.analisar(resultadoLexador.simbolos);

            // A estrutura deve ser devidamente instanciada como BlocoDeclaracao
            const primeiroResultado = resultadoAvaliadorSintatico[0];
            expect(primeiroResultado).toBeInstanceOf(BlocoDeclaracao);

            // O primeiro resultado deve conter modificadores em seu mapeamento
            const primeiroResultadoTipado = primeiroResultado as any;
            expect(primeiroResultadoTipado.modificadores.length).toBeGreaterThanOrEqual(1);

            // O valor deve ser instanciado como ValorNumerico
            const resultadoAvaliadorSintaticoTipado = primeiroResultado as BlocoDeclaracao;
            expect(resultadoAvaliadorSintaticoTipado.modificadores[0].valores[0]).toBeInstanceOf(ValorNumerico);

            // O mapeamento de valor e quantificador deve ser feito de acordo 
            expect(primeiroResultadoTipado.modificadores[0].valores.length).toBeGreaterThan(0);
            const valorModificadorTipado = resultadoAvaliadorSintaticoTipado.modificadores[0].valores[0] as ValorNumerico;
            expect(valorModificadorTipado.literalNumerico).toStrictEqual(60);
            expect(valorModificadorTipado.quantificador).toStrictEqual('px');

            // As estruturas CSS e FolEs devem ser mapeadas de acordo
            // expect(primeiroResultadoTipado.modificadores[0].nomeFoles).toStrictEqual('tamanho-fonte');
            expect(primeiroResultadoTipado.modificadores[0].propriedadeCss).toStrictEqual(ValoresQuantificadoresCSS[index]);
            expect(primeiroResultadoTipado.seletores[0]['estrutura'].tagHtml).toBe('div');
            expect(primeiroResultadoTipado.seletores[0]['pseudoclasse']).toBe(undefined);

            // A estrutura retornada pelo Av. Sintático Reverso deve ser capaz de ser traduzida nas etapas seguintes 
            const resultadoResolvedor = resolvedorReverso.resolver(resultadoAvaliadorSintatico);
            expect(resultadoResolvedor).toContain('divisao');
            // expect(resultadoResolvedor).toContain('tamanho-fonte');
            expect(resultadoResolvedor).toContain('60px');
        }
    });

    it('Casos de Falha - mensagens de erro esperadas como retorno', () => {
        for (let index = 0; index < Object.keys(ValoresQuantificadoresCSS).length; index += 1) {

            // Lexador - valor e quantificador não informados
            let resultadoLexador = lexadorReverso.mapear([
                "lmht {",
                `${ValoresQuantificadoresCSS[index]}: ;`,
                "}"
            ]);

            // Avaliador deve retornar erro
            expect(() => {
                avaliadorReverso.analisar(resultadoLexador.simbolos);
            }).toThrow();

            // Causando erro de digitação no seletor
            const seletorIncorreto = ValoresQuantificadoresCSS[index].replace(ValoresQuantificadoresCSS[index][0], '')

            resultadoLexador = lexadorReverso.mapear([
                "lmht {",
                `${seletorIncorreto}: 12px;`,
                "}"
            ]);

            // Erro esperado como retorno - 'Não deveria cair aqui', pois o seletor incorreto compromete o mapeamento
            expect(() => {
                avaliadorReverso.analisar(resultadoLexador.simbolos);
            }).toThrow('Não deveria cair aqui.');
        }
    });

    it('Casos de sucesso - testando seletores que recebem qualitativos', () => {
        for (let index = 0; index < ValoresQualitativosCss.length; index += 1) {
            // Lexador recebe modificadores com valor-quantificador
            const resultadoLexador = lexadorReverso.mapear([
                `div {`,
                `   ${ValoresQualitativosCss[index]['css']}: ${ValoresQualitativosCss[index]['traducao']};`,
                "}"
            ]);

            // Avaliador Sintático
            const resultadoAvaliadorSintatico = avaliadorReverso.analisar(resultadoLexador.simbolos);

            // A estrutura deve ser devidamente instanciada como BlocoDeclaracao
            const primeiroResultado = resultadoAvaliadorSintatico[0];
            expect(primeiroResultado).toBeInstanceOf(BlocoDeclaracao);

            // O primeiro resultado deve conter modificadores em seu mapeamento
            const primeiroResultadoTipado = primeiroResultado as any;
            expect(primeiroResultadoTipado.modificadores.length).toBeGreaterThanOrEqual(1);

            // O valor deve ser instanciado como ValorNumerico
            const resultadoAvaliadorSintaticoTipado = primeiroResultado as BlocoDeclaracao;
            expect(resultadoAvaliadorSintaticoTipado.modificadores[0].valores[0]).toBeInstanceOf(ValorQualitativo);

            // O mapeamento de valor e quantificador deve ser feito de acordo 
            expect(primeiroResultadoTipado.modificadores[0].valores.length).toBeGreaterThan(0);
            const valorModificadorTipado = resultadoAvaliadorSintaticoTipado.modificadores[0].valores[0] as ValorQualitativo;
            expect(valorModificadorTipado.qualitativo).toStrictEqual(ValoresQualitativosCss[index]['traducao']);

            // As estruturas CSS e FolEs devem ser mapeadas de acordo
            expect(primeiroResultadoTipado.modificadores[0].propriedadeCss).toContain(ValoresQualitativosCss[index]['css']);
            expect(primeiroResultadoTipado.seletores[0]['estrutura'].tagHtml).toBe('div');
            expect(primeiroResultadoTipado.seletores[0]['pseudoclasse']).toBe(undefined);

            // A estrutura retornada pelo Av. Sintático Reverso deve ser capaz de ser traduzida nas etapas seguintes 
            const resultadoResolvedor = resolvedorReverso.resolver(resultadoAvaliadorSintatico);
            expect(resultadoResolvedor).toContain('divisao');
            expect(resultadoResolvedor).toContain(ValoresQualitativosCss[index]['modificador']);
            expect(resultadoResolvedor).toContain(ValoresQualitativosCss[index]['valor']);
        }
    });

    it('Caso de sucesso - estilizando estruturas de uma referida classe', () => {
        // Lexador
        const resultadoLexador = lexadorReverso.mapear([
            ".bar-class p {",
            `   height: 25px;`,
            "}"
        ]);

        // Avaliador Sintático
        const resultadoAvaliadorSintatico = avaliadorReverso.analisar(resultadoLexador.simbolos);

        // Deve receber corretamente o objeto do Lexador, sem retornar erros
        expect(resultadoAvaliadorSintatico).toBeTruthy()

        // Espera-se o mapeamento de instâncias de SeletorClasse e SeletorEstrutura, respectivamente
        const resultadoAvaliadorTipado = resultadoAvaliadorSintatico[0] as BlocoDeclaracao;
        expect(resultadoAvaliadorTipado.seletores[0]).toBeInstanceOf(SeletorClasse);
        expect(resultadoAvaliadorTipado.seletores[1]).toBeInstanceOf(SeletorEstrutura);

        // O resultado do Avaliador deve ser recebido corretamente pelo Resolvedor
        const resultadoResolvedor = resolvedorReverso.resolver(resultadoAvaliadorSintatico);
        expect(resultadoResolvedor).toBeTruthy();
    });
});