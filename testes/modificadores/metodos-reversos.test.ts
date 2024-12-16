import { Importador } from "../../fontes/importador";
import { AvaliadorSintaticoInterface, ImportadorInterface, LexadorInterface } from "../../fontes/interfaces";
import { MetodoBorrar, MetodoBrilho, MetodoCalcular, MetodoContraste, MetodoCurvaCubica, MetodoEncaixarConteudo, MetodoEscalaCinza, MetodoGradienteLinear, MetodosEscalamento, MetodosInclinar, TraducaoValoresMetodos } from "../listas/metodos-css";
import tiposDeSimbolos from "../../fontes/tipos-de-simbolos/css";
import { LexadorReverso } from "../../fontes/lexador/lexador-reverso";
import { AvaliadorSintaticoReverso } from "../../fontes/avaliador-sintatico/avaliador-sintatico-reverso";
import { SerializadorReverso } from "../../fontes/serializadores";

describe('Testando MÉTODOS no processo de tradução reversa', () => {
    describe('Testes Unitários', () => {
        let lexador: LexadorInterface;
        let importador: ImportadorInterface;
        let avaliador: AvaliadorSintaticoInterface;
        let tradutor: SerializadorReverso;

        beforeEach(() => {
            lexador = new LexadorReverso();
            importador = new Importador(lexador);
            avaliador = new AvaliadorSintaticoReverso(importador);
            tradutor = new SerializadorReverso();
        });

        it('Atribuindo Método "blur()"', () => {
            for (let index = 0; index < MetodoBorrar.length; index += 1) {

                const valoresAceitos = ['100px', '100%', '0.1', '0', '1', '1.75'];

                for (let valIndex = 0; valIndex < valoresAceitos.length; valIndex += 1) {
                    // Lexador
                    const resultadoLexador = lexador.mapear([
                        "div {",
                        `${MetodoBorrar[index]}: blur(${valoresAceitos[valIndex]});`,
                        "}"
                    ]);

                    // O Lexador não deve encontrar erros
                    expect(resultadoLexador.erros).toHaveLength(0);

                    // O valor recebido deve ser mapeado como METODO
                    expect(resultadoLexador.simbolos).toEqual(
                        expect.arrayContaining([
                            expect.objectContaining({ tipo: tiposDeSimbolos.METODO }),
                        ])
                    );

                    // O Lexador deve montar um objeto de comprimento 11 caso haja quantificador e 10 caso não haja
                    if (valIndex === 0 || valIndex === 1) {
                        expect(resultadoLexador.simbolos).toHaveLength(11);
                        expect(resultadoLexador.simbolos).toEqual(
                            expect.arrayContaining([
                                expect.objectContaining({ tipo: tiposDeSimbolos.NUMERO }),
                                expect.objectContaining({ tipo: tiposDeSimbolos.QUANTIFICADOR }),
                            ])
                        );
                    } else {
                        expect(resultadoLexador.simbolos).toHaveLength(10);
                        expect(resultadoLexador.simbolos).toEqual(
                            expect.arrayContaining([
                                expect.objectContaining({ tipo: tiposDeSimbolos.NUMERO }),
                            ])
                        );
                    }

                    // Avaliador Sintático
                    const resultadoAvaliadorSintatico = avaliador.analisar(resultadoLexador.simbolos);

                    // O Avaliador deve montar um objeto com os devidos nomes FolEs e CSS
                    expect(resultadoAvaliadorSintatico[0].modificadores[0].propriedadeCss).toStrictEqual(
                        MetodoBorrar[index]
                    );

                    // Tradutor
                    const resultadoTradutor = tradutor.serializar(resultadoAvaliadorSintatico);

                    // O Tradutor deve serializar de acordo e traduzir blur para borrar
                    expect(resultadoTradutor).toContain(TraducaoValoresMetodos[MetodoBorrar[index]]);
                    expect(resultadoTradutor).toContain(`borrar(${valoresAceitos[valIndex]});`);
                }
            }
        });

        it('Atribuindo Método "brightness()"', () => {
            for (let index = 0; index < MetodoBrilho.length; index += 1) {

                const valoresAceitos = ['100px', '100%', '0.1', '0', '1', '1.75'];

                for (let valIndex = 0; valIndex < valoresAceitos.length; valIndex += 1) {
                    // Lexador
                    const resultadoLexador = lexador.mapear([
                        "div {",
                        `${MetodoBrilho[index]}: brightness(${valoresAceitos[valIndex]});`,
                        "}"
                    ]);

                    // O Lexador não deve encontrar erros
                    expect(resultadoLexador.erros).toHaveLength(0);

                    // O valor recebido deve ser mapeado como METODO
                    expect(resultadoLexador.simbolos).toEqual(
                        expect.arrayContaining([
                            expect.objectContaining({ tipo: tiposDeSimbolos.METODO }),
                        ])
                    );

                    // O Lexador deve montar um objeto de comprimento 11 caso haja quantificador e 10 caso não haja
                    if (valIndex === 0 || valIndex === 1) {
                        expect(resultadoLexador.simbolos).toHaveLength(11);
                        expect(resultadoLexador.simbolos).toEqual(
                            expect.arrayContaining([
                                expect.objectContaining({ tipo: tiposDeSimbolos.NUMERO }),
                                expect.objectContaining({ tipo: tiposDeSimbolos.QUANTIFICADOR }),
                            ])
                        );
                    } else {
                        expect(resultadoLexador.simbolos).toHaveLength(10);
                        expect(resultadoLexador.simbolos).toEqual(
                            expect.arrayContaining([
                                expect.objectContaining({ tipo: tiposDeSimbolos.NUMERO }),
                            ])
                        );
                    }

                    // Avaliador Sintático
                    const resultadoAvaliadorSintatico = avaliador.analisar(resultadoLexador.simbolos);

                    // O Avaliador deve montar um objeto com os devidos nomes FolEs e CSS
                    expect(resultadoAvaliadorSintatico[0].modificadores[0].propriedadeCss).toStrictEqual(
                        MetodoBrilho[index]
                    );

                    // Tradutor
                    const resultadoTradutor = tradutor.serializar(resultadoAvaliadorSintatico);

                    // O Tradutor deve serializar de acordo e traduzir brightness para brilho
                    expect(resultadoTradutor).toContain(TraducaoValoresMetodos[MetodoBrilho[index]]);
                    expect(resultadoTradutor).toContain(`brilho(${valoresAceitos[valIndex]});`);
                }
            }
        });

        it('Atribuindo Método "calc()"', () => {
            for (let index = 0; index < MetodoCalcular.length; index += 1) {
                // Lexador
                const resultadoLexador = lexador.mapear([
                    "div {",
                    `${MetodoCalcular[index]}: calc(100px - 80px);`,
                    "}"
                ]);

                // O Lexador deve montar um objeto de comprimento 14 sem retornar nenhum erro
                expect(resultadoLexador.simbolos).toHaveLength(14);
                expect(resultadoLexador.erros).toHaveLength(0);

                // O valor recebido deve ser mapeado como METODO
                expect(resultadoLexador.simbolos).toEqual(
                    expect.arrayContaining([
                        expect.objectContaining({ tipo: tiposDeSimbolos.METODO }),
                    ])
                );

                // O Lexador também deve encontrar números e quantificadores no mapeamento
                expect(resultadoLexador.simbolos).toEqual(
                    expect.arrayContaining([
                        expect.objectContaining({ tipo: tiposDeSimbolos.NUMERO }),
                        expect.objectContaining({ tipo: tiposDeSimbolos.QUANTIFICADOR }),
                    ])
                );

                // Avaliador Sintático
                const resultadoAvaliadorSintatico = avaliador.analisar(resultadoLexador.simbolos);

                // O Avaliador deve montar um objeto com os devidos nomes FolEs e CSS
                expect(resultadoAvaliadorSintatico[0].modificadores[0].propriedadeCss).toStrictEqual(
                    MetodoCalcular[index]
                );

                // Tradutor deve serializar de acordo e traduzir calc para calcular
                const resultadoTradutor = tradutor.serializar(resultadoAvaliadorSintatico);
                expect(resultadoTradutor).toContain(TraducaoValoresMetodos[MetodoCalcular[index]]);
                expect(resultadoTradutor).toContain('calcular(100px - 80px);');
            }
        });

        it('Atribuindo Método "contrast()"', () => {
            for (let index = 0; index < MetodoContraste.length; index += 1) {

                const valoresAceitos = ['100px', '100%', '0.1', '0', '1', '1.75'];

                for (let valIndex = 0; valIndex < valoresAceitos.length; valIndex += 1) {
                    // Lexador
                    const resultadoLexador = lexador.mapear([
                        "div {",
                        `${MetodoContraste[index]}: contrast(${valoresAceitos[valIndex]});`,
                        "}"
                    ]);

                    // O Lexador deve montar um objeto de comprimento 11 caso haja quantificador e 10 caso não haja
                    if (valIndex === 0 || valIndex === 1) {
                        expect(resultadoLexador.simbolos).toHaveLength(11);
                        expect(resultadoLexador.simbolos).toEqual(
                            expect.arrayContaining([
                                expect.objectContaining({ tipo: tiposDeSimbolos.NUMERO }),
                                expect.objectContaining({ tipo: tiposDeSimbolos.QUANTIFICADOR }),
                            ])
                        );
                    } else {
                        expect(resultadoLexador.simbolos).toHaveLength(10);
                        expect(resultadoLexador.simbolos).toEqual(
                            expect.arrayContaining([
                                expect.objectContaining({ tipo: tiposDeSimbolos.NUMERO }),
                            ])
                        );
                    }

                    // O Lexador não deve encontrar erros
                    expect(resultadoLexador.erros).toHaveLength(0);

                    // O valor recebido deve ser mapeado como METODO
                    expect(resultadoLexador.simbolos).toEqual(
                        expect.arrayContaining([
                            expect.objectContaining({ tipo: tiposDeSimbolos.METODO }),
                        ])
                    );


                    // Avaliador Sintático
                    const resultadoAvaliadorSintatico = avaliador.analisar(resultadoLexador.simbolos);

                    // O Avaliador deve montar um objeto com os devidos nomes FolEs e CSS
                    expect(resultadoAvaliadorSintatico[0].modificadores[0].propriedadeCss).toStrictEqual(
                        MetodoContraste[index]
                    );

                    // Tradutor deve serializar de acordo e traduzir contrast para contraste
                    const resultadoTradutor = tradutor.serializar(resultadoAvaliadorSintatico);
                    expect(resultadoTradutor).toContain(TraducaoValoresMetodos[MetodoContraste[index]]);
                    expect(resultadoTradutor).toContain(`contraste(${valoresAceitos[valIndex]});`);
                }
            }
        });

        it('Atribuindo Método "cubic-bezier()"', () => {
            for (let index = 0; index < MetodoCurvaCubica.length; index += 1) {
                // Lexador
                const resultadoLexador = lexador.mapear([
                    "div {",
                    `${MetodoCurvaCubica[index]}: cubic-bezier(0.42, 0.0, 1.0, 1.0);`,
                    "}"
                ]);

                // O Lexador deve montar um objeto de comprimento 16 sem retornar nenhum erro
                expect(resultadoLexador.simbolos).toHaveLength(16);
                expect(resultadoLexador.erros).toHaveLength(0);

                // O valor recebido deve ser mapeado como METODO
                expect(resultadoLexador.simbolos).toEqual(
                    expect.arrayContaining([
                        expect.objectContaining({ tipo: tiposDeSimbolos.METODO }),
                    ])
                );

                // O Lexador também deve encontrar números no mapeamento
                expect(resultadoLexador.simbolos).toEqual(
                    expect.arrayContaining([
                        expect.objectContaining({ tipo: tiposDeSimbolos.NUMERO }),
                    ])
                );

                // Avaliador Sintático
                const resultadoAvaliadorSintatico = avaliador.analisar(resultadoLexador.simbolos);

                // O Avaliador deve montar um objeto com os devidos nomes FolEs e CSS
                expect(resultadoAvaliadorSintatico[0].modificadores[0].propriedadeCss).toStrictEqual(
                    MetodoCurvaCubica[index]
                );

                // Tradutor
                const resultadoTradutor = tradutor.serializar(resultadoAvaliadorSintatico);
                expect(resultadoTradutor).toContain(TraducaoValoresMetodos[MetodoCurvaCubica[index]]);
                expect(resultadoTradutor).toContain('curva-cubica(0.42, 0, 1, 1);');
            }
        });

        it('Atribuindo Método "fit-content()"', () => {
            for (let index = 0; index < MetodoEncaixarConteudo.length; index += 1) {
                // Lexador
                const resultadoLexador = lexador.mapear([
                    "div {",
                    `${MetodoEncaixarConteudo[index]}: fit-content(200px);`,
                    "}"
                ]);

                // O Lexador deve montar um objeto de comprimento 11 sem retornar nenhum erro
                expect(resultadoLexador.simbolos).toHaveLength(11);
                expect(resultadoLexador.erros).toHaveLength(0);

                // O valor recebido deve ser mapeado como METODO
                expect(resultadoLexador.simbolos).toEqual(
                    expect.arrayContaining([
                        expect.objectContaining({ tipo: tiposDeSimbolos.METODO }),
                    ])
                );

                // O Lexador também deve encontrar número e quantificador no mapeamento
                expect(resultadoLexador.simbolos).toEqual(
                    expect.arrayContaining([
                        expect.objectContaining({ tipo: tiposDeSimbolos.NUMERO }),
                        expect.objectContaining({ tipo: tiposDeSimbolos.QUANTIFICADOR }),
                    ])
                );


                // Avaliador Sintático
                const resultadoAvaliadorSintatico = avaliador.analisar(resultadoLexador.simbolos);

                expect(resultadoAvaliadorSintatico[0].modificadores[0].propriedadeCss).toStrictEqual(
                    MetodoEncaixarConteudo[index]
                );

                // Tradutor
                const resultadoTradutor = tradutor.serializar(resultadoAvaliadorSintatico);
                expect(resultadoTradutor).toContain(TraducaoValoresMetodos[MetodoEncaixarConteudo[index]]);
                expect(resultadoTradutor).toContain('encaixar-conteudo(200px)');
            }
        });

        it('Atribuindo Método "grayscale()"', () => {
            for (let index = 0; index < MetodoEscalaCinza.length; index += 1) {

                const valoresAceitos = ['100px', '100%', '0.1', '0', '1', '1.75'];

                for (let valIndex = 0; valIndex < valoresAceitos.length; valIndex += 1) {
                    // Lexador
                    const resultadoLexador = lexador.mapear([
                        "div {",
                        `${MetodoEscalaCinza[index]}: grayscale(${valoresAceitos[valIndex]});`,
                        "}"
                    ]);

                    // O Lexador não deve encontrar erros
                    expect(resultadoLexador.erros).toHaveLength(0);

                    // O valor recebido deve ser mapeado como METODO
                    expect(resultadoLexador.simbolos).toEqual(
                        expect.arrayContaining([
                            expect.objectContaining({ tipo: tiposDeSimbolos.METODO }),
                        ])
                    );

                    // O Lexador deve montar um objeto de comprimento 11 caso haja quantificador e 10 caso não haja
                    if (valIndex === 0 || valIndex === 1) {
                        expect(resultadoLexador.simbolos).toHaveLength(11);
                        expect(resultadoLexador.simbolos).toEqual(
                            expect.arrayContaining([
                                expect.objectContaining({ tipo: tiposDeSimbolos.NUMERO }),
                                expect.objectContaining({ tipo: tiposDeSimbolos.QUANTIFICADOR }),
                            ])
                        );
                    } else {
                        expect(resultadoLexador.simbolos).toHaveLength(10);
                        expect(resultadoLexador.simbolos).toEqual(
                            expect.arrayContaining([
                                expect.objectContaining({ tipo: tiposDeSimbolos.NUMERO }),
                            ])
                        );
                    }

                    // Avaliador Sintático
                    const resultadoAvaliadorSintatico = avaliador.analisar(resultadoLexador.simbolos);

                    // O Avaliador deve montar um objeto com os devidos nomes FolEs e CSS
                    expect(resultadoAvaliadorSintatico[0].modificadores[0].propriedadeCss).toStrictEqual(
                        MetodoEscalaCinza[index]
                    );

                    // Tradutor
                    const resultadoTradutor = tradutor.serializar(resultadoAvaliadorSintatico);

                    // O Tradutor deve serializar de acordo e traduzir grayscale para escala-cinza
                    expect(resultadoTradutor).toContain(`escala-cinza(${valoresAceitos[valIndex]});`);
                }
            }
        });

        it('Atribuindo Método "scale3d()"', () => {
            for (let index = 0; index < MetodosEscalamento.length; index += 1) {
                // Lexador
                const resultadoLexador = lexador.mapear([
                    "div {",
                    `${MetodosEscalamento[index]}: scale3d(0.5, 1, 1.7);`,
                    "}"
                ]);

                // O Lexador não deve encontrar erros
                expect(resultadoLexador.erros).toHaveLength(0);

                // O valor recebido deve ser mapeado como METODO
                expect(resultadoLexador.simbolos).toEqual(
                    expect.arrayContaining([
                        expect.objectContaining({ tipo: tiposDeSimbolos.METODO }),
                    ])
                );

                // O Lexador deve montar um objeto de comprimento 14
                expect(resultadoLexador.simbolos).toHaveLength(14);
                expect(resultadoLexador.simbolos).toEqual(
                    expect.arrayContaining([
                        expect.objectContaining({ tipo: tiposDeSimbolos.NUMERO }),
                    ])
                );

                // Avaliador Sintático
                const resultadoAvaliadorSintatico = avaliador.analisar(resultadoLexador.simbolos);

                // O Avaliador deve montar um objeto com os devidos nomes FolEs e CSS
                expect(resultadoAvaliadorSintatico[0].modificadores[0].propriedadeCss).toStrictEqual(
                    MetodosEscalamento[index]
                );

                // Tradutor
                const resultadoTradutor = tradutor.serializar(resultadoAvaliadorSintatico);

                // O Tradutor deve serializar de acordo e traduzir scale3d para escalamento-3d 
                expect(resultadoTradutor).toContain(TraducaoValoresMetodos[MetodosEscalamento[index]]);
                expect(resultadoTradutor).toContain(`escalamento-3d(0.5, 1, 1.7);`);
            }
        });

        it('Atribuindo Método "scaleZ()"', () => {
            for (let index = 0; index < MetodosEscalamento.length; index += 1) {

                const valoresAceitos = ['0.1', '0', '1', '1.75'];

                for (let valIndex = 0; valIndex < valoresAceitos.length; valIndex += 1) {
                    // Lexador
                    const resultadoLexador = lexador.mapear([
                        "div {",
                        `${MetodosEscalamento[index]}: scaleZ(${valoresAceitos[valIndex]});`,
                        "}"
                    ]);

                    // O Lexador não deve encontrar erros
                    expect(resultadoLexador.erros).toHaveLength(0);

                    // O valor recebido deve ser mapeado como METODO
                    expect(resultadoLexador.simbolos).toEqual(
                        expect.arrayContaining([
                            expect.objectContaining({ tipo: tiposDeSimbolos.METODO }),
                        ])
                    );

                    // O Lexador deve montar um objeto de comprimento 10
                    expect(resultadoLexador.simbolos).toHaveLength(10);
                    expect(resultadoLexador.simbolos).toEqual(
                        expect.arrayContaining([
                            expect.objectContaining({ tipo: tiposDeSimbolos.NUMERO }),
                        ])
                    );

                    // Avaliador Sintático
                    const resultadoAvaliadorSintatico = avaliador.analisar(resultadoLexador.simbolos);

                    // O Avaliador deve montar um objeto com os devidos nomes FolEs e CSS
                    expect(resultadoAvaliadorSintatico[0].modificadores[0].propriedadeCss).toStrictEqual(
                        MetodosEscalamento[index]
                    );

                    // Tradutor
                    const resultadoTradutor = tradutor.serializar(resultadoAvaliadorSintatico);

                    // O Tradutor deve serializar de acordo e traduzir scaleZ para escalamento-eixo-z
                    expect(resultadoTradutor).toContain(TraducaoValoresMetodos[MetodosEscalamento[index]]);
                    expect(resultadoTradutor).toContain(`escalamento-eixo-z(${valoresAceitos[valIndex]});`);
                }
            }
        });

        it('Atribuindo Método "scaleX()"', () => {
            for (let index = 0; index < MetodosEscalamento.length; index += 1) {

                const valoresAceitos = ['0.1', '0', '1', '1.75'];

                for (let valIndex = 0; valIndex < valoresAceitos.length; valIndex += 1) {
                    // Lexador
                    const resultadoLexador = lexador.mapear([
                        "div {",
                        `${MetodosEscalamento[index]}: scaleX(${valoresAceitos[valIndex]});`,
                        "}"
                    ]);

                    // O Lexador não deve encontrar erros
                    expect(resultadoLexador.erros).toHaveLength(0);

                    // O valor recebido deve ser mapeado como METODO
                    expect(resultadoLexador.simbolos).toEqual(
                        expect.arrayContaining([
                            expect.objectContaining({ tipo: tiposDeSimbolos.METODO }),
                        ])
                    );

                    // O Lexador deve montar um objeto de comprimento 10
                    expect(resultadoLexador.simbolos).toHaveLength(10);
                    expect(resultadoLexador.simbolos).toEqual(
                        expect.arrayContaining([
                            expect.objectContaining({ tipo: tiposDeSimbolos.NUMERO }),
                        ])
                    );

                    // Avaliador Sintático
                    const resultadoAvaliadorSintatico = avaliador.analisar(resultadoLexador.simbolos);

                    // O Avaliador deve montar um objeto com os devidos nomes FolEs e CSS
                    expect(resultadoAvaliadorSintatico[0].modificadores[0].propriedadeCss).toStrictEqual(
                        MetodosEscalamento[index]
                    );

                    // Tradutor
                    const resultadoTradutor = tradutor.serializar(resultadoAvaliadorSintatico);

                    // O Tradutor deve serializar de acordo e traduzir scaleX para escalamento-horizontal
                    expect(resultadoTradutor).toContain(TraducaoValoresMetodos[MetodosEscalamento[index]]);
                    expect(resultadoTradutor).toContain(`escalamento-horizontal(${valoresAceitos[valIndex]});`);
                }
            }
        });

        it('Atribuindo Método "scaleY()"', () => {
            for (let index = 0; index < MetodosEscalamento.length; index += 1) {

                const valoresAceitos = ['0.1', '0', '1', '1.75'];

                for (let valIndex = 0; valIndex < valoresAceitos.length; valIndex += 1) {
                    // Lexador
                    const resultadoLexador = lexador.mapear([
                        "div {",
                        `${MetodosEscalamento[index]}: scaleY(${valoresAceitos[valIndex]});`,
                        "}"
                    ]);

                    // O Lexador não deve encontrar erros
                    expect(resultadoLexador.erros).toHaveLength(0);

                    // O valor recebido deve ser mapeado como METODO
                    expect(resultadoLexador.simbolos).toEqual(
                        expect.arrayContaining([
                            expect.objectContaining({ tipo: tiposDeSimbolos.METODO }),
                        ])
                    );

                    // O Lexador deve montar um objeto de comprimento 10
                    expect(resultadoLexador.simbolos).toHaveLength(10);
                    expect(resultadoLexador.simbolos).toEqual(
                        expect.arrayContaining([
                            expect.objectContaining({ tipo: tiposDeSimbolos.NUMERO }),
                        ])
                    );

                    // Avaliador Sintático
                    const resultadoAvaliadorSintatico = avaliador.analisar(resultadoLexador.simbolos);

                    // O Avaliador deve montar um objeto com os devidos nomes FolEs e CSS
                    expect(resultadoAvaliadorSintatico[0].modificadores[0].propriedadeCss).toStrictEqual(
                        MetodosEscalamento[index]
                    );

                    // Tradutor
                    const resultadoTradutor = tradutor.serializar(resultadoAvaliadorSintatico);

                    // O Tradutor deve serializar de acordo e traduzir scaleY para escalamento-vertical
                    expect(resultadoTradutor).toContain(TraducaoValoresMetodos[MetodosEscalamento[index]]);
                    expect(resultadoTradutor).toContain(`escalamento-vertical(${valoresAceitos[valIndex]});`);
                }
            }
        });

        it('Atribuindo Método "linear-gradient()" com valor de ângulo deg', () => {
            for (let index = 0; index < MetodoGradienteLinear.length; index += 1) {
                // Lexador
                const resultadoLexador = lexador.mapear([
                    "div {",
                    `${MetodoGradienteLinear[index]}: linear-gradient(90deg, green, yellow);`,
                    "}"
                ]);

                // O Lexador deve montar um objeto de comprimento 15 sem retornar nenhum erro
                expect(resultadoLexador.simbolos).toHaveLength(15);
                expect(resultadoLexador.erros).toHaveLength(0);

                // O valor recebido deve ser mapeado como METODO
                expect(resultadoLexador.simbolos).toEqual(
                    expect.arrayContaining([
                        expect.objectContaining({ tipo: tiposDeSimbolos.METODO }),
                    ])
                );

                // O Lexador também deve encontrar número e quantificador no mapeamento
                expect(resultadoLexador.simbolos).toEqual(
                    expect.arrayContaining([
                        expect.objectContaining({ tipo: tiposDeSimbolos.NUMERO }),
                        expect.objectContaining({ tipo: tiposDeSimbolos.QUANTIFICADOR }),
                    ])
                );

                // Avaliador Sintático
                const resultadoAvaliadorSintatico = avaliador.analisar(resultadoLexador.simbolos);

                // O Avaliador deve montar um objeto com os devidos nomes FolEs e CSS
                expect(resultadoAvaliadorSintatico[0].modificadores[0].propriedadeCss).toStrictEqual(
                    MetodoGradienteLinear[index]
                );

                // Tradutor
                const resultadoTradutor = tradutor.serializar(resultadoAvaliadorSintatico);
                expect(resultadoTradutor).toContain(TraducaoValoresMetodos[MetodoGradienteLinear[index]]);
                expect(resultadoTradutor).toContain('gradiente-linear(90deg, verde, amarelo);');
            }
        });

        it('Atribuindo Método "skew()"', () => {
            for (let index = 0; index < MetodosInclinar.length; index += 1) {

                const valoresAceitos = ['18deg', '3.142rad', '0', '1'];

                for (let valIndex = 0; valIndex < valoresAceitos.length; valIndex += 1) {
                    // Lexador
                    const resultadoLexador = lexador.mapear([
                        "div {",
                        `${MetodosInclinar[index]}: skew(${valoresAceitos[valIndex]});`,
                        "}"
                    ]);

                    // O Lexador não deve encontrar erros
                    expect(resultadoLexador.erros).toHaveLength(0);

                    // O valor recebido deve ser mapeado como METODO
                    expect(resultadoLexador.simbolos).toEqual(
                        expect.arrayContaining([
                            expect.objectContaining({ tipo: tiposDeSimbolos.METODO }),
                        ])
                    );

                    // O Lexador deve montar um objeto de comprimento 11 caso haja quantificador e 10 caso não haja
                    if (valIndex <= 1) {
                        expect(resultadoLexador.simbolos).toHaveLength(11);
                        expect(resultadoLexador.simbolos).toEqual(
                            expect.arrayContaining([
                                expect.objectContaining({ tipo: tiposDeSimbolos.NUMERO }),
                                expect.objectContaining({ tipo: tiposDeSimbolos.QUANTIFICADOR }),
                            ])
                        );
                    } else {
                        expect(resultadoLexador.simbolos).toHaveLength(10);
                        expect(resultadoLexador.simbolos).toEqual(
                            expect.arrayContaining([
                                expect.objectContaining({ tipo: tiposDeSimbolos.NUMERO }),
                            ])
                        );
                    }

                    // Avaliador Sintático
                    const resultadoAvaliadorSintatico = avaliador.analisar(resultadoLexador.simbolos);

                    // O Avaliador deve montar um objeto com os devidos nomes FolEs e CSS
                    expect(resultadoAvaliadorSintatico[0].modificadores[0].propriedadeCss).toStrictEqual(
                        MetodosInclinar[index]
                    );

                    // Tradutor
                    const resultadoTradutor = tradutor.serializar(resultadoAvaliadorSintatico);

                    // O Tradutor deve serializar de acordo e traduzir skew para inclinar
                    expect(resultadoTradutor).toContain(TraducaoValoresMetodos[MetodosInclinar[index]]);
                    expect(resultadoTradutor).toContain(`inclinar(${valoresAceitos[valIndex]});`);
                }
            }
        });

        it('Atribuindo Método "skew() com múltiplos valores"', () => {
            for (let index = 0; index < MetodosInclinar.length; index += 1) {
                // Lexador
                const resultadoLexador = lexador.mapear([
                    "div {",
                    `${MetodosInclinar[index]}: skew(15deg, 15deg);`,
                    "}"
                ]);

                // O Lexador não deve encontrar erros
                expect(resultadoLexador.erros).toHaveLength(0);

                // O valor recebido deve ser mapeado como METODO
                expect(resultadoLexador.simbolos).toEqual(
                    expect.arrayContaining([
                        expect.objectContaining({ tipo: tiposDeSimbolos.METODO }),
                    ])
                );

                // O Lexador deve montar um objeto de comprimento 14
                expect(resultadoLexador.simbolos).toHaveLength(14);
                expect(resultadoLexador.simbolos).toEqual(
                    expect.arrayContaining([
                        expect.objectContaining({ tipo: tiposDeSimbolos.NUMERO }),
                        expect.objectContaining({ tipo: tiposDeSimbolos.QUANTIFICADOR }),
                    ])
                );

                // Avaliador Sintático
                const resultadoAvaliadorSintatico = avaliador.analisar(resultadoLexador.simbolos);

                // O Avaliador deve montar um objeto com os devidos nomes FolEs e CSS
                expect(resultadoAvaliadorSintatico[0].modificadores[0].propriedadeCss).toStrictEqual(
                    MetodosInclinar[index]
                );

                // Tradutor
                const resultadoTradutor = tradutor.serializar(resultadoAvaliadorSintatico);

                // O Tradutor deve serializar de acordo e traduzir skew para inclinar
                expect(resultadoTradutor).toContain(TraducaoValoresMetodos[MetodosInclinar[index]]);
                expect(resultadoTradutor).toContain(`inclinar(15deg, 15deg);`);
            }
        });

        it('Atribuindo Método "skewX()"', () => {
            for (let index = 0; index < MetodosInclinar.length; index += 1) {
                const valoresAceitos = ['180deg', '3.142rad', '0', '1'];

                for (let valIndex = 0; valIndex < valoresAceitos.length; valIndex += 1) {
                    // Lexador
                    const resultadoLexador = lexador.mapear([
                        "div {",
                        `${MetodosInclinar[index]}: skewX(${valoresAceitos[valIndex]});`,
                        "}"
                    ]);

                    // O Lexador não deve encontrar erros
                    expect(resultadoLexador.erros).toHaveLength(0);

                    // O valor recebido deve ser mapeado como METODO
                    expect(resultadoLexador.simbolos).toEqual(
                        expect.arrayContaining([
                            expect.objectContaining({ tipo: tiposDeSimbolos.METODO }),
                        ])
                    );

                    // O Lexador deve montar um objeto de comprimento 11 caso haja quantificador e 10 caso não haja
                    if (valIndex <= 1) {
                        expect(resultadoLexador.simbolos).toHaveLength(11);
                        expect(resultadoLexador.simbolos).toEqual(
                            expect.arrayContaining([
                                expect.objectContaining({ tipo: tiposDeSimbolos.NUMERO }),
                                expect.objectContaining({ tipo: tiposDeSimbolos.QUANTIFICADOR }),
                            ])
                        );
                    } else {
                        expect(resultadoLexador.simbolos).toHaveLength(10);
                        expect(resultadoLexador.simbolos).toEqual(
                            expect.arrayContaining([
                                expect.objectContaining({ tipo: tiposDeSimbolos.NUMERO }),
                            ])
                        );
                    }

                    // Avaliador Sintático
                    const resultadoAvaliadorSintatico = avaliador.analisar(resultadoLexador.simbolos);

                    // O Avaliador deve montar um objeto com os devidos nomes FolEs e CSS
                    expect(resultadoAvaliadorSintatico[0].modificadores[0].propriedadeCss).toStrictEqual(
                        MetodosInclinar[index]
                    );

                    // Tradutor
                    const resultadoTradutor = tradutor.serializar(resultadoAvaliadorSintatico);

                    // O Tradutor deve serializar de acordo e traduzir skewX para inclinar-horizontal
                    expect(resultadoTradutor).toContain(TraducaoValoresMetodos[MetodosInclinar[index]]);
                }
            }
        });

        it('Atribuindo Método "skewY()"', () => {
            for (let index = 0; index < MetodosInclinar.length; index += 1) {
                const valoresAceitos = ['180deg', '3.142rad', '0', '1'];

                for (let valIndex = 0; valIndex < valoresAceitos.length; valIndex += 1) {
                    // Lexador
                    const resultadoLexador = lexador.mapear([
                        "div {",
                            `${MetodosInclinar[index]}: skewY(${valoresAceitos[valIndex]});`,
                        "}"
                    ]);

                    // O Lexador não deve encontrar erros
                    expect(resultadoLexador.erros).toHaveLength(0);

                    // O valor recebido deve ser mapeado como METODO
                    expect(resultadoLexador.simbolos).toEqual(
                        expect.arrayContaining([
                            expect.objectContaining({ tipo: tiposDeSimbolos.METODO }),
                        ])
                    );

                    // O Lexador deve montar um objeto de comprimento 11 caso haja quantificador e 10 caso não haja
                    if (valIndex <= 1) {
                        expect(resultadoLexador.simbolos).toHaveLength(11);
                        expect(resultadoLexador.simbolos).toEqual(
                            expect.arrayContaining([
                                expect.objectContaining({ tipo: tiposDeSimbolos.NUMERO }),
                                expect.objectContaining({ tipo: tiposDeSimbolos.QUANTIFICADOR }),
                            ])
                        );
                    } else {
                        expect(resultadoLexador.simbolos).toHaveLength(10);
                        expect(resultadoLexador.simbolos).toEqual(
                            expect.arrayContaining([
                                expect.objectContaining({ tipo: tiposDeSimbolos.NUMERO }),
                            ])
                        );
                    }

                    // Avaliador Sintático
                    const resultadoAvaliadorSintatico = avaliador.analisar(resultadoLexador.simbolos);

                    // O Avaliador deve montar um objeto com os devidos nomes FolEs e CSS
                    expect(resultadoAvaliadorSintatico[0].modificadores[0].propriedadeCss).toStrictEqual(
                        MetodosInclinar[index]
                    );

                    // Tradutor
                    const resultadoTradutor = tradutor.serializar(resultadoAvaliadorSintatico);

                    // O Tradutor deve serializar de acordo e traduzir skewY para inclinar-vertical 
                    expect(resultadoTradutor).toContain(TraducaoValoresMetodos[MetodosInclinar[index]]);
                    expect(resultadoTradutor).toContain(`inclinar-vertical(${valoresAceitos[valIndex]});`);

                }
            }
        });
    });
});