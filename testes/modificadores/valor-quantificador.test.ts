import { AvaliadorSintatico } from "../../fontes/avaliador-sintatico";
import { Importador } from "../../fontes/importador";
import { AvaliadorSintaticoInterface, ImportadorInterface, LexadorInterface } from "../../fontes/interfaces";
import { Lexador } from "../../fontes/lexador";
import { SeletorModificador } from "../../fontes/modificadores/superclasse";
import { Resolvedor } from "../../fontes/resolvedores";
import { ValorAngulo, ValorComprimento, ValorPercentual, ValoresQuantificadores, ValorQuantificadorInvalido, ValorTempo } from "../listas/valores-quantificadores";
import { BlocoDeclaracao, DeclaracaoVariavel } from "../../fontes/declaracoes";
import { ValorNumerico } from "../../fontes/valores";

import tiposDeSimbolos from "../../fontes/tipos-de-simbolos/foles";

describe('Testes: Valor-Quantificador', () => {
    let lexador: LexadorInterface;
    let importador: ImportadorInterface;
    let avaliador: AvaliadorSintaticoInterface;
    let tradutor: Resolvedor;

    describe('Testando Seletores que aceitam QUALQUER Valor e Quantificador', () => {
        beforeEach(() => {
            lexador = new Lexador();
            importador = new Importador(lexador);
            avaliador = new AvaliadorSintatico(importador);
            tradutor = new Resolvedor();
        });

        it('Casos de sucesso - Lexador, Avaliador e Tradutor', () => {
            for (let index = 0; index < ValoresQuantificadores.length; index += 1) {
                const seletor = new SeletorModificador(
                    ValoresQuantificadores[index],
                    [new ValorNumerico(ValoresQuantificadores[index], 12, 'px')]
                );

                // Lexador
                const resultadoLexador = lexador.mapear([
                    "lmht {",
                    `${ValoresQuantificadores[index]}: 12px;`,
                    "}"
                ]);

                expect(resultadoLexador.simbolos.length).toBeGreaterThanOrEqual(7);
                expect(resultadoLexador.simbolos).toEqual(
                    expect.arrayContaining([
                        expect.objectContaining({ tipo: tiposDeSimbolos.NUMERO }),
                        expect.objectContaining({ tipo: tiposDeSimbolos.QUANTIFICADOR }),
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
                const resultadoTradutor = tradutor.resolver(resultadoAvaliadorSintatico);

                expect(resultadoTradutor).toContain('html');
                expect(resultadoTradutor).toContain(seletor['propriedadeCss']);
                expect(resultadoTradutor).toContain('12px');
            }
        });

        it('Casos de Falha - Lexador, Avaliador e Tradutor', () => {
            for (let index = 0; index < Object.keys(ValoresQuantificadores).length; index += 1) {

                // Lexador - valor numérico não informado
                const resultadoLexador = lexador.mapear([
                    "lmht {",
                    `${ValoresQuantificadores[index]}: ;`,
                    "}"
                ]);

                // Lexador não deve identificar número ou quantificador na estrutura
                expect(resultadoLexador.simbolos).not.toEqual(
                    expect.arrayContaining([
                        expect.objectContaining({ tipo: tiposDeSimbolos.NUMERO }),
                        expect.objectContaining({ tipo: tiposDeSimbolos.QUANTIFICADOR }),
                    ])
                );

                // Avaliador Sintático deve retornar erro
                expect(() => {
                    avaliador.analisar(resultadoLexador.simbolos);
                }).toThrow();
            }
        });

        it('Casos de Falha - Atribuição de valor inválido', () => {
            for (let index = 0; index < Object.keys(ValorQuantificadorInvalido).length; index += 1) {

                // Lexador - valor numérico não informado
                const resultadoLexador = lexador.mapear([
                    "lmht {",
                    `${ValorQuantificadorInvalido[index]}: pontilhado;`,
                    "}"
                ]);

                // Lexador não deve identificar número ou quantificador na estrutura
                expect(resultadoLexador.simbolos).not.toEqual(
                    expect.arrayContaining([
                        expect.objectContaining({ tipo: tiposDeSimbolos.NUMERO }),
                        expect.objectContaining({ tipo: tiposDeSimbolos.QUANTIFICADOR }),
                    ])
                );

                // Avaliador Sintático deve retornar erro
                expect(() => {
                    avaliador.analisar(resultadoLexador.simbolos);
                }).toThrow(`Modificador ou variável '${ValorQuantificadorInvalido[index]}' com valor pontilhado inválido.`);
            }
        });

        // TODO: Descomentar ao consertar o processo de atribuição via variável
        it.skip('Caso de Sucesso - Valor numérico atribuído por meio de variável', () => {
            for (let index = 0; index < ValoresQuantificadores.length; index += 1) {
                const seletor = new SeletorModificador(
                    ValoresQuantificadores[index],
                    [new ValorNumerico(ValoresQuantificadores[index], 12, 'px')]
                );

                // Lexador
                const resultadoLexador = lexador.mapear([
                    `$valor-padrao: 20px;`,
                    "lmht {",
                    `${ValoresQuantificadores[index]}: $valor-padrao;`,
                    "}"
                ]);

                // O Lexador deve montar o objeto de acordo, sem retornar erros.
                expect(resultadoLexador.simbolos).toHaveLength(14);
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
                const resultadoTradutor = tradutor.resolver(resultadoAvaliadorSintatico);
                expect(resultadoTradutor).toContain(seletor['propriedadeCss']);
                expect(resultadoTradutor).toContain('20px');
            }
        });
    });

    describe('Testando Seletores que recebem Quantificador PERCENTUAL', () => {
        beforeEach(() => {
            lexador = new Lexador();
            importador = new Importador(lexador);
            avaliador = new AvaliadorSintatico(importador);
            tradutor = new Resolvedor();
        });

        it('Casos de sucesso - Lexador, Avaliador e Tradutor', () => {
            for (let index = 0; index < ValorPercentual.length; index += 1) {
                const seletor = new SeletorModificador(
                    ValorPercentual[index],
                    [new ValorNumerico(ValorPercentual[index], 12, '%')]
                );

                // Lexador
                const resultadoLexador = lexador.mapear([
                    "lmht {",
                    `${ValorPercentual[index]}: 12%;`,
                    "}"
                ]);

                expect(resultadoLexador.simbolos.length).toBeGreaterThanOrEqual(7);
                expect(resultadoLexador.simbolos).toEqual(
                    expect.arrayContaining([
                        expect.objectContaining({ tipo: tiposDeSimbolos.NUMERO }),
                        expect.objectContaining({ tipo: tiposDeSimbolos.QUANTIFICADOR }),
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
                const resultadoTradutor = tradutor.resolver(resultadoAvaliadorSintatico);

                expect(resultadoTradutor).toContain(seletor['propriedadeCss']);
            }
        });
    });

    describe('Testando Seletores que recebem Quantificador DE TEMPO', () => {
        beforeEach(() => {
            lexador = new Lexador();
            importador = new Importador(lexador);
            avaliador = new AvaliadorSintatico(importador);
            tradutor = new Resolvedor();
        });

        it('Casos de sucesso - Lexador, Avaliador e Tradutor', () => {
            for (let index = 0; index < ValorTempo.length; index += 1) {
                const seletor = new SeletorModificador(
                    ValorTempo[index],
                    [new ValorNumerico(ValorTempo[index], 12, 's')]
                );

                // Lexador
                const resultadoLexador = lexador.mapear([
                    "lmht {",
                    `${ValorTempo[index]}: 12s;`,
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
                const resultadoTradutor = tradutor.resolver(resultadoAvaliadorSintatico);

                expect(resultadoTradutor).toContain(seletor['propriedadeCss']);
            }
        });
    });

    describe('Testando Seletores que recebem Quantificador DE COMPRIMENTO', () => {
        beforeEach(() => {
            lexador = new Lexador();
            importador = new Importador(lexador);
            avaliador = new AvaliadorSintatico(importador);
            tradutor = new Resolvedor();
        });

        it('Casos de sucesso - Lexador, Avaliador e Tradutor', () => {
            for (let index = 0; index < ValorComprimento.length; index += 1) {
                const seletor = new SeletorModificador(
                    ValorComprimento[index],
                    [new ValorNumerico(ValorComprimento[index], 12, 'cm')]
                );

                // Lexador
                const resultadoLexador = lexador.mapear([
                    "lmht {",
                    `${ValorComprimento[index]}: 12cm;`,
                    "}"
                ]);

                expect(resultadoLexador.simbolos.length).toBeGreaterThanOrEqual(7);
                expect(resultadoLexador.simbolos).toEqual(
                    expect.arrayContaining([
                        expect.objectContaining({ tipo: tiposDeSimbolos.NUMERO }),
                        expect.objectContaining({ tipo: tiposDeSimbolos.QUANTIFICADOR }),
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
                const resultadoTradutor = tradutor.resolver(resultadoAvaliadorSintatico);

                expect(resultadoTradutor).toContain(seletor['propriedadeCss']);
            }
        });
    });

    describe('Testando Seletores que recebem Quantificador DE ÂNGULO', () => {
        beforeEach(() => {
            lexador = new Lexador();
            importador = new Importador(lexador);
            avaliador = new AvaliadorSintatico(importador);
            tradutor = new Resolvedor();
        });

        it('Casos de sucesso - Lexador, Avaliador e Tradutor', () => {
            for (let index = 0; index < ValorAngulo.length; index += 1) {
                const seletor = new SeletorModificador(
                    ValorAngulo[index],
                    [new ValorNumerico(ValorAngulo[index], 12, 'deg')]
                );

                // Lexador
                const resultadoLexador = lexador.mapear([
                    "lmht {",
                    `${ValorAngulo[index]}: 12deg;`,
                    "}"
                ]);

                expect(resultadoLexador.simbolos.length).toBeGreaterThanOrEqual(7);
                expect(resultadoLexador.simbolos).toEqual(
                    expect.arrayContaining([
                        expect.objectContaining({ tipo: tiposDeSimbolos.NUMERO }),
                        expect.objectContaining({ tipo: tiposDeSimbolos.QUANTIFICADOR }),
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
                const resultadoTradutor = tradutor.resolver(resultadoAvaliadorSintatico);

                expect(resultadoTradutor).toContain(seletor['propriedadeCss']);
            }
        });
    });
});
