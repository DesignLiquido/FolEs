import { AvaliadorSintatico } from "../../fontes/avaliador-sintatico";
import { Importador } from "../../fontes/importador";
import { AvaliadorSintaticoInterface, ImportadorInterface, LexadorInterface } from "../../fontes/interfaces";
import { Lexador } from "../../fontes/lexador";
import { SeletorModificador } from "../../fontes/modificadores/superclasse";
import tiposDeSimbolos from "../../fontes/tipos-de-simbolos/foles";
import { Serializador } from "../../fontes/serializadores";
import { Posição } from "../listas/posição";
import { BlocoDeclaracao, DeclaracaoVariavel } from "../../fontes/declaracoes";
import { posicoes } from "../../fontes/modificadores/atributos/posicoes";
import { ValorQualitativo } from "../../fontes/valores";

describe('Testando Seletores de POSIÇÃO', () => {
    let lexador: LexadorInterface;
    let importador: ImportadorInterface;
    let avaliador: AvaliadorSintaticoInterface;
    let serializador: Serializador;

    beforeEach(() => {
        lexador = new Lexador();
        importador = new Importador(lexador);
        avaliador = new AvaliadorSintatico(importador);
        serializador = new Serializador();
    });

    it('Casos de sucesso - Lexador, Avaliador e Tradutor', () => {
        for (let index = 0; index < Posição.length; index += 1) {
            const seletor = new SeletorModificador(
                Posição[index], 
                [new ValorQualitativo('centro')], 
                null
            );

            // Lexador
            const resultadoLexador = lexador.mapear([
                "corpo {",
                `${Posição[index]}: centro;`,
                "}"
            ]);

            // O modificador deve aceitar 'centro' como valor
            // expect(seletor['valor']).toEqual('centro');

            // O Lexador deve montar um objeto de comprimento 7 sem retornar nenhum erro
            expect(resultadoLexador.simbolos).toHaveLength(7);
            expect(resultadoLexador.erros).toHaveLength(0);

            // O Lexador não deve encontrar qualquer número ou quantificador na operação
            expect(resultadoLexador.simbolos).not.toEqual(
                expect.arrayContaining([
                    expect.objectContaining({ tipo: tiposDeSimbolos.QUANTIFICADOR }),
                    expect.objectContaining({ tipo: tiposDeSimbolos.NUMERO }),
                ])
            );

            // O Lexador deve classificar o valor recebido como QUALITATIVO
            expect(resultadoLexador.simbolos).toEqual(
                expect.arrayContaining([
                    expect.objectContaining({ tipo: tiposDeSimbolos.QUALITATIVO }),
                ])
            );

            // Avaliador Sintático
            const resultadoAvaliadorSintatico = avaliador.analisar(resultadoLexador.simbolos);

            // O Avaliador deve montar um objeto com os devidos nomes FolEs e CSS
            expect(resultadoAvaliadorSintatico.length).toBeGreaterThanOrEqual(1);
            const primeiroResultado = resultadoAvaliadorSintatico[0];
            expect(primeiroResultado).toBeInstanceOf(BlocoDeclaracao);
            const primeiroResultadoTipado = primeiroResultado as BlocoDeclaracao;
            expect(primeiroResultadoTipado.modificadores.length).toBeGreaterThanOrEqual(1);
            expect(primeiroResultadoTipado.modificadores[0].nomeFoles).toStrictEqual(
                seletor['nomeFoles']
            );
            expect(primeiroResultadoTipado.modificadores[0].propriedadeCss).toStrictEqual(
                seletor['propriedadeCss']
            );


            // // Tradutor
            const resultadoTradutor = serializador.serializar(resultadoAvaliadorSintatico);

            expect(resultadoTradutor).toContain('body');
            expect(resultadoTradutor).toContain(seletor['propriedadeCss']);
            expect(resultadoTradutor).toContain('center;');
        }
    });

    it('Casos de Falha - Valor não informado', () => {
        for (let index = 0; index < Object.keys(Posição).length; index += 1) {

            // Lexador - Posição não informada
            const resultadoLexador = lexador.mapear([
                "lmht {",
                `${Posição[index]}: ;`,
                "}"
            ]);

            // O objeto do Lexados não deve ser montado corretamente
            expect(resultadoLexador.simbolos).not.toHaveLength(7);
            expect(resultadoLexador.simbolos).not.toEqual(
                expect.arrayContaining([
                    expect.objectContaining({ tipo: tiposDeSimbolos.QUALITATIVO }),
                ])
            );

            // O Avaliador Sintático deve retornar um erro
            expect(() => {
                avaliador.analisar(resultadoLexador.simbolos);
            }).toThrow();
        }
    });

    it('Casos de Falha - Seletor com erro de digitação', () => {
        for (let index = 0; index < Object.keys(Posição).length; index += 1) {
            // Causar erro de digitação
            const seletorIncorreto = Posição[index].replace(Posição[index][0], '')

            const resultadoLexador = lexador.mapear([
                "lmht {",
                `${seletorIncorreto}: esquerda;`,
                "}"
            ]);

            // Avaliador Sintático - Erro esperado como retorno
            expect(() => {
                avaliador.analisar(resultadoLexador.simbolos);
            }).toThrow(`O seletor '${seletorIncorreto}' não existe.`);


            // Tradutor - Não deve traduzir devido ao erro do Avaliador Sintático
            expect(() => {
                serializador.serializar(avaliador.analisar(resultadoLexador.simbolos));
            }).toHaveLength(0);
        }
    });

    it('Caso de Sucesso - Posição atribuída por meio de variável', () => {
        const estilosFolEs = Object.keys(posicoes);
        const estilosCss = Object.values(posicoes);

        for (let index = 0; index < estilosFolEs.length; index += 1) {
            // Lexador
            const resultadoLexador = lexador.mapear([
                `$posicao-padrao: ${estilosFolEs[index]};`,
                "lmht {",
                    'posicionar-conteúdo: $posicao-padrao;',
                "}"
            ]);

            // O Lexador deve montar o objeto de acordo, sem retornar erros.
            expect(resultadoLexador.simbolos).toHaveLength(13);
            expect(resultadoLexador.erros).toHaveLength(0);

            // O mapeamento deve conter o tipo variável
            expect(resultadoLexador.simbolos).toEqual(
                expect.arrayContaining([
                    expect.objectContaining({ tipo: tiposDeSimbolos.VARIAVEL }),
                ])
            );

            // Avaliador Sintático
            const resultadoAvaliadorSintatico = avaliador.analisar(resultadoLexador.simbolos);

            // O Avaliador deve montar um objeto com os devidos nomes FolEs e CSS
            expect(resultadoAvaliadorSintatico.length).toBeGreaterThanOrEqual(1);

            // O primeiro item do mapeamento deve ser a declaração da variável
            const primeiroResultado = resultadoAvaliadorSintatico[0];
            expect(primeiroResultado).toBeInstanceOf(DeclaracaoVariavel);

            // O segundo item do mapeamento deve conter as devidas traduções
            const segundoResultado = resultadoAvaliadorSintatico[1];
            const segundoResultadoTipado = segundoResultado as BlocoDeclaracao;
            expect(segundoResultadoTipado.modificadores.length).toBeGreaterThanOrEqual(1);
            expect(segundoResultadoTipado.modificadores[0].nomeFoles).toContain('posicionar-conteúdo');
            expect(segundoResultadoTipado.modificadores[0].propriedadeCss).toStrictEqual('place-content');

            // Serializador
            const resultadoSerializacao = serializador.serializar(resultadoAvaliadorSintatico);
            expect(resultadoSerializacao).toContain(estilosCss[index]);
            expect(resultadoSerializacao).toContain('place-content');
        }
    });
});
