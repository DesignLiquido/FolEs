import { AvaliadorSintatico } from "../../fontes/avaliador-sintatico";
import { Importador } from "../../fontes/importador";
import { AvaliadorSintaticoInterface, ImportadorInterface, LexadorInterface } from "../../fontes/interfaces";
import { Lexador } from "../../fontes/lexador";
import { SeletorModificador } from "../../fontes/modificadores/superclasse";
import tiposDeSimbolos from "../../fontes/tipos-de-simbolos/foles";
import { Serializador } from "../../fontes/serializadores";
import { ValorAngulo, ValorComprimento, ValorPercentual, ValorQuantificador, ValorTempo } from "../listas/valor-quantificador";
import { BlocoDeclaracao, DeclaracaoVariavel } from "../../fontes/declaracoes";

describe('Testes: Valor-Quantificador', () => {
    let lexador: LexadorInterface;
    let importador: ImportadorInterface;
    let avaliador: AvaliadorSintaticoInterface;
    let tradutor: Serializador;

    describe('Testando Seletores que aceitam QUALQUER Valor e Quantificador', () => {
        beforeEach(() => {
            lexador = new Lexador();
            importador = new Importador(lexador);
            avaliador = new AvaliadorSintatico(importador);
            tradutor = new Serializador();
        });

        it('Casos de sucesso - Lexador, Avaliador e Tradutor', () => {
            for (let index = 0; index < ValorQuantificador.length; index += 1) {
                const seletor = new SeletorModificador(ValorQuantificador[index], '12', 'px');

                // Lexador
                const resultadoLexador = lexador.mapear([
                    "lmht {",
                    `${ValorQuantificador[index]}: ${seletor['valor']}${seletor['quantificador']};`,
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
                const resultadoTradutor = tradutor.serializar(resultadoAvaliadorSintatico);

                expect(resultadoTradutor).toContain('html');
                expect(resultadoTradutor).toContain(seletor['propriedadeCss']);
                expect(resultadoTradutor).toContain('12px');
            }
        });

        it('Casos de Falha - Lexador, Avaliador e Tradutor', () => {
            for (let index = 0; index < Object.keys(ValorQuantificador).length; index += 1) {

                // Lexador - valor numérico não informado
                const resultadoLexador = lexador.mapear([
                    "lmht {",
                    `${ValorQuantificador[index]}: ;`,
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
                }).toThrow(`Esperado ';' após declaração de valor de modificador '${ValorQuantificador[index]}'.`);
            }
        });

        it('Caso de Sucesso - Valor numérico atribuído por meio de variável', () => {
            for (let index = 0; index < ValorQuantificador.length; index += 1) {
                const seletor = new SeletorModificador(ValorQuantificador[index], '12', 'px');

                // Lexador
                const resultadoLexador = lexador.mapear([
                    `$valor-padrao: 20px;`,
                    "lmht {",
                    `${ValorQuantificador[index]}: $valor-padrao;`,
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
                const resultadoTradutor = tradutor.serializar(resultadoAvaliadorSintatico);
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
            tradutor = new Serializador();
        });

        it('Casos de sucesso - Lexador, Avaliador e Tradutor', () => {
            for (let index = 0; index < ValorPercentual.length; index += 1) {
                const seletor = new SeletorModificador(ValorPercentual[index], '12', '%');

                // Lexador
                const resultadoLexador = lexador.mapear([
                    "lmht {",
                    `${ValorPercentual[index]}: ${seletor['valor']}${seletor['quantificador']};`,
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
                const resultadoTradutor = tradutor.serializar(resultadoAvaliadorSintatico);

                expect(resultadoTradutor).toContain(seletor['propriedadeCss']);
            }
        });
    });

    describe('Testando Seletores que recebem Quantificador DE TEMPO', () => {
        beforeEach(() => {
            lexador = new Lexador();
            importador = new Importador(lexador);
            avaliador = new AvaliadorSintatico(importador);
            tradutor = new Serializador();
        });

        it('Casos de sucesso - Lexador, Avaliador e Tradutor', () => {
            for (let index = 0; index < ValorTempo.length; index += 1) {
                const seletor = new SeletorModificador(ValorTempo[index], '12', 's');

                // Lexador
                const resultadoLexador = lexador.mapear([
                    "lmht {",
                    `${ValorTempo[index]}: ${seletor['valor']}${seletor['quantificador']};`,
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
                const resultadoTradutor = tradutor.serializar(resultadoAvaliadorSintatico);

                expect(resultadoTradutor).toContain(seletor['propriedadeCss']);
            }
        });
    });

    describe('Testando Seletores que recebem Quantificador DE COMPRIMENTO', () => {
        beforeEach(() => {
            lexador = new Lexador();
            importador = new Importador(lexador);
            avaliador = new AvaliadorSintatico(importador);
            tradutor = new Serializador();
        });

        it('Casos de sucesso - Lexador, Avaliador e Tradutor', () => {
            for (let index = 0; index < ValorComprimento.length; index += 1) {
                const seletor = new SeletorModificador(ValorComprimento[index], '12', 'cm');

                // Lexador
                const resultadoLexador = lexador.mapear([
                    "lmht {",
                    `${ValorComprimento[index]}: ${seletor['valor']}${seletor['quantificador']};`,
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
                const resultadoTradutor = tradutor.serializar(resultadoAvaliadorSintatico);

                expect(resultadoTradutor).toContain(seletor['propriedadeCss']);
            }
        });
    });

    describe('Testando Seletores que recebem Quantificador DE ÂNGULO', () => {
        beforeEach(() => {
            lexador = new Lexador();
            importador = new Importador(lexador);
            avaliador = new AvaliadorSintatico(importador);
            tradutor = new Serializador();
        });

        it('Casos de sucesso - Lexador, Avaliador e Tradutor', () => {
            for (let index = 0; index < ValorAngulo.length; index += 1) {
                const seletor = new SeletorModificador(ValorAngulo[index], '12', 'deg');

                // Lexador
                const resultadoLexador = lexador.mapear([
                    "lmht {",
                    `${ValorAngulo[index]}: ${seletor['valor']}${seletor['quantificador']};`,
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
                const resultadoTradutor = tradutor.serializar(resultadoAvaliadorSintatico);

                expect(resultadoTradutor).toContain(seletor['propriedadeCss']);
            }
        });
    });
});
