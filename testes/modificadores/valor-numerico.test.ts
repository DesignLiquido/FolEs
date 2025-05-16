import { AvaliadorSintatico } from "../../fontes/avaliador-sintatico";
import { Importador } from "../../fontes/importador";
import { AvaliadorSintaticoInterface, ImportadorInterface, LexadorInterface } from "../../fontes/interfaces";
import { Lexador } from "../../fontes/lexador";
import { SeletorModificador } from "../../fontes/modificadores/superclasse";
import tiposDeSimbolos from "../../fontes/tipos-de-simbolos/foles";
import { Serializador } from "../../fontes/serializadores";
import { ValorNumerico, ValorNumericoApenas, ValorNumericoComQuantificador, ValorNumericoZeroUm } from "../listas/valor-numerico";
import { BlocoDeclaracao, DeclaracaoVariavel } from "../../fontes/declaracoes";

describe('Testando Seletores que recebem VALOR NUMÉRICO sem quantificador', () => {
    describe('Testes Unitários', () => {
        let lexador: LexadorInterface;
        let importador: ImportadorInterface;
        let avaliador: AvaliadorSintaticoInterface;
        let tradutor: Serializador;

        beforeEach(() => {
            lexador = new Lexador();
            importador = new Importador(lexador);
            avaliador = new AvaliadorSintatico(importador);
            tradutor = new Serializador();
        });

        it('Casos de sucesso - Lexador, Avaliador e Tradutor', () => {
            for (let index = 0; index < ValorNumerico.length; index += 1) {
                const seletor = new SeletorModificador(ValorNumerico[index], '1');

                // Lexador
                const resultadoLexador = lexador.mapear([
                    "corpo {",
                    `${ValorNumerico[index]}: ${seletor['valor']};`,
                    "}"
                ]);

                expect(resultadoLexador.simbolos).toHaveLength(7);
                expect(resultadoLexador.simbolos).toEqual(
                    expect.arrayContaining([
                        expect.objectContaining({ tipo: tiposDeSimbolos.NUMERO }),
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

                // Tradutor
                const resultadoTradutor = tradutor.serializar(resultadoAvaliadorSintatico);

                expect(resultadoTradutor).toContain(seletor['propriedadeCss']);
            }
        });

        it('Casos de Falha - Lexador, Avaliador e Tradutor', () => {
            for (let index = 0; index < Object.keys(ValorNumericoApenas).length; index += 1) {

                // Lexador - valor numérico não informado
                const resultadoLexador = lexador.mapear([
                    "lmht {",
                    `${ValorNumericoApenas[index]}: ;`,
                    "}"
                ]);

                expect(resultadoLexador.simbolos).not.toEqual(
                    expect.arrayContaining([
                        expect.objectContaining({ tipo: tiposDeSimbolos.NUMERO }),
                    ])
                );

                // Tentando passar um quantificador para os modificadores (o que não deve ser permitido)
                const novoLexador = lexador.mapear([
                    "lmht {",
                    `${ValorNumericoApenas[index]}: 15px;`,
                    "}"
                ]);

                // Avaliador Sintático - Erro esperado como retorno
                const regex = /[~çáéíóúÁÉÍÓÚ]/;

                if (!regex.test(ValorNumericoApenas[index]) && regex.test(ValorNumericoApenas[index + 1])) {
                    expect(() => {
                        avaliador.analisar(novoLexador.simbolos);
                    }).toThrow(`A propriedade '${ValorNumericoApenas[index + 1]}' aceita somente valores numéricos. O quantificador 'px' é inválido para esta operação.`);
                } else {
                    expect(() => {
                        avaliador.analisar(novoLexador.simbolos);
                    }).toThrow(`A propriedade '${ValorNumericoApenas[index]}' aceita somente valores numéricos. O quantificador 'px' é inválido para esta operação.`);
                }

                // Tradutor - Não deve traduzir devido ao erro do Avaliador Sintático
                expect(() => {
                    tradutor.serializar(avaliador.analisar(novoLexador.simbolos));
                }).toHaveLength(0);
            }
        });

        it('Casos de falha - Modificadores que só aceitam zero ou um como valor numérico', () => {
            for (let index = 0; index < ValorNumericoZeroUm.length; index += 1) {
                // Lexador
                const resultadoLexador = lexador.mapear([
                    "corpo {",
                    `${ValorNumericoZeroUm[index]}: 2;`,
                    "}"
                ]);

                expect(() => {
                    avaliador.analisar(resultadoLexador.simbolos);
                }).toThrowError(`Propriedade '${ValorNumericoZeroUm[index]}' com valor 2 inválido. O valor deve estar entre 0 e 1 ou ser um dos valores:`);
            }
        });

        it('Caso de Sucesso - Valor numérico atribuído por meio de variável', () => {
            for (let index = 0; index < ValorNumerico.length; index += 1) {
                const seletor = new SeletorModificador(ValorNumerico[index], '1');

                // Lexador
                const resultadoLexador = lexador.mapear([
                    `$numero-padrao: 1;`,
                    "lmht {",
                    `${ValorNumerico[index]}: $numero-padrao;`,
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
                expect(segundoResultadoTipado.modificadores[0].nomeFoles).toStrictEqual(seletor['nomeFoles']);
                expect(segundoResultadoTipado.modificadores[0].propriedadeCss).toStrictEqual(seletor['propriedadeCss']);

                // Tradutor
                const resultadoTradutor = tradutor.serializar(resultadoAvaliadorSintatico);
                expect(resultadoTradutor).toContain(seletor['propriedadeCss']);
                expect(resultadoTradutor).toContain('1');
            }
        });
    });
});

describe('Testando Seletores que recebem VALOR NUMÉRICO com ou sem quantificador', () => {
    describe('Testes Unitários', () => {
        let lexador: LexadorInterface;
        let importador: ImportadorInterface;
        let avaliador: AvaliadorSintaticoInterface;
        let tradutor: Serializador;

        beforeEach(() => {
            lexador = new Lexador();
            importador = new Importador(lexador);
            avaliador = new AvaliadorSintatico(importador);
            tradutor = new Serializador();
        });

        it('Casos de sucesso - valor numérico apenas - Lexador, Avaliador e Tradutor', () => {
            for (let index = 0; index < ValorNumericoComQuantificador.length; index += 1) {
                const seletor = new SeletorModificador(ValorNumericoComQuantificador[index], '1');

                // Lexador
                const resultadoLexador = lexador.mapear([
                    "corpo {",
                    `${ValorNumericoComQuantificador[index]}: ${seletor['valor']};`,
                    "}"
                ]);

                expect(resultadoLexador.simbolos).toHaveLength(7);
                expect(resultadoLexador.simbolos).toEqual(
                    expect.arrayContaining([
                        expect.objectContaining({ tipo: tiposDeSimbolos.NUMERO }),
                    ])
                );

                // Avaliador Sintático                
                const resultadoAvaliadorSintatico = avaliador.analisar(resultadoLexador.simbolos);
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

                // Tradutor
                const resultadoTradutor = tradutor.serializar(resultadoAvaliadorSintatico);

                expect(resultadoTradutor).toContain(seletor['propriedadeCss']);
            }
        });

        it('Casos de Sucesso - valor numérico com quantificador - Lexador, Avaliador e Tradutor', () => {
            for (let index = 0; index < ValorNumericoComQuantificador.length; index += 1) {
                const excecoes = ['fatiar-imagem-borda', 'opacidade'];

                let seletor;
                if (excecoes.includes(ValorNumericoComQuantificador[index])) {
                    seletor = new SeletorModificador(ValorNumericoComQuantificador[index], '15', '%');
                } else {
                    seletor = new SeletorModificador(ValorNumericoComQuantificador[index], '15', 'px');
                }

                // Lexador
                const resultadoLexador = lexador.mapear([
                    "corpo {",
                    `${ValorNumericoComQuantificador[index]}: ${seletor['valor']}${seletor['quantificador']};`,
                    "}"
                ]);

                expect(resultadoLexador.simbolos).toHaveLength(8);
                expect(resultadoLexador.simbolos).toEqual(
                    expect.arrayContaining([
                        expect.objectContaining({ tipo: tiposDeSimbolos.NUMERO }),
                        expect.objectContaining({ tipo: tiposDeSimbolos.QUANTIFICADOR }),
                    ])
                );

                // Avaliador Sintático                
                const resultadoAvaliadorSintatico = avaliador.analisar(resultadoLexador.simbolos);
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

                // Tradutor
                const resultadoTradutor = tradutor.serializar(resultadoAvaliadorSintatico);

                expect(resultadoTradutor).toContain(seletor['propriedadeCss']);
            }
        });

        it('Casos de Falha - valor numérico com quantificador - Lexador, Avaliador e Tradutor', () => {
            for (let index = 0; index < ValorNumericoComQuantificador.length; index += 1) {
                // Lexador
                const resultadoLexador = lexador.mapear([
                    "lmht {",
                    `${ValorNumericoComQuantificador[index]}: ;`,
                    "}"
                ]);

                expect(resultadoLexador.simbolos).not.toEqual(
                    expect.arrayContaining([
                        expect.objectContaining({ tipo: tiposDeSimbolos.NUMERO }),
                        expect.objectContaining({ tipo: tiposDeSimbolos.QUANTIFICADOR }),
                    ])
                );

                // Causar erro de digitação
                const seletorIncorreto = ValorNumericoComQuantificador[index].replace(ValorNumericoComQuantificador[index][0], '')

                const novoLexador = lexador.mapear([
                    "lmht {",
                    `${seletorIncorreto}: 1.5;`,
                    "}"
                ]);

                // Avaliador Sintático - Erro esperado como retorno
                expect(() => {
                    avaliador.analisar(novoLexador.simbolos);
                }).toThrow(`O seletor '${seletorIncorreto}' não existe.`);

                // // Tradutor - Não deve traduzir devido ao erro do Avaliador Sintático
                expect(() => {
                    tradutor.serializar(avaliador.analisar(novoLexador.simbolos));
                }).toHaveLength(0);
            }
        });
    });
});
