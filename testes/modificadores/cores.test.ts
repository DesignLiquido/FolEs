import { AvaliadorSintatico } from "../../fontes/avaliador-sintatico";
import { Lexador } from "../../fontes/lexador";
import { SeletorModificador } from "../../fontes/modificadores/superclasse";
import tiposDeSimbolos from "../../fontes/tipos-de-simbolos/foles";
import { Tradutor } from "../../fontes/tradutor";
import { Cores } from "../listas/cores";

describe('Testando Seletores que recebem COR como atributo', () => {
    describe('Testes Unitários', () => {
        let lexador: Lexador;
        let avaliador: AvaliadorSintatico;
        let tradutor: Tradutor;

        beforeEach(() => {
            lexador = new Lexador();
            avaliador = new AvaliadorSintatico();
            tradutor = new Tradutor();
        });

        it('Caso de Sucesso - Código #HEX', () => {
            for (let index = 0; index < Cores.length; index += 1) {
                const seletor = new SeletorModificador(Cores[index], '#f015ca', '');

                // Lexador
                const resultadoLexador = lexador.mapear([
                    "lmht {",
                    `${Cores[index]}: ${seletor['valor']};`,
                    "}"
                ]);

                expect(resultadoLexador.simbolos).toHaveLength(8);
                expect(resultadoLexador.simbolos).toEqual(
                    expect.arrayContaining([
                        expect.objectContaining({ tipo: tiposDeSimbolos.METODO }),
                    ])
                );


                // Avaliador Sintático
                const resultadoAvaliadorSintatico = avaliador.analisar(resultadoLexador.simbolos);

                expect(resultadoAvaliadorSintatico[0].modificadores[0].nomeFoles).toStrictEqual(
                    seletor['nomeFoles']
                );
                expect(resultadoAvaliadorSintatico[0].modificadores[0].propriedadeCss).toStrictEqual(
                    seletor['propriedadeCss']
                );

                // Tradutor
                const resultadoTradutor = tradutor.traduzir(resultadoAvaliadorSintatico);

                expect(resultadoTradutor).toContain(seletor['propriedadeCss']);
                expect(resultadoTradutor).toContain("#f015ca;");
            }
        });

        it('Caso de Sucesso - Valor RGB válido', () => {
            for (let index = 0; index < Cores.length; index += 1) {
                const seletor = new SeletorModificador(Cores[index], 'rgb(34, 12, 64)');

                // Lexador
                const resultadoLexador = lexador.mapear([
                    "lmht {",
                    `${Cores[index]}: ${seletor['valor']};`,
                    "}"
                ]);

                // O objeto terá length 14 pois cada parâmetro é identificado separadamente
                expect(resultadoLexador.simbolos).toHaveLength(14);
                expect(resultadoLexador.simbolos).toEqual(
                    expect.arrayContaining([
                        expect.objectContaining({ tipo: tiposDeSimbolos.METODO }),
                    ])
                );

                // Avaliador Sintático
                const resultadoAvaliadorSintatico = avaliador.analisar(resultadoLexador.simbolos);

                expect(resultadoAvaliadorSintatico[0].modificadores[0].nomeFoles).toStrictEqual(
                    seletor['nomeFoles']
                );
                expect(resultadoAvaliadorSintatico[0].modificadores[0].propriedadeCss).toStrictEqual(
                    seletor['propriedadeCss']
                );

                // Tradutor
                const resultadoTradutor = tradutor.traduzir(resultadoAvaliadorSintatico);

                expect(resultadoTradutor).toContain(seletor['propriedadeCss']);
                expect(resultadoTradutor).toContain("rgb(34, 12, 64);");
            }
        });

        it('Caso de Falha - Valor RGBA válido', () => {
            for (let index = 0; index < Cores.length; index += 1) {
                const seletor = new SeletorModificador(Cores[index], 'rgba(34, 64, 300)');

                // Lexador
                const resultadoLexador = lexador.mapear([
                    "lmht {",
                    `${Cores[index]}: ${seletor['valor']};`,
                    "}"
                ]);

                // O objeto terá length 14 pois cada parâmetro é identificado separadamente
                expect(resultadoLexador.simbolos).toHaveLength(14);
                expect(resultadoLexador.simbolos).toEqual(
                    expect.arrayContaining([
                        expect.objectContaining({ tipo: tiposDeSimbolos.METODO }),
                    ])
                );


                // Avaliador Sintático
                const resultadoAvaliadorSintatico = avaliador.analisar(resultadoLexador.simbolos);

                expect(resultadoAvaliadorSintatico[0].modificadores[0].nomeFoles).toStrictEqual(
                    seletor['nomeFoles']
                );
                expect(resultadoAvaliadorSintatico[0].modificadores[0].propriedadeCss).toStrictEqual(
                    seletor['propriedadeCss']
                );
                
                // Tradutor
                const resultadoTradutor = tradutor.traduzir(resultadoAvaliadorSintatico);

                expect(resultadoTradutor).toContain(seletor['propriedadeCss']);
                expect(resultadoTradutor).toContain("rgba(34, 64, 300);");
            }
        });

        it('Caso de Falha - Seletores não existentes', () => {
            for (let index = 0; index < Cores.length; index += 1) {

                // Lexador - cor não informada
                const resultadoLexador = lexador.mapear([
                    "lmht {",
                    `${Cores[index]}: ;`,
                    "}"
                ]);

                expect(resultadoLexador.simbolos).not.toEqual(
                    expect.arrayContaining([
                        expect.objectContaining({ tipo: tiposDeSimbolos.METODO }),
                    ])
                );

                // Causar erro de digitação
                const seletorIncorreto = Cores[index].replace(Cores[index][0], '')

                const novoLexador = lexador.mapear([
                    "lmht {",
                    `${seletorIncorreto}: rgb(34, 12, 64);`,
                    "}"
                ]);

                // Avaliador Sintático - Erro esperado como retorno
                expect(() => {
                    avaliador.analisar(novoLexador.simbolos);
                }).toThrow(`O seletor '${seletorIncorreto}' não foi encontrado.`);


                // Tradutor - Não deve traduzir devido ao erro do Avaliador Sintático
                expect(() => {
                    tradutor.traduzir(avaliador.analisar(novoLexador.simbolos));
                }).toHaveLength(0);
            }
        });

        it('Caso de Sucesso - Valor HSL válido', () => {
            for (let index = 0; index < Cores.length; index += 1) {
                const seletor = new SeletorModificador(Cores[index], 'hsl(34, 50%, 120%)');

                // Lexador
                const resultadoLexador = lexador.mapear([
                    "lmht {",
                    `${Cores[index]}: ${seletor['valor']};`,
                    "}"
                ]);

                expect(resultadoLexador.simbolos).toHaveLength(16);
                expect(resultadoLexador.simbolos).toEqual(
                    expect.arrayContaining([
                        expect.objectContaining({ tipo: tiposDeSimbolos.METODO }),
                    ])
                );

                // Avaliador Sintático
                const resultadoAvaliadorSintatico = avaliador.analisar(resultadoLexador.simbolos);

                expect(resultadoAvaliadorSintatico[0].modificadores[0].nomeFoles).toStrictEqual(
                    seletor['nomeFoles']
                );
                expect(resultadoAvaliadorSintatico[0].modificadores[0].propriedadeCss).toStrictEqual(
                    seletor['propriedadeCss']
                );

                // Tradutor
                const resultadoTradutor = tradutor.traduzir(resultadoAvaliadorSintatico);

                expect(resultadoTradutor).toContain(seletor['propriedadeCss']);
                expect(resultadoTradutor).toContain("hsl(34, 50%, 120%);");
            }
        });

        it('Caso de Sucesso - Valor HSLA válido', () => {
            for (let index = 0; index < Cores.length; index += 1) {
                const seletor = new SeletorModificador(Cores[index], 'hsla(34, 50%, 120%)');

                // Lexador
                const resultadoLexador = lexador.mapear([
                    "lmht {",
                    `${Cores[index]}: ${seletor['valor']};`,
                    "}"
                ]);

                expect(resultadoLexador.simbolos).toHaveLength(16);
                expect(resultadoLexador.simbolos).toEqual(
                    expect.arrayContaining([
                        expect.objectContaining({ tipo: tiposDeSimbolos.METODO }),
                    ])
                );

                // Avaliador Sintático
                const resultadoAvaliadorSintatico = avaliador.analisar(resultadoLexador.simbolos);

                expect(resultadoAvaliadorSintatico[0].modificadores[0].nomeFoles).toStrictEqual(
                    seletor['nomeFoles']
                );
                expect(resultadoAvaliadorSintatico[0].modificadores[0].propriedadeCss).toStrictEqual(
                    seletor['propriedadeCss']
                );

                // Tradutor
                const resultadoTradutor = tradutor.traduzir(resultadoAvaliadorSintatico);

                expect(resultadoTradutor).toContain(seletor['propriedadeCss']);
                expect(resultadoTradutor).toContain("hsla(34, 50%, 120%);");
            }
        });

    });
});
