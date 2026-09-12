import { AvaliadorSintatico } from "../fontes/avaliador-sintatico"
import { BlocoDeclaracao } from "../fontes/declaracoes";
import { Importador } from "../fontes/importador";
import { AvaliadorSintaticoInterface, ImportadorInterface, LexadorInterface, ResultadoLexadorInterface } from "../fontes/interfaces";
import { Lexador } from "../fontes/lexador"
import { SeletorModificador } from "../fontes/modificadores/superclasse"
import { Resolvedor } from "../fontes/resolvedores";
import { ValorNumerico, ValorQualitativo } from "../fontes/valores";
import { ValoresQualitativosCss, ValoresQuantificadores } from "../fontes/listas/valores-quantificadores"
import tiposDeSimbolos from "../fontes/tipos-de-simbolos/foles";
import { SeletorClasse, SeletorEstrutura } from "../fontes/seletores";

describe('Avaliador Sintático', () => {
    let lexador: LexadorInterface;
    let importador: ImportadorInterface;
    let avaliadorSintatico: AvaliadorSintaticoInterface;
    let resolvedor: Resolvedor;

    beforeEach(() => {
        lexador = new Lexador();
        importador = new Importador(lexador);
        avaliadorSintatico = new AvaliadorSintatico(importador);
        resolvedor = new Resolvedor();
    });

    it('Casos de sucesso - testando seletores valor-quantificador', () => {
        for (let index = 0; index < ValoresQuantificadores.length; index += 1) {
            const seletor: object = new SeletorModificador(
                ValoresQuantificadores[index],
                [new ValorNumerico(ValoresQuantificadores[index], 25, 'px')]
            ) as any;

            // Lexador
            const resultadoLexador: ResultadoLexadorInterface = lexador.mapear([
                "lmht {",
                `${ValoresQuantificadores[index]}: 25px;`,
                "}"
            ]);

            // Avaliador Sintático
            const resultadoAvaliadorSintatico = avaliadorSintatico.analisar(resultadoLexador.simbolos);
            expect(resultadoAvaliadorSintatico).toBeTruthy();
            expect(resultadoAvaliadorSintatico).toHaveLength(1);

            // O Avaliador deve montar um objeto com os devidos nomes FolEs e CSS
            expect(resultadoAvaliadorSintatico.length).toBeGreaterThanOrEqual(1);
            const primeiroResultado = resultadoAvaliadorSintatico[0];
            expect(primeiroResultado).toBeInstanceOf(BlocoDeclaracao);
            const primeiroResultadoTipado = primeiroResultado as any;
            expect(primeiroResultadoTipado.modificadores.length).toBeGreaterThanOrEqual(1);

            expect(primeiroResultadoTipado.seletores[0]['estrutura'].tagHtml).toBe('html');
            expect(primeiroResultadoTipado.seletores[0]['pseudoclasse']).toBe(undefined);

            // expect(primeiroResultadoTipado.modificadores[0].nomeFoles).toStrictEqual(
            //     seletor['nomeFoles']
            // );
            // expect(primeiroResultadoTipado.modificadores[0].propriedadeCss).toStrictEqual(
            //     seletor['propriedadeCss']
            // );
            expect(primeiroResultadoTipado.modificadores[0].valores.length).toBeGreaterThan(0);
            const valor = primeiroResultadoTipado.modificadores[0].valores[0] as ValorNumerico;
            expect(valor.literalNumerico).toStrictEqual(25);
            expect(valor.quantificador).toStrictEqual('px');

            // O resultado do Avaliador deve ser recebido corretamente pelo Tradutor
            const resultadoTradutor = resolvedor.resolver(resultadoAvaliadorSintatico);

            expect(resultadoTradutor).toBeTruthy();
        }
    });

    it('Casos de Falha - mensagens de erro esperadas como retorno', () => {
        for (let index = 0; index < Object.keys(ValoresQuantificadores).length; index += 1) {
            // Lexador - valor e quantificador não informados
            let resultadoLexador: ResultadoLexadorInterface = lexador.mapear([
                "lmht {",
                `${ValoresQuantificadores[index]}: ;`,
                "}"
            ]);

            // Avaliador Sintático deve retornar erro
            avaliadorSintatico.analisar(resultadoLexador.simbolos);
            expect(avaliadorSintatico.erros.length).toBeGreaterThan(0);

            // Causar erro de digitação
            const seletorIncorreto = ValoresQuantificadores[index].replace(ValoresQuantificadores[index][0], '')

            resultadoLexador = lexador.mapear([
                "lmht {",
                `${seletorIncorreto}: 12px;`,
                "}"
            ]);

            // Erro esperado como retorno - seletor não encontrado
            avaliadorSintatico.analisar(resultadoLexador.simbolos);
            expect(avaliadorSintatico.erros.length).toBeGreaterThan(0);
            expect(avaliadorSintatico.erros[0].message).toContain(`O seletor '${seletorIncorreto}' não existe.`);
        }
    });

    it('Casos de sucesso - testando seletores que recebem qualitativos', () => {
        for (let index = 0; index < ValoresQualitativosCss.length; index += 1) {
            // Lexador recebe modificadores com valor-quantificador
            const resultadoLexador = lexador.mapear([
                `lmht {`,
                `   ${ValoresQualitativosCss[index]['modificador']}: ${ValoresQualitativosCss[index]['valor']};`,
                "}"
            ]);

            // Avaliador Sintático
            const resultadoAvaliadorSintatico = avaliadorSintatico.analisar(resultadoLexador.simbolos);

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
            expect(valorModificadorTipado.qualitativo).toStrictEqual(ValoresQualitativosCss[index]['valor']);

            // As estruturas CSS e FolEs devem ser mapeadas de acordo
            expect(primeiroResultadoTipado.modificadores[0].nomeFoles).toContain(ValoresQualitativosCss[index]['modificador']);
            expect(primeiroResultadoTipado.seletores[0]['estrutura'].tagHtml).toBe('html');
            expect(primeiroResultadoTipado.seletores[0]['pseudoclasse']).toBe(undefined);

            // A estrutura retornada pelo Av. Sintático Reverso deve ser capaz de ser traduzida nas etapas seguintes
            const resultadoResolvedor = resolvedor.resolver(resultadoAvaliadorSintatico);
            expect(resultadoResolvedor).toContain('html');
            expect(resultadoResolvedor).toContain(ValoresQualitativosCss[index]['css']);
            expect(resultadoResolvedor).toContain(ValoresQualitativosCss[index]['traducao']);
        }
    });

    it('Caso de sucesso - estilizando estruturas de uma referida classe', () => {
            // Lexador
            const resultadoLexador: ResultadoLexadorInterface = lexador.mapear([
                ".barra paragrafo {",
                `   altura: 25px;`,
                "}"
            ]);

            // Avaliador Sintático
            const resultadoAvaliadorSintatico = avaliadorSintatico.analisar(resultadoLexador.simbolos);

            // Deve receber corretamente o objeto do Lexador, sem retornar erros
            expect(resultadoAvaliadorSintatico).toBeTruthy()

            // Espera-se o mapeamento de instâncias de SeletorClasse e SeletorEstrutura, respectivamente
            const resultadoAvaliadorTipado = resultadoAvaliadorSintatico[0] as BlocoDeclaracao;
            expect(resultadoAvaliadorTipado.seletores[0]).toBeInstanceOf(SeletorClasse);
            expect(resultadoAvaliadorTipado.seletores[1]).toBeInstanceOf(SeletorEstrutura);

            // O resultado do Avaliador deve ser recebido corretamente pelo Resolvedor
            const resultadoResolvedor = resolvedor.resolver(resultadoAvaliadorSintatico);
            expect(resultadoResolvedor).toBeTruthy();
    });
});
