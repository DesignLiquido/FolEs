import { AvaliadorSintatico } from "../../fontes/avaliador-sintatico";
import { Importador } from "../../fontes/importador";
import { AvaliadorSintaticoInterface, ImportadorInterface, LexadorInterface } from "../../fontes/interfaces";
import { Lexador } from "../../fontes/lexador";
import { SeletorModificador } from "../../fontes/modificadores/superclasse";
import tiposDeSimbolos from "../../fontes/tipos-de-simbolos/foles";
import { Serializador } from "../../fontes/serializadores";
import { Valor } from "../../fontes/valores/valor";
import { ValorGlobal, ValorGlobalInvalido } from "../listas/valor-global";
import { BlocoDeclaracao } from "../../fontes/declaracoes";

describe('Testando Seletores com VALORES GLOBAIS', () => {
    describe('Testes Unitários', () => {
        let lexador: LexadorInterface;
        let importador: ImportadorInterface;
        let avaliadorSintatico: AvaliadorSintaticoInterface;
        let tradutor: Serializador;

        beforeEach(() => {
            lexador = new Lexador();
            importador = new Importador(lexador);
            avaliadorSintatico = new AvaliadorSintatico(importador);
            tradutor = new Serializador();
        });

        it('Casos de sucesso - Lexador, Avaliador e Tradutor', () => {
            for (let index = 0; index < Object.keys(ValorGlobal).length; index += 1) {
                const seletor = new SeletorModificador(ValorGlobal[index], 'herdar', null);

                // Lexador
                const resultadoLexador = lexador.mapear([
                    "corpo {",
                    `${ValorGlobal[index]}: ${seletor['valor']};`,
                    "}"
                ]);

                expect(resultadoLexador.simbolos).toHaveLength(7);
                expect(resultadoLexador.simbolos).toEqual(
                    expect.arrayContaining([
                        expect.objectContaining({ tipo: tiposDeSimbolos.QUALITATIVO }),
                    ])
                );

                // Avaliador Sintático
                const resultadoAvaliadorSintatico = avaliadorSintatico.analisar(resultadoLexador.simbolos);

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
                expect(resultadoTradutor).toContain('inherit');
            }
        });

        it('Casos de Falha - Seletor com erro de digitação', () => {
            for (let index = 0; index < Object.keys(ValorGlobal).length; index += 1) {
                // Causar erro de digitação
                const seletorIncorreto = ValorGlobal[index].replace(ValorGlobal[index][0], '')

                const resultadoLexador = lexador.mapear([
                    "lmht {",
                    `${seletorIncorreto}: reverter-camada;`,
                    "}"
                ]);

                // Avaliador Sintático - Erro esperado como retorno
                expect(() => {
                    avaliadorSintatico.analisar(resultadoLexador.simbolos);
                }).toThrow(`O seletor '${seletorIncorreto}' não existe.`);


                // Tradutor - Não deve traduzir devido ao erro do Avaliador Sintático
                expect(() => {
                    tradutor.serializar(avaliadorSintatico.analisar(resultadoLexador.simbolos));
                }).toHaveLength(0);
            }
        });

        it('Casos de Falha - Valor não informado', () => {
            for (let index = 0; index < Object.keys(ValorGlobal).length; index += 1) {

                // Lexador - Valor Global não informado
                const resultadoLexador = lexador.mapear([
                    "lmht {",
                    `${ValorGlobal[index]}: ;`,
                    "}"
                ]);

                expect(resultadoLexador.simbolos).not.toHaveLength(7);
                expect(resultadoLexador.simbolos).not.toEqual(
                    expect.arrayContaining([
                        expect.objectContaining({ tipo: tiposDeSimbolos.QUALITATIVO }),
                    ])
                );

                // Causar erro de digitação
                const seletorIncorreto = ValorGlobal[index].replace(ValorGlobal[index][0], '')

                const novoLexador = lexador.mapear([
                    "lmht {",
                    `${seletorIncorreto}: reverter;`,
                    "}"
                ]);

                // Avaliador Sintático - Erro esperado como retorno
                expect(() => {
                    avaliadorSintatico.analisar(novoLexador.simbolos);
                }).toThrow(`O seletor '${seletorIncorreto}' não existe.`);


                // Tradutor - Não deve traduzir devido ao erro do Avaliador Sintático
                expect(() => {
                    tradutor.serializar(avaliadorSintatico.analisar(novoLexador.simbolos));
                }).toHaveLength(0);
            }
        });

        it('Casos de falha - Valores globais inválidos', () => {
            for (let index = 0; index < ValorGlobalInvalido.length; index += 1) {
                const valorInvalido = 'aut';

                // Lexador
                const resultadoLexador = lexador.mapear([
                    "corpo {",
                    `${ValorGlobalInvalido[index]}: ${valorInvalido};`,
                    "}"
                ]);

                // Avaliador Sintático
                expect(() => {
                    avaliadorSintatico.analisar(resultadoLexador.simbolos);
                }).toThrowError(`Propriedade '${ValorGlobalInvalido[index]}' com valor ${valorInvalido} inválido.`);
            }
        });
    });
});
