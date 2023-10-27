import { AvaliadorSintatico } from "../../fontes/avaliador-sintatico";
import { Importador } from "../../fontes/importador";
import { AvaliadorSintaticoInterface, ImportadorInterface, LexadorInterface } from "../../fontes/interfaces";
import { Lexador } from "../../fontes/lexador";
import { SeletorModificador } from "../../fontes/modificadores/superclasse";
import tiposDeSimbolos from "../../fontes/tipos-de-simbolos/foles";
import { Serializador } from "../../fontes/serializadores";
import { Cores, CoresNomeFolEs } from "../listas/cores";

describe('Testando Seletores que recebem COR como atributo', () => {
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

        it('Caso de Sucesso - Cor válida', () => {
            for (let index = 0; index < Cores.length; index += 1) {
                const seletor = new SeletorModificador(Cores[index], 'castanho');

                // Lexador
                const resultadoLexador = lexador.mapear([
                    "lmht {",
                    `${Cores[index]}: ${seletor['valor']};`,
                    "}"
                ]);

                expect(resultadoLexador.simbolos).toHaveLength(7);
                expect(resultadoLexador.simbolos).toEqual(
                    expect.arrayContaining([
                        expect.objectContaining({ tipo: tiposDeSimbolos.QUALITATIVO }),
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
                const resultadoTradutor = tradutor.serializar(resultadoAvaliadorSintatico);

                expect(resultadoTradutor).toContain(seletor['propriedadeCss']);
                expect(resultadoTradutor).toContain("brown;");
            }
        });

        it('Caso de Sucesso - Código #HEX', () => {
            for (let index = 0; index < Cores.length; index += 1) {
                // Lexador
                const resultadoLexador = lexador.mapear([
                    "lmht {",
                    `${Cores[index]}: #f015ca;`,
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

                expect(resultadoAvaliadorSintatico[0].modificadores[0].propriedadeCss).toStrictEqual(
                    CoresNomeFolEs[Cores[index]]
                );

                // Tradutor
                const resultadoTradutor = tradutor.serializar(resultadoAvaliadorSintatico);

                expect(resultadoTradutor).toContain(CoresNomeFolEs[Cores[index]]);
                expect(resultadoTradutor).toContain("#f015ca;");
            }
        });

        it('Caso de Sucesso - Valor RGB válido', () => {
            for (let index = 0; index < Cores.length; index += 1) {
                // Lexador
                const resultadoLexador = lexador.mapear([
                    "lmht {",
                    `${Cores[index]}: rgb(34, 12, 64);`,
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

                expect(resultadoAvaliadorSintatico[0].modificadores[0].propriedadeCss).toStrictEqual(
                    CoresNomeFolEs[Cores[index]]
                );

                // Tradutor
                const resultadoTradutor = tradutor.serializar(resultadoAvaliadorSintatico);

                expect(resultadoTradutor).toContain(CoresNomeFolEs[Cores[index]]);
                expect(resultadoTradutor).toContain("rgb(34, 12, 64);");
            }
        });

        it('Caso de Falha - Valor RGBA válido', () => {
            for (let index = 0; index < Cores.length; index += 1) {
                // Lexador
                const resultadoLexador = lexador.mapear([
                    "lmht {",
                    `${Cores[index]}: rgba(34, 64, 300);`,
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

                expect(resultadoAvaliadorSintatico[0].modificadores[0].propriedadeCss).toStrictEqual(
                    CoresNomeFolEs[Cores[index]]
                );

                // Tradutor
                const resultadoTradutor = tradutor.serializar(resultadoAvaliadorSintatico);

                expect(resultadoTradutor).toContain(CoresNomeFolEs[Cores[index]]);
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
                }).toThrow(`O seletor '${seletorIncorreto}' não existe.`);


                // Tradutor - Não deve traduzir devido ao erro do Avaliador Sintático
                expect(() => {
                    tradutor.serializar(avaliador.analisar(novoLexador.simbolos));
                }).toHaveLength(0);
            }
        });

        it('Caso de Sucesso - Valor HSL válido', () => {
            for (let index = 0; index < Cores.length; index += 1) {
                // Lexador
                const resultadoLexador = lexador.mapear([
                    "lmht {",
                    `${Cores[index]}: hsl(34, 50%, 120%);`,
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

                expect(resultadoAvaliadorSintatico[0].modificadores[0].propriedadeCss).toStrictEqual(
                    CoresNomeFolEs[Cores[index]]
                );

                // Tradutor
                const resultadoTradutor = tradutor.serializar(resultadoAvaliadorSintatico);

                expect(resultadoTradutor).toContain(CoresNomeFolEs[Cores[index]]);
                expect(resultadoTradutor).toContain("hsl(34, 50%, 120%);");
            }
        });

        it('Caso de Sucesso - Valor HSLA válido', () => {
            for (let index = 0; index < Cores.length; index += 1) {
                // Lexador
                const resultadoLexador = lexador.mapear([
                    "lmht {",
                    `${Cores[index]}: hsla(34, 50%, 120%);`,
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

                expect(resultadoAvaliadorSintatico[0].modificadores[0].propriedadeCss).toStrictEqual(
                    CoresNomeFolEs[Cores[index]]
                );

                // Tradutor
                const resultadoTradutor = tradutor.serializar(resultadoAvaliadorSintatico);

                expect(resultadoTradutor).toContain(CoresNomeFolEs[Cores[index]]);
                expect(resultadoTradutor).toContain("hsla(34, 50%, 120%);");
            }
        });

    });
});
