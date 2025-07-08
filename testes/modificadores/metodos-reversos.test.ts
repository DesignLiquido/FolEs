import { Importador } from "../../fontes/importador";
import { AvaliadorSintaticoInterface, ImportadorInterface, LexadorInterface } from "../../fontes/interfaces";
import { LexadorReverso } from "../../fontes/lexador/lexador-reverso";
import { AvaliadorSintaticoReverso } from "../../fontes/avaliador-sintatico/avaliador-sintatico-reverso";
import { SerializadorReverso } from "../../fontes/serializadores";
import tiposDeSimbolos from "../../fontes/tipos-de-simbolos/css";
import { MetodoBorrar, MetodoBrilho, MetodoCalcular, MetodoContraste, MetodoCurvaCubica, MetodoEncaixarConteudo, MetodoEscalaCinza, MetodoGradienteLinear, MetodoInverter, MetodoLimitar, MetodoLinear, MetodoMinMax, MetodoOpacar, MetodoPassos, MetodoPerspectivar, MetodoProjetarSombra, MetodoRaio, MetodoRotacionarMatiz, MetodoSaturar, MetodosCss, MetodoSepia, MetodosEscalamento, MetodosInclinar, MetodosRotacionar, MetodosTranslacao, TraducaoValoresMetodos } from "../listas/metodos-css";
import { BlocoDeclaracao } from "../../fontes/declaracoes";
import { SeletorValorReverso } from "../../fontes/valores/seletor-valor-reverso";
import { Counter } from "../../fontes/valores/metodos/css/counter";
import { Simbolo } from "../../fontes/lexador";

describe('Testando MÉTODOS no processo de TRADUÇÃO REVERSA', () => {
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
                    expect(resultadoAvaliadorSintatico.length).toBeGreaterThanOrEqual(1);
                    const primeiroResultado = resultadoAvaliadorSintatico[0];
                    expect(primeiroResultado).toBeInstanceOf(BlocoDeclaracao);
                    const primeiroResultadoTipado = primeiroResultado as BlocoDeclaracao;
                    expect(primeiroResultadoTipado.modificadores.length).toBeGreaterThanOrEqual(1);
                    expect(primeiroResultadoTipado.modificadores[0].propriedadeCss).toStrictEqual(
                        MetodoBorrar[index]
                    );
                    expect(primeiroResultadoTipado.modificadores[0].nomeFoles).toStrictEqual(
                        TraducaoValoresMetodos[MetodoBorrar[index]]
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
                    expect(resultadoAvaliadorSintatico.length).toBeGreaterThanOrEqual(1);
                    const primeiroResultado = resultadoAvaliadorSintatico[0];
                    expect(primeiroResultado).toBeInstanceOf(BlocoDeclaracao);
                    const primeiroResultadoTipado = primeiroResultado as BlocoDeclaracao;
                    expect(primeiroResultadoTipado.modificadores.length).toBeGreaterThanOrEqual(1);
                    expect(primeiroResultadoTipado.modificadores[0].propriedadeCss).toStrictEqual(
                        MetodoBrilho[index]
                    );
                    expect(primeiroResultadoTipado.modificadores[0].nomeFoles).toStrictEqual(
                        TraducaoValoresMetodos[MetodoBrilho[index]]
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
                expect(resultadoAvaliadorSintatico.length).toBeGreaterThanOrEqual(1);
                const primeiroResultado = resultadoAvaliadorSintatico[0];
                expect(primeiroResultado).toBeInstanceOf(BlocoDeclaracao);
                const primeiroResultadoTipado = primeiroResultado as BlocoDeclaracao;
                expect(primeiroResultadoTipado.modificadores.length).toBeGreaterThanOrEqual(1);
                expect(primeiroResultadoTipado.modificadores[0].propriedadeCss).toStrictEqual(
                    MetodoCalcular[index]
                );

                // Tradutor deve serializar de acordo e traduzir calc para calcular
                const resultadoTradutor = tradutor.serializar(resultadoAvaliadorSintatico);
                expect(resultadoTradutor).toContain(TraducaoValoresMetodos[MetodoCalcular[index]]);
                expect(resultadoTradutor).toContain('calcular(100px - 80px);');
            }
        });

        it('Atribuindo Método "clamp()"', () => {
            for (let index = 0; index < MetodoLimitar.length; index += 1) {
                // Lexador
                const resultadoLexador = lexador.mapear([
                    "div {",
                    `${MetodoLimitar[index]}: clamp(10vw, 20em, 100vw);`,
                    "}"
                ]);

                // O Lexador deve montar um objeto de comprimento 17 sem retornar nenhum erro
                expect(resultadoLexador.simbolos).toHaveLength(17);
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
                expect(resultadoAvaliadorSintatico.length).toBeGreaterThanOrEqual(1);
                const primeiroResultado = resultadoAvaliadorSintatico[0];
                expect(primeiroResultado).toBeInstanceOf(BlocoDeclaracao);
                const primeiroResultadoTipado = primeiroResultado as BlocoDeclaracao;
                expect(primeiroResultadoTipado.modificadores.length).toBeGreaterThanOrEqual(1);
                expect(primeiroResultadoTipado.modificadores[0].propriedadeCss).toStrictEqual(
                    MetodoLimitar[index]
                );
                expect(primeiroResultadoTipado.modificadores[0].nomeFoles).toStrictEqual(
                    TraducaoValoresMetodos[MetodoLimitar[index]]
                );

                // Tradutor
                const resultadoTradutor = tradutor.serializar(resultadoAvaliadorSintatico);

                expect(resultadoTradutor).toContain(TraducaoValoresMetodos[MetodoLimitar[index]]);
                expect(resultadoTradutor).toContain('limitar(10vw, 20em, 100vw);');
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
                    expect(resultadoAvaliadorSintatico.length).toBeGreaterThanOrEqual(1);
                    const primeiroResultado = resultadoAvaliadorSintatico[0];
                    expect(primeiroResultado).toBeInstanceOf(BlocoDeclaracao);
                    const primeiroResultadoTipado = primeiroResultado as BlocoDeclaracao;
                    expect(primeiroResultadoTipado.modificadores.length).toBeGreaterThanOrEqual(1);
                    expect(primeiroResultadoTipado.modificadores[0].propriedadeCss).toStrictEqual(
                        MetodoContraste[index]
                    );
                    expect(primeiroResultadoTipado.modificadores[0].nomeFoles).toStrictEqual(
                        TraducaoValoresMetodos[MetodoContraste[index]]
                    );

                    // Tradutor deve serializar de acordo e traduzir contrast para contraste
                    const resultadoTradutor = tradutor.serializar(resultadoAvaliadorSintatico);
                    expect(resultadoTradutor).toContain(TraducaoValoresMetodos[MetodoContraste[index]]);
                    expect(resultadoTradutor).toContain(`contraste(${valoresAceitos[valIndex]});`);
                }
            }
        });

        it('Atribuindo Método "counter()"', () => {
            const nomeSimbolo: Simbolo = new Simbolo('IDENTIFICADOR', 'contador1', 'any', 1, 2, 3);
            const estiloSimbolo: Simbolo = new Simbolo('IDENTIFICADOR', 'upper-roman', 'any', 1, 2, 3);

            const instanciaContador: Counter = new Counter(nomeSimbolo, estiloSimbolo);

            const estilosAceitos: Array<string> = [];
            Object.keys(instanciaContador.estilosAceitos).forEach((valor) => estilosAceitos.push(valor));

            const estilosTraduzidos: Array<string> = [];
            Object.values(instanciaContador.estilosAceitos).forEach((valor) => estilosTraduzidos.push(valor));

            for (let index = 0; index < estilosAceitos.length; index += 1) {
                // Lexador
                const resultadoLexador = lexador.mapear([
                    "html {",
                    `content: counter(contador1, ${estilosAceitos[index]});`,
                    "}"
                ]);

                // O Lexador deve montar um objeto de comprimento 12 sem retornar erros
                expect(resultadoLexador.simbolos).toHaveLength(12);
                expect(resultadoLexador.erros).toHaveLength(0);

                // O Lexador deve mapear METODO e IDENTIFICADOR no processo
                expect(resultadoLexador.simbolos).toEqual(
                    expect.arrayContaining([
                        expect.objectContaining({ tipo: tiposDeSimbolos.IDENTIFICADOR }),
                        expect.objectContaining({ tipo: tiposDeSimbolos.METODO }),
                    ])
                );

                // Avaliador Sintático
                const resultadoAvaliadorSintatico = avaliador.analisar(resultadoLexador.simbolos);

                // O Avaliador deve montar um objeto com o devido nome CSS
                expect(resultadoAvaliadorSintatico.length).toBeGreaterThanOrEqual(1);
                const primeiroResultado = resultadoAvaliadorSintatico[0];
                expect(primeiroResultado).toBeInstanceOf(BlocoDeclaracao);
                const primeiroResultadoTipado = primeiroResultado as BlocoDeclaracao;
                expect(primeiroResultadoTipado.modificadores.length).toBeGreaterThanOrEqual(1);
                expect(primeiroResultadoTipado.modificadores[0].propriedadeCss).toStrictEqual('content');

                // Tradutor
                const resultadoTradutor = tradutor.serializar(resultadoAvaliadorSintatico);
                expect(resultadoTradutor).toContain('conteudo');
                expect(resultadoTradutor).toContain(`contador(contador1, ${estilosTraduzidos[index]});`);
            }
        });

        it('Caso de Falha - Método "counter()" com valor de estilo inválido', () => {
            const nomeSimbolo: Simbolo = new Simbolo('IDENTIFICADOR', 'contador', 'any', 1, 2, 3);
            const estiloSimbolo: Simbolo = new Simbolo('IDENTIFICADOR', 'upper-roman', 'any', 1, 2, 3);

            const instanciaContador: Counter = new Counter(nomeSimbolo, estiloSimbolo);

            const estilosAceitos: Array<string> = [];
            Object.keys(instanciaContador.estilosAceitos).forEach((valor) => estilosAceitos.push(valor));

            for (let index = 0; index < estilosAceitos.length; index += 1) {
                const estiloErroDigitacao = estilosAceitos[index].replace(/./, "x");

                // Lexador
                const resultadoLexador = lexador.mapear([
                    "html {",
                    `content: counter(contador1, ${estiloErroDigitacao});`,
                    "}"
                ]);

                // O Lexador deve montar um objeto de comprimento 12 sem retornar erros
                expect(resultadoLexador.simbolos).toHaveLength(12);
                expect(resultadoLexador.erros).toHaveLength(0);

                // O Avaliador Sintático também deve retornar o seu objeto sem retornar erros
                const resultadoAvaliadorSintatico = avaliador.analisar(resultadoLexador.simbolos);

                // O Serializador deve retornar o erro de estilo inválido uma vez que não consegue traduzir o valor
                expect(() => {
                    tradutor.serializar(resultadoAvaliadorSintatico)
                }).toThrow(`Valor de estilo ${estiloErroDigitacao} inválido para a função counter().`);
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
                expect(resultadoAvaliadorSintatico.length).toBeGreaterThanOrEqual(1);
                const primeiroResultado = resultadoAvaliadorSintatico[0];
                expect(primeiroResultado).toBeInstanceOf(BlocoDeclaracao);
                const primeiroResultadoTipado = primeiroResultado as BlocoDeclaracao;
                expect(primeiroResultadoTipado.modificadores.length).toBeGreaterThanOrEqual(1);
                expect(primeiroResultadoTipado.modificadores[0].propriedadeCss).toStrictEqual(
                    MetodoCurvaCubica[index]
                );

                // Tradutor
                const resultadoTradutor = tradutor.serializar(resultadoAvaliadorSintatico);
                expect(resultadoTradutor).toContain(TraducaoValoresMetodos[MetodoCurvaCubica[index]]);
                expect(resultadoTradutor).toContain('curva-cubica(0.42, 0, 1, 1);');
            }
        });

        it('Atribuindo Método "drop-shadow()" com valores de comprimento', () => {
            for (let index = 0; index < MetodoProjetarSombra.length; index += 1) {
                const comprimentos = ['15px 15px', '15px 15px 15px', '0.5rem 0.5rem', '0.5rem 0.5rem 1rem'];
                for (let posIndex = 0; posIndex < comprimentos.length; posIndex += 1) {
                    // Lexador
                    const resultadoLexador = lexador.mapear([
                        "div {",
                        `${MetodoProjetarSombra[index]}: drop-shadow(${comprimentos[posIndex]});`,
                        "}"
                    ]);

                    // O Lexador deve montar um objeto de acordo, sem retornar nenhum erro
                    expect(resultadoLexador.erros).toHaveLength(0);

                    // O valor recebido deve ser mapeado como METODO
                    expect(resultadoLexador.simbolos).toEqual(
                        expect.arrayContaining([
                            expect.objectContaining({ tipo: tiposDeSimbolos.METODO }),
                        ])
                    );

                    // O Lexador também deve sempre encontrar valores e quantificadores na operação
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
                    expect(primeiroResultadoTipado.modificadores[0].propriedadeCss).toStrictEqual(
                        MetodoProjetarSombra[index]
                    );
                    expect(primeiroResultadoTipado.modificadores[0].nomeFoles).toStrictEqual(
                        TraducaoValoresMetodos[MetodoProjetarSombra[index]]
                    );

                    // Tradutor
                    const resultadoTradutor = tradutor.serializar(resultadoAvaliadorSintatico);

                    // O Tradutor deve serializar de acordo e traduzir drop-shadow para projetar-sombra  
                    expect(resultadoTradutor).toContain(`projetar-sombra(${comprimentos[posIndex]});`);
                }
            }
        });

        it('Atribuindo Método "drop-shadow()" com valores de cor e de comprimento', () => {
            for (let index = 0; index < MetodoProjetarSombra.length; index += 1) {
                const comprimentos = [
                    '15px 15px red',
                    '15px 15px 15px red',
                    'red 0.5rem 0.5rem',
                    'red 0.5rem 0.5rem 1rem',
                ];

                for (let posIndex = 0; posIndex < comprimentos.length; posIndex += 1) {
                    // Lexador                    
                    const resultadoLexador = lexador.mapear([
                        "div {",
                        `${MetodoProjetarSombra[index]}: drop-shadow(${comprimentos[posIndex]});`,
                        "}"
                    ]);

                    // O Lexador deve montar um objeto de acordo, sem retornar nenhum erro
                    expect(resultadoLexador.erros).toHaveLength(0);

                    // O valor recebido deve ser mapeado como METODO
                    expect(resultadoLexador.simbolos).toEqual(
                        expect.arrayContaining([
                            expect.objectContaining({ tipo: tiposDeSimbolos.METODO }),
                        ])
                    );

                    // O Lexador também deve sempre encontrar valores e quantificadores na operação
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
                    expect(primeiroResultadoTipado.modificadores[0].propriedadeCss).toStrictEqual(
                        MetodoProjetarSombra[index]
                    );
                    expect(primeiroResultadoTipado.modificadores[0].nomeFoles).toStrictEqual(
                        TraducaoValoresMetodos[MetodoProjetarSombra[index]]
                    );

                    // Tradutor
                    const resultadoTradutor = tradutor.serializar(resultadoAvaliadorSintatico);

                    // O Tradutor deve serializar de acordo e traduzir red para vermelho
                    expect(resultadoTradutor).toContain('vermelho');
                }
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

                // O Avaliador deve montar um objeto com os devidos nomes FolEs e CSS
                expect(resultadoAvaliadorSintatico.length).toBeGreaterThanOrEqual(1);
                const primeiroResultado = resultadoAvaliadorSintatico[0];
                expect(primeiroResultado).toBeInstanceOf(BlocoDeclaracao);
                const primeiroResultadoTipado = primeiroResultado as BlocoDeclaracao;
                expect(primeiroResultadoTipado.modificadores.length).toBeGreaterThanOrEqual(1);
                expect(primeiroResultadoTipado.modificadores[0].propriedadeCss).toStrictEqual(
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
                    expect(resultadoAvaliadorSintatico.length).toBeGreaterThanOrEqual(1);
                    const primeiroResultado = resultadoAvaliadorSintatico[0];
                    expect(primeiroResultado).toBeInstanceOf(BlocoDeclaracao);
                    const primeiroResultadoTipado = primeiroResultado as BlocoDeclaracao;
                    expect(primeiroResultadoTipado.modificadores.length).toBeGreaterThanOrEqual(1);
                    expect(primeiroResultadoTipado.modificadores[0].propriedadeCss).toStrictEqual(
                        MetodoEscalaCinza[index]
                    );
                    expect(primeiroResultadoTipado.modificadores[0].nomeFoles).toStrictEqual(
                        TraducaoValoresMetodos[MetodoEscalaCinza[index]]
                    );

                    // Tradutor
                    const resultadoTradutor = tradutor.serializar(resultadoAvaliadorSintatico);

                    // O Tradutor deve serializar de acordo e traduzir grayscale para escala-cinza
                    expect(resultadoTradutor).toContain(`escala-cinza(${valoresAceitos[valIndex]});`);
                }
            }
        });

        it('Atribuindo Método "invert()"', () => {
            for (let index = 0; index < MetodoInverter.length; index += 1) {

                const valoresAceitos = ['100px', '100%', '0.1', '0', '1', '1.75'];

                for (let valIndex = 0; valIndex < valoresAceitos.length; valIndex += 1) {
                    // Lexador
                    const resultadoLexador = lexador.mapear([
                        "div {",
                        `${MetodoInverter[index]}: invert(${valoresAceitos[valIndex]});`,
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
                    expect(resultadoAvaliadorSintatico.length).toBeGreaterThanOrEqual(1);
                    const primeiroResultado = resultadoAvaliadorSintatico[0];
                    expect(primeiroResultado).toBeInstanceOf(BlocoDeclaracao);
                    const primeiroResultadoTipado = primeiroResultado as BlocoDeclaracao;
                    expect(primeiroResultadoTipado.modificadores.length).toBeGreaterThanOrEqual(1);
                    expect(primeiroResultadoTipado.modificadores[0].propriedadeCss).toStrictEqual(
                        MetodoInverter[index]
                    );
                    expect(primeiroResultadoTipado.modificadores[0].nomeFoles).toStrictEqual(
                        TraducaoValoresMetodos[MetodoInverter[index]]
                    );

                    // Tradutor
                    const resultadoTradutor = tradutor.serializar(resultadoAvaliadorSintatico);

                    // O Tradutor deve serializar de acordo e traduzir invert para inverter
                    expect(resultadoTradutor).toContain(`inverter(${valoresAceitos[valIndex]});`);
                }
            }
        });

        it('Atribuindo Método "linear()"', () => {
            for (let index = 0; index < MetodoLinear.length; index += 1) {
                // Lexador
                const resultadoLexador = lexador.mapear([
                    "div {",
                    `${MetodoLinear[index]}: linear(0, 0.25, 1);`,
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

                // O Lexador também deve encontrar números no mapeamento
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
                expect(primeiroResultadoTipado.modificadores[0].propriedadeCss).toStrictEqual(
                    MetodoLinear[index]
                );

                // Tradutor
                const resultadoTradutor = tradutor.serializar(resultadoAvaliadorSintatico);
                expect(resultadoTradutor).toContain(TraducaoValoresMetodos[MetodoLinear[index]]);
                expect(resultadoTradutor).toContain('linear(0, 0.25, 1);');
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
                expect(resultadoAvaliadorSintatico.length).toBeGreaterThanOrEqual(1);
                const primeiroResultado = resultadoAvaliadorSintatico[0];
                expect(primeiroResultado).toBeInstanceOf(BlocoDeclaracao);
                const primeiroResultadoTipado = primeiroResultado as BlocoDeclaracao;
                expect(primeiroResultadoTipado.modificadores.length).toBeGreaterThanOrEqual(1);
                expect(primeiroResultadoTipado.modificadores[0].propriedadeCss).toStrictEqual(
                    MetodoGradienteLinear[index]
                );

                // Tradutor
                const resultadoTradutor = tradutor.serializar(resultadoAvaliadorSintatico);
                expect(resultadoTradutor).toContain(TraducaoValoresMetodos[MetodoGradienteLinear[index]]);
                expect(resultadoTradutor).toContain('gradiente-linear(90deg, verde, amarelo);');
            }
        });

        it('Atribuindo Método "minmax()" com valor máximo', () => {
            for (let index = 0; index < MetodoMinMax.length; index += 1) {
                // Lexador
                const resultadoLexador = lexador.mapear([
                    "div {",
                    `${MetodoMinMax[index]}: minmax(100px, max-content);`,
                    "}"
                ]);

                // O Lexador deve montar um objeto de comprimento 13 sem retornar nenhum erro
                expect(resultadoLexador.simbolos).toHaveLength(13);
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
                expect(resultadoAvaliadorSintatico.length).toBeGreaterThanOrEqual(1);
                const primeiroResultado = resultadoAvaliadorSintatico[0];
                expect(primeiroResultado).toBeInstanceOf(BlocoDeclaracao);
                const primeiroResultadoTipado = primeiroResultado as BlocoDeclaracao;
                expect(primeiroResultadoTipado.modificadores.length).toBeGreaterThanOrEqual(1);
                expect(primeiroResultadoTipado.modificadores[0].propriedadeCss).toStrictEqual(
                    MetodoMinMax[index]
                );
                expect(primeiroResultadoTipado.modificadores[0].nomeFoles).toStrictEqual(
                    TraducaoValoresMetodos[MetodoMinMax[index]]
                );

                // Tradutor
                const resultadoTradutor = tradutor.serializar(resultadoAvaliadorSintatico);
                expect(resultadoTradutor).toContain(TraducaoValoresMetodos[MetodoMinMax[index]]);
                expect(resultadoTradutor).toContain('minmax(100px, conteudo-máximo);');
            }
        });

        it('Atribuindo Método "minmax()" com valor mínimo', () => {
            for (let index = 0; index < MetodoMinMax.length; index += 1) {
                // Lexador
                const resultadoLexador = lexador.mapear([
                    "div {",
                    `${MetodoMinMax[index]}: minmax(min-content, 100px);`,
                    "}"
                ]);

                // O Lexador deve montar um objeto de comprimento 13 sem retornar nenhum erro
                expect(resultadoLexador.simbolos).toHaveLength(13);
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
                expect(resultadoAvaliadorSintatico.length).toBeGreaterThanOrEqual(1);
                const primeiroResultado = resultadoAvaliadorSintatico[0];
                expect(primeiroResultado).toBeInstanceOf(BlocoDeclaracao);
                const primeiroResultadoTipado = primeiroResultado as BlocoDeclaracao;
                expect(primeiroResultadoTipado.modificadores.length).toBeGreaterThanOrEqual(1);
                expect(primeiroResultadoTipado.modificadores[0].propriedadeCss).toStrictEqual(
                    MetodoMinMax[index]
                );
                expect(primeiroResultadoTipado.modificadores[0].nomeFoles).toStrictEqual(
                    TraducaoValoresMetodos[MetodoMinMax[index]]
                );

                // Tradutor
                const resultadoTradutor = tradutor.serializar(resultadoAvaliadorSintatico);
                expect(resultadoTradutor).toContain(TraducaoValoresMetodos[MetodoMinMax[index]]);
                expect(resultadoTradutor).toContain('minmax(conteudo-mínimo, 100px);');
            }
        });

        it('Atribuindo Método "opacity()"', () => {
            for (let index = 0; index < MetodoOpacar.length; index += 1) {

                const valoresAceitos = ['100px', '100%', '0.1', '0', '1', '1.75'];

                for (let valIndex = 0; valIndex < valoresAceitos.length; valIndex += 1) {
                    // Lexador
                    const resultadoLexador = lexador.mapear([
                        "div {",
                        `${MetodoOpacar[index]}: opacity(${valoresAceitos[valIndex]});`,
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
                    expect(resultadoAvaliadorSintatico.length).toBeGreaterThanOrEqual(1);
                    const primeiroResultado = resultadoAvaliadorSintatico[0];
                    expect(primeiroResultado).toBeInstanceOf(BlocoDeclaracao);
                    const primeiroResultadoTipado = primeiroResultado as BlocoDeclaracao;
                    expect(primeiroResultadoTipado.modificadores.length).toBeGreaterThanOrEqual(1);
                    expect(primeiroResultadoTipado.modificadores[0].propriedadeCss).toStrictEqual(
                        MetodoOpacar[index]
                    );
                    expect(primeiroResultadoTipado.modificadores[0].nomeFoles).toStrictEqual(
                        TraducaoValoresMetodos[MetodoOpacar[index]]
                    );

                    // Tradutor
                    const resultadoTradutor = tradutor.serializar(resultadoAvaliadorSintatico);

                    // O Tradutor deve serializar de acordo e traduzir opacity para opacar
                    expect(resultadoTradutor).toContain(`opacar(${valoresAceitos[valIndex]});`);
                }
            }
        });

        it('Atribuindo Método "perspective()"', () => {
            for (let index = 0; index < MetodoPerspectivar.length; index += 1) {

                const valoresAceitos = ['800px', '6.5cm', '0.1', '0', '1', '1.75'];

                for (let valIndex = 0; valIndex < valoresAceitos.length; valIndex += 1) {
                    // Lexador
                    const resultadoLexador = lexador.mapear([
                        "div {",
                        `${MetodoPerspectivar[index]}: perspective(${valoresAceitos[valIndex]});`,
                        "}"
                    ]);

                    // O Lexador não deve encontrar erros
                    expect(resultadoLexador.erros).toHaveLength(0);

                    // O Lexador deve montar um objeto de comprimento 11 caso haja quantificador e 10 caso não haja
                    if (valIndex === 0 || valIndex === 1) {
                        expect(resultadoLexador.simbolos).toHaveLength(11);
                        expect(resultadoLexador.simbolos).toEqual(
                            expect.arrayContaining([
                                expect.objectContaining({ tipo: tiposDeSimbolos.NUMERO }),
                                expect.objectContaining({ tipo: tiposDeSimbolos.QUANTIFICADOR }),
                            ])
                        );
                    } else if (valIndex !== 6) {
                        expect(resultadoLexador.simbolos).toHaveLength(10);
                        expect(resultadoLexador.simbolos).toEqual(
                            expect.arrayContaining([
                                expect.objectContaining({ tipo: tiposDeSimbolos.NUMERO }),
                            ])
                        );
                    } else {
                        expect(resultadoLexador.simbolos).toHaveLength(10);
                        expect(resultadoLexador.simbolos).toEqual(
                            expect.arrayContaining([
                                expect.objectContaining({ tipo: tiposDeSimbolos.IDENTIFICADOR }),
                            ])
                        );
                    }

                    // Avaliador Sintático
                    const resultadoAvaliadorSintatico = avaliador.analisar(resultadoLexador.simbolos);

                    // O Avaliador deve montar um objeto com os devidos nomes FolEs e CSS
                    expect(resultadoAvaliadorSintatico.length).toBeGreaterThanOrEqual(1);
                    const primeiroResultado = resultadoAvaliadorSintatico[0];
                    expect(primeiroResultado).toBeInstanceOf(BlocoDeclaracao);
                    const primeiroResultadoTipado = primeiroResultado as BlocoDeclaracao;
                    expect(primeiroResultadoTipado.modificadores.length).toBeGreaterThanOrEqual(1);
                    expect(primeiroResultadoTipado.modificadores[0].propriedadeCss).toStrictEqual(
                        MetodoPerspectivar[index]
                    );
                    expect(primeiroResultadoTipado.modificadores[0].nomeFoles).toStrictEqual(
                        TraducaoValoresMetodos[MetodoPerspectivar[index]]
                    );


                    // Tradutor
                    const resultadoTradutor = tradutor.serializar(resultadoAvaliadorSintatico);

                    // O Tradutor deve serializar de acordo e traduzir perspective para perspectivar
                    expect(resultadoTradutor).toContain(`perspectivar(${valoresAceitos[valIndex]});`);
                }
            }
        });

        it('Atribuindo Método "ray()" com valores de posição e número/quantificador', () => {
            for (let index = 0; index < MetodoRaio.length; index += 1) {

                const valoresAceitos = ['closest-side', 'closest-corner', 'farthest-side', 'farthest-corner', 'sides', 'contain'];

                const traducaoValoresAceitos = ['lado-mais-próximo', 'canto-mais-próximo', 'lado-mais-distante', 'canto-mais-distante', 'lados', 'conter'];

                for (let valIndex = 0; valIndex < valoresAceitos.length; valIndex += 1) {
                    // Lexador
                    const resultadoLexador = lexador.mapear([
                        "div {",
                        `${MetodoRaio[index]}: ray(${valoresAceitos[valIndex]} 200deg);`,
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

                    // O Lexador deve montar um objeto de comprimento 12
                    expect(resultadoLexador.simbolos).toHaveLength(12);
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
                    expect(primeiroResultadoTipado.modificadores[0].propriedadeCss).toStrictEqual(
                        MetodoRaio[index]
                    );
                    expect(primeiroResultadoTipado.modificadores[0].nomeFoles).toStrictEqual(
                        TraducaoValoresMetodos[MetodoRaio[index]]
                    );

                    // Tradutor
                    const resultadoTradutor = tradutor.serializar(resultadoAvaliadorSintatico);

                    // O Tradutor deve serializar de acordo e traduzir ray para raio
                    expect(resultadoTradutor).toContain(`raio(${traducaoValoresAceitos[valIndex]} 200deg);`);
                }
            }
        });

        it('Atribuindo Método "ray()" com somente número/quantificador', () => {
            for (let index = 0; index < MetodoRaio.length; index += 1) {
                // Lexador
                const resultadoLexador = lexador.mapear([
                    "div {",
                    `${MetodoRaio[index]}: ray(200deg);`,
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

                // O Lexador deve montar um objeto de comprimento 11
                expect(resultadoLexador.simbolos).toHaveLength(11);
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
                expect(primeiroResultadoTipado.modificadores[0].propriedadeCss).toStrictEqual(
                    MetodoRaio[index]
                );
                expect(primeiroResultadoTipado.modificadores[0].nomeFoles).toStrictEqual(
                    TraducaoValoresMetodos[MetodoRaio[index]]
                );

                // Tradutor
                const resultadoTradutor = tradutor.serializar(resultadoAvaliadorSintatico);

                // O Tradutor deve serializar de acordo e traduzir ray para raio
                expect(resultadoTradutor).toContain(`raio(200deg);`);
            }
        });

        it('Atribuindo Método "rotate()"', () => {
            for (let index = 0; index < MetodosRotacionar.length; index += 1) {

                const valoresAceitos = ['45deg', '3.142rad', '0.1', '0', '1', '1.75'];

                for (let valIndex = 0; valIndex < valoresAceitos.length; valIndex += 1) {
                    // Lexador
                    const resultadoLexador = lexador.mapear([
                        "div {",
                        `${MetodosRotacionar[index]}: rotate(${valoresAceitos[valIndex]});`,
                        "}"
                    ]);

                    // O Lexador não deve encontrar erros
                    expect(resultadoLexador.erros).toHaveLength(0);

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
                    expect(resultadoAvaliadorSintatico.length).toBeGreaterThanOrEqual(1);
                    const primeiroResultado = resultadoAvaliadorSintatico[0];
                    expect(primeiroResultado).toBeInstanceOf(BlocoDeclaracao);
                    const primeiroResultadoTipado = primeiroResultado as BlocoDeclaracao;
                    expect(primeiroResultadoTipado.modificadores.length).toBeGreaterThanOrEqual(1);
                    expect(primeiroResultadoTipado.modificadores[0].propriedadeCss).toStrictEqual(
                        MetodosRotacionar[index]
                    );
                    expect(primeiroResultadoTipado.modificadores[0].nomeFoles).toStrictEqual(
                        TraducaoValoresMetodos[MetodosRotacionar[index]]
                    );

                    // Tradutor
                    const resultadoTradutor = tradutor.serializar(resultadoAvaliadorSintatico);

                    // O Tradutor deve serializar de acordo e traduzir rotate para rotacionar
                    expect(resultadoTradutor).toContain(`rotacionar(${valoresAceitos[valIndex]});`);
                }
            }
        });

        it('Atribuindo Método "rotateX()"', () => {
            for (let index = 0; index < MetodosRotacionar.length; index += 1) {

                const valoresAceitos = ['45deg', '3.142rad', '0.1', '0', '1', '1.75'];

                for (let valIndex = 0; valIndex < valoresAceitos.length; valIndex += 1) {
                    // Lexador
                    const resultadoLexador = lexador.mapear([
                        "div {",
                        `${MetodosRotacionar[index]}: rotateX(${valoresAceitos[valIndex]});`,
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
                    expect(resultadoAvaliadorSintatico.length).toBeGreaterThanOrEqual(1);
                    const primeiroResultado = resultadoAvaliadorSintatico[0];
                    expect(primeiroResultado).toBeInstanceOf(BlocoDeclaracao);
                    const primeiroResultadoTipado = primeiroResultado as BlocoDeclaracao;
                    expect(primeiroResultadoTipado.modificadores.length).toBeGreaterThanOrEqual(1);
                    expect(primeiroResultadoTipado.modificadores[0].propriedadeCss).toStrictEqual(
                        MetodosRotacionar[index]
                    );
                    expect(primeiroResultadoTipado.modificadores[0].nomeFoles).toStrictEqual(
                        TraducaoValoresMetodos[MetodosRotacionar[index]]
                    );

                    // Tradutor
                    const resultadoTradutor = tradutor.serializar(resultadoAvaliadorSintatico);

                    // O Tradutor deve serializar de acordo e traduzir rotateX para rotacionar-horizontal
                    expect(resultadoTradutor).toContain(`rotacionar-horizontal(${valoresAceitos[valIndex]});`);
                }
            }
        });

        it('Atribuindo Método "rotateY()"', () => {
            for (let index = 0; index < MetodosRotacionar.length; index += 1) {

                const valoresAceitos = ['45deg', '3.142rad', '0.1', '0', '1', '1.75'];

                for (let valIndex = 0; valIndex < valoresAceitos.length; valIndex += 1) {
                    // Lexador
                    const resultadoLexador = lexador.mapear([
                        "div {",
                        `${MetodosRotacionar[index]}: rotateY(${valoresAceitos[valIndex]});`,
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
                    expect(resultadoAvaliadorSintatico.length).toBeGreaterThanOrEqual(1);
                    const primeiroResultado = resultadoAvaliadorSintatico[0];
                    expect(primeiroResultado).toBeInstanceOf(BlocoDeclaracao);
                    const primeiroResultadoTipado = primeiroResultado as BlocoDeclaracao;
                    expect(primeiroResultadoTipado.modificadores.length).toBeGreaterThanOrEqual(1);
                    expect(primeiroResultadoTipado.modificadores[0].propriedadeCss).toStrictEqual(
                        MetodosRotacionar[index]
                    );
                    expect(primeiroResultadoTipado.modificadores[0].nomeFoles).toStrictEqual(
                        TraducaoValoresMetodos[MetodosRotacionar[index]]
                    );

                    // Tradutor
                    const resultadoTradutor = tradutor.serializar(resultadoAvaliadorSintatico);

                    // O Tradutor deve serializar de acordo e traduzir rotateY para rotacionar-vertical
                    expect(resultadoTradutor).toContain(`rotacionar-vertical(${valoresAceitos[valIndex]});`);
                }
            }
        });

        it('Atribuindo Método "rotateZ()"', () => {
            for (let index = 0; index < MetodosRotacionar.length; index += 1) {

                const valoresAceitos = ['45deg', '3.142rad', '0.1', '0', '1', '1.75'];

                for (let valIndex = 0; valIndex < valoresAceitos.length; valIndex += 1) {
                    // Lexador
                    const resultadoLexador = lexador.mapear([
                        "div {",
                        `${MetodosRotacionar[index]}: rotateZ(${valoresAceitos[valIndex]});`,
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
                    expect(resultadoAvaliadorSintatico.length).toBeGreaterThanOrEqual(1);
                    const primeiroResultado = resultadoAvaliadorSintatico[0];
                    expect(primeiroResultado).toBeInstanceOf(BlocoDeclaracao);
                    const primeiroResultadoTipado = primeiroResultado as BlocoDeclaracao;
                    expect(primeiroResultadoTipado.modificadores.length).toBeGreaterThanOrEqual(1);
                    expect(primeiroResultadoTipado.modificadores[0].propriedadeCss).toStrictEqual(
                        MetodosRotacionar[index]
                    );
                    expect(primeiroResultadoTipado.modificadores[0].nomeFoles).toStrictEqual(
                        TraducaoValoresMetodos[MetodosRotacionar[index]]
                    );

                    // Tradutor
                    const resultadoTradutor = tradutor.serializar(resultadoAvaliadorSintatico);

                    // O Tradutor deve serializar de acordo e traduzir rotateZ para rotacionar-eixo-z
                    expect(resultadoTradutor).toContain(`rotacionar-eixo-z(${valoresAceitos[valIndex]});`);
                }
            }
        });

        it('Atribuindo Método "hue-rotate()"', () => {
            for (let index = 0; index < MetodoRotacionarMatiz.length; index += 1) {

                const valoresAceitos = ['100px', '100%', '0.1', '0', '1', '1.75'];

                for (let valIndex = 0; valIndex < valoresAceitos.length; valIndex += 1) {
                    // Lexador
                    const resultadoLexador = lexador.mapear([
                        "div {",
                        `${MetodoRotacionarMatiz[index]}: hue-rotate(${valoresAceitos[valIndex]});`,
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
                    expect(resultadoAvaliadorSintatico.length).toBeGreaterThanOrEqual(1);
                    const primeiroResultado = resultadoAvaliadorSintatico[0];
                    expect(primeiroResultado).toBeInstanceOf(BlocoDeclaracao);
                    const primeiroResultadoTipado = primeiroResultado as BlocoDeclaracao;
                    expect(primeiroResultadoTipado.modificadores.length).toBeGreaterThanOrEqual(1);
                    expect(primeiroResultadoTipado.modificadores[0].propriedadeCss).toStrictEqual(
                        MetodoRotacionarMatiz[index]
                    );
                    expect(primeiroResultadoTipado.modificadores[0].nomeFoles).toStrictEqual(
                        TraducaoValoresMetodos[MetodoRotacionarMatiz[index]]
                    );

                    // Tradutor
                    const resultadoTradutor = tradutor.serializar(resultadoAvaliadorSintatico);

                    // O Tradutor deve serializar de acordo e traduzir hue-rotate para rotacionar-matiz
                    expect(resultadoTradutor).toContain(`rotacionar-matiz(${valoresAceitos[valIndex]});`);
                }
            }
        });

        it('Atribuindo Método "saturate()"', () => {
            for (let index = 0; index < MetodoSaturar.length; index += 1) {

                const valoresAceitos = ['100px', '100%', '0.1', '0', '1', '1.75'];

                for (let valIndex = 0; valIndex < valoresAceitos.length; valIndex += 1) {
                    // Lexador
                    const resultadoLexador = lexador.mapear([
                        "div {",
                        `${MetodoSaturar[index]}: saturate(${valoresAceitos[valIndex]});`,
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
                    expect(resultadoAvaliadorSintatico.length).toBeGreaterThanOrEqual(1);
                    const primeiroResultado = resultadoAvaliadorSintatico[0];
                    expect(primeiroResultado).toBeInstanceOf(BlocoDeclaracao);
                    const primeiroResultadoTipado = primeiroResultado as BlocoDeclaracao;
                    expect(primeiroResultadoTipado.modificadores.length).toBeGreaterThanOrEqual(1);
                    expect(primeiroResultadoTipado.modificadores[0].propriedadeCss).toStrictEqual(
                        MetodoSaturar[index]
                    );
                    expect(primeiroResultadoTipado.modificadores[0].nomeFoles).toStrictEqual(
                        TraducaoValoresMetodos[MetodoSaturar[index]]
                    );

                    // Tradutor
                    const resultadoTradutor = tradutor.serializar(resultadoAvaliadorSintatico);

                    // O Tradutor deve serializar de acordo e traduzir saturate para saturar
                    expect(resultadoTradutor).toContain(`saturar(${valoresAceitos[valIndex]});`);
                }
            }
        });

        it('Atribuindo Método "scale()"', () => {
            for (let index = 0; index < MetodosEscalamento.length; index += 1) {

                const valoresAceitos = ['0.1', '0', '1', '1.75'];

                for (let valIndex = 0; valIndex < valoresAceitos.length; valIndex += 1) {
                    // Lexador
                    const resultadoLexador = lexador.mapear([
                        "div {",
                        `${MetodosEscalamento[index]}: scale(${valoresAceitos[valIndex]});`,
                        "}"
                    ]);

                    // O Lexador não deve encontrar erros
                    expect(resultadoLexador.erros).toHaveLength(0);

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
                    expect(resultadoAvaliadorSintatico.length).toBeGreaterThanOrEqual(1);
                    const primeiroResultado = resultadoAvaliadorSintatico[0];
                    expect(primeiroResultado).toBeInstanceOf(BlocoDeclaracao);
                    const primeiroResultadoTipado = primeiroResultado as BlocoDeclaracao;
                    expect(primeiroResultadoTipado.modificadores.length).toBeGreaterThanOrEqual(1);
                    expect(primeiroResultadoTipado.modificadores[0].propriedadeCss).toStrictEqual(
                        MetodosEscalamento[index]
                    );
                    expect(primeiroResultadoTipado.modificadores[0].nomeFoles).toStrictEqual(
                        TraducaoValoresMetodos[MetodosEscalamento[index]]
                    );

                    // Tradutor
                    const resultadoTradutor = tradutor.serializar(resultadoAvaliadorSintatico);

                    // O Tradutor deve serializar de acordo e traduzir scale para escalamento
                    expect(resultadoTradutor).toContain(`escalamento(${valoresAceitos[valIndex]});`);
                }
            }
        });

        it('Atribuindo Método "scale()" com múltiplos valores', () => {
            for (let index = 0; index < MetodosEscalamento.length; index += 1) {
                // Lexador
                const resultadoLexador = lexador.mapear([
                    "div {",
                    `${MetodosEscalamento[index]}: scale(1.3, 0.4);`,
                    "}"
                ]);

                // O Lexador não deve encontrar erros
                expect(resultadoLexador.erros).toHaveLength(0);

                // O Lexador deve montar um objeto de comprimento 12
                expect(resultadoLexador.simbolos).toHaveLength(12);
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
                expect(primeiroResultadoTipado.modificadores[0].propriedadeCss).toStrictEqual(
                    MetodosEscalamento[index]
                );
                expect(primeiroResultadoTipado.modificadores[0].nomeFoles).toStrictEqual(
                    TraducaoValoresMetodos[MetodosEscalamento[index]]
                );

                // Tradutor
                const resultadoTradutor = tradutor.serializar(resultadoAvaliadorSintatico);

                // O Tradutor deve serializar de acordo e traduzir scale para escalamento
                expect(resultadoTradutor).toContain(`escalamento(1.3, 0.4);`);

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
                expect(resultadoAvaliadorSintatico.length).toBeGreaterThanOrEqual(1);
                const primeiroResultado = resultadoAvaliadorSintatico[0];
                expect(primeiroResultado).toBeInstanceOf(BlocoDeclaracao);
                const primeiroResultadoTipado = primeiroResultado as BlocoDeclaracao;
                expect(primeiroResultadoTipado.modificadores.length).toBeGreaterThanOrEqual(1);
                expect(primeiroResultadoTipado.modificadores[0].propriedadeCss).toStrictEqual(
                    MetodosEscalamento[index]
                );
                expect(primeiroResultadoTipado.modificadores[0].nomeFoles).toStrictEqual(
                    TraducaoValoresMetodos[MetodosEscalamento[index]]
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
                    expect(resultadoAvaliadorSintatico.length).toBeGreaterThanOrEqual(1);
                    const primeiroResultado = resultadoAvaliadorSintatico[0];
                    expect(primeiroResultado).toBeInstanceOf(BlocoDeclaracao);
                    const primeiroResultadoTipado = primeiroResultado as BlocoDeclaracao;
                    expect(primeiroResultadoTipado.modificadores.length).toBeGreaterThanOrEqual(1);
                    expect(primeiroResultadoTipado.modificadores[0].propriedadeCss).toStrictEqual(
                        MetodosEscalamento[index]
                    );
                    expect(primeiroResultadoTipado.modificadores[0].nomeFoles).toStrictEqual(
                        TraducaoValoresMetodos[MetodosEscalamento[index]]
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
                    expect(resultadoAvaliadorSintatico.length).toBeGreaterThanOrEqual(1);
                    const primeiroResultado = resultadoAvaliadorSintatico[0];
                    expect(primeiroResultado).toBeInstanceOf(BlocoDeclaracao);
                    const primeiroResultadoTipado = primeiroResultado as BlocoDeclaracao;
                    expect(primeiroResultadoTipado.modificadores.length).toBeGreaterThanOrEqual(1);
                    expect(primeiroResultadoTipado.modificadores[0].propriedadeCss).toStrictEqual(
                        MetodosEscalamento[index]
                    );
                    expect(primeiroResultadoTipado.modificadores[0].nomeFoles).toStrictEqual(
                        TraducaoValoresMetodos[MetodosEscalamento[index]]
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
                    expect(resultadoAvaliadorSintatico.length).toBeGreaterThanOrEqual(1);
                    const primeiroResultado = resultadoAvaliadorSintatico[0];
                    expect(primeiroResultado).toBeInstanceOf(BlocoDeclaracao);
                    const primeiroResultadoTipado = primeiroResultado as BlocoDeclaracao;
                    expect(primeiroResultadoTipado.modificadores.length).toBeGreaterThanOrEqual(1);
                    expect(primeiroResultadoTipado.modificadores[0].propriedadeCss).toStrictEqual(
                        MetodosEscalamento[index]
                    );
                    expect(primeiroResultadoTipado.modificadores[0].nomeFoles).toStrictEqual(
                        TraducaoValoresMetodos[MetodosEscalamento[index]]
                    );

                    // Tradutor
                    const resultadoTradutor = tradutor.serializar(resultadoAvaliadorSintatico);

                    // O Tradutor deve serializar de acordo e traduzir scaleY para escalamento-vertical
                    expect(resultadoTradutor).toContain(TraducaoValoresMetodos[MetodosEscalamento[index]]);
                    expect(resultadoTradutor).toContain(`escalamento-vertical(${valoresAceitos[valIndex]});`);
                }
            }
        });

        it('Atribuindo Método "sepia()"', () => {
            for (let index = 0; index < MetodoSepia.length; index += 1) {

                const valoresAceitos = ['100px', '100%', '0.1', '0', '1', '1.75'];

                for (let valIndex = 0; valIndex < valoresAceitos.length; valIndex += 1) {
                    // Lexador
                    const resultadoLexador = lexador.mapear([
                        "div {",
                        `${MetodoSepia[index]}: sepia(${valoresAceitos[valIndex]});`,
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
                    expect(resultadoAvaliadorSintatico.length).toBeGreaterThanOrEqual(1);
                    const primeiroResultado = resultadoAvaliadorSintatico[0];
                    expect(primeiroResultado).toBeInstanceOf(BlocoDeclaracao);
                    const primeiroResultadoTipado = primeiroResultado as BlocoDeclaracao;
                    expect(primeiroResultadoTipado.modificadores.length).toBeGreaterThanOrEqual(1);
                    expect(primeiroResultadoTipado.modificadores[0].propriedadeCss).toStrictEqual(
                        MetodoSepia[index]
                    );
                    expect(primeiroResultadoTipado.modificadores[0].nomeFoles).toStrictEqual(
                        TraducaoValoresMetodos[MetodoSepia[index]]
                    );

                    // Tradutor
                    const resultadoTradutor = tradutor.serializar(resultadoAvaliadorSintatico);

                    // O Tradutor deve serializar de acordo e traduzir sépia para sepia
                    expect(resultadoTradutor).toContain(`sepia(${valoresAceitos[valIndex]});`);
                }
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
                    expect(resultadoAvaliadorSintatico.length).toBeGreaterThanOrEqual(1);
                    const primeiroResultado = resultadoAvaliadorSintatico[0];
                    expect(primeiroResultado).toBeInstanceOf(BlocoDeclaracao);
                    const primeiroResultadoTipado = primeiroResultado as BlocoDeclaracao;
                    expect(primeiroResultadoTipado.modificadores.length).toBeGreaterThanOrEqual(1);
                    expect(primeiroResultadoTipado.modificadores[0].propriedadeCss).toStrictEqual(
                        MetodosInclinar[index]
                    );
                    expect(primeiroResultadoTipado.modificadores[0].nomeFoles).toStrictEqual(
                        TraducaoValoresMetodos[MetodosInclinar[index]]
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
                expect(resultadoAvaliadorSintatico.length).toBeGreaterThanOrEqual(1);
                const primeiroResultado = resultadoAvaliadorSintatico[0];
                expect(primeiroResultado).toBeInstanceOf(BlocoDeclaracao);
                const primeiroResultadoTipado = primeiroResultado as BlocoDeclaracao;
                expect(primeiroResultadoTipado.modificadores.length).toBeGreaterThanOrEqual(1);
                expect(primeiroResultadoTipado.modificadores[0].propriedadeCss).toStrictEqual(
                    MetodosInclinar[index]
                );
                expect(primeiroResultadoTipado.modificadores[0].nomeFoles).toStrictEqual(
                    TraducaoValoresMetodos[MetodosInclinar[index]]
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
                    expect(resultadoAvaliadorSintatico.length).toBeGreaterThanOrEqual(1);
                    const primeiroResultado = resultadoAvaliadorSintatico[0];
                    expect(primeiroResultado).toBeInstanceOf(BlocoDeclaracao);
                    const primeiroResultadoTipado = primeiroResultado as BlocoDeclaracao;
                    expect(primeiroResultadoTipado.modificadores.length).toBeGreaterThanOrEqual(1);
                    expect(primeiroResultadoTipado.modificadores[0].propriedadeCss).toStrictEqual(
                        MetodosInclinar[index]
                    );
                    expect(primeiroResultadoTipado.modificadores[0].nomeFoles).toStrictEqual(
                        TraducaoValoresMetodos[MetodosInclinar[index]]
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
                    expect(resultadoAvaliadorSintatico.length).toBeGreaterThanOrEqual(1);
                    const primeiroResultado = resultadoAvaliadorSintatico[0];
                    expect(primeiroResultado).toBeInstanceOf(BlocoDeclaracao);
                    const primeiroResultadoTipado = primeiroResultado as BlocoDeclaracao;
                    expect(primeiroResultadoTipado.modificadores.length).toBeGreaterThanOrEqual(1);
                    expect(primeiroResultadoTipado.modificadores[0].propriedadeCss).toStrictEqual(
                        MetodosInclinar[index]
                    );
                    expect(primeiroResultadoTipado.modificadores[0].nomeFoles).toStrictEqual(
                        TraducaoValoresMetodos[MetodosInclinar[index]]
                    );

                    // Tradutor
                    const resultadoTradutor = tradutor.serializar(resultadoAvaliadorSintatico);

                    // O Tradutor deve serializar de acordo e traduzir skewY para inclinar-vertical 
                    expect(resultadoTradutor).toContain(TraducaoValoresMetodos[MetodosInclinar[index]]);
                    expect(resultadoTradutor).toContain(`inclinar-vertical(${valoresAceitos[valIndex]});`);

                }
            }
        });

        it('Atribuindo Método "steps()"', () => {
            for (let index = 0; index < MetodoPassos.length; index += 1) {
                // Lexador
                const resultadoLexador = lexador.mapear([
                    "div {",
                    `${MetodoPassos[index]}: steps(2, jump-start);`,
                    "}"
                ]);

                // O Lexador deve montar um objeto de comprimento 12 sem retornar nenhum erro
                expect(resultadoLexador.simbolos).toHaveLength(12);
                expect(resultadoLexador.erros).toHaveLength(0);

                // O valor recebido deve ser mapeado como METODO
                expect(resultadoLexador.simbolos).toEqual(
                    expect.arrayContaining([
                        expect.objectContaining({ tipo: tiposDeSimbolos.METODO }),
                    ])
                );

                // O Lexador também deve encontrar número no mapeamento
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
                expect(primeiroResultadoTipado.modificadores[0].propriedadeCss).toStrictEqual(
                    MetodoPassos[index]
                );

                // Tradutor deve serializar de acordo e traduzir steps para passos, assim como o termo de salto
                const resultadoTradutor = tradutor.serializar(resultadoAvaliadorSintatico);
                expect(resultadoTradutor).toContain(TraducaoValoresMetodos[MetodoPassos[index]]);
                expect(resultadoTradutor).toContain('passos(2, salto-inicial);');
            }
        });

        it('Atribuindo Método "styleset()" - caso de sucesso', () => {
            const valoresAceitos = ['1', '2', '12', '20'];

            for (let index = 0; index < valoresAceitos.length; index += 1) {
                // Lexador
                const resultadoLexador = lexador.mapear([
                    "html {",
                    `font-variant-alternates: styleset(${valoresAceitos[index]});`,
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

                // O Lexador deve montar um objeto de comprimento 10, incluindo mapeamento de valores numéricos
                expect(resultadoLexador.simbolos).toHaveLength(10);
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
                    ["variacao-fonte-alternativa", "variação-fonte-alternativa"]
                );

                // Tradutor
                const resultadoTradutor = tradutor.serializar(resultadoAvaliadorSintatico);

                // O Tradutor deve serializar de acordo e traduzir styliset para conjunto-estilos
                expect(resultadoTradutor).toContain('variacao-fonte-alternativa');
                expect(resultadoTradutor).toContain(`conjunto-estilos(${valoresAceitos[index]});`);
            }
        });

        it('Atribuindo Método "styleset()" - caso de falha', () => {
            const valoresAceitos = ['0', '21', '30'];

            for (let index = 0; index < valoresAceitos.length; index += 1) {
                // Lexador
                const resultadoLexador = lexador.mapear([
                    "html {",
                    `font-variant-alternates: styleset(${valoresAceitos[index]});`,
                    "}"
                ]);

                const resultadoAvaliadorSintatico = avaliador.analisar(resultadoLexador.simbolos);

                expect(() => {
                    tradutor.serializar(resultadoAvaliadorSintatico);
                }).toThrow('Os valores da função styleset() devem estar entre 1 e 20');
            }
        });

        it('Atribuindo Método "stylistic()" - caso de sucesso', () => {
            const valoresAceitos = ['1', '2', '12', '20'];

            for (let index = 0; index < valoresAceitos.length; index += 1) {
                // Lexador
                const resultadoLexador = lexador.mapear([
                    "html {",
                    `font-variant-alternates: stylistic(${valoresAceitos[index]});`,
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

                // O Lexador deve montar um objeto de comprimento 10, incluindo mapeamento de valores numéricos
                expect(resultadoLexador.simbolos).toHaveLength(10);
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
                    ["variacao-fonte-alternativa", "variação-fonte-alternativa"]
                );

                // Tradutor
                const resultadoTradutor = tradutor.serializar(resultadoAvaliadorSintatico);

                // O Tradutor deve serializar de acordo e traduzir stylistic para estilístico
                expect(resultadoTradutor).toContain('variacao-fonte-alternativa');
                expect(resultadoTradutor).toContain(`estilístico(${valoresAceitos[index]});`);
            }
        });

        it('Atribuindo Método "stylistic()" - caso de falha', () => {
            const valoresAceitos = ['0', '21', '30'];

            for (let index = 0; index < valoresAceitos.length; index += 1) {
                // Lexador
                const resultadoLexador = lexador.mapear([
                    "html {",
                    `font-variant-alternates: stylistic(${valoresAceitos[index]});`,
                    "}"
                ]);

                const resultadoAvaliadorSintatico = avaliador.analisar(resultadoLexador.simbolos);

                expect(() => {
                    tradutor.serializar(resultadoAvaliadorSintatico);
                }).toThrow('O valor da função stylistic() deve estar entre 1 e 20');
            }
        });

        it('Atribuindo Método "translate()"', () => {
            for (let index = 0; index < MetodosTranslacao.length; index += 1) {

                const valoresAceitos = ['18deg', '3.142rad', '0', '1'];

                for (let valIndex = 0; valIndex < valoresAceitos.length; valIndex += 1) {
                    // Lexador
                    const resultadoLexador = lexador.mapear([
                        "div {",
                        `${MetodosTranslacao[index]}: translate(${valoresAceitos[valIndex]});`,
                        "}"
                    ]);

                    // O Lexador não deve encontrar erros
                    expect(resultadoLexador.erros).toHaveLength(0);

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
                    expect(resultadoAvaliadorSintatico.length).toBeGreaterThanOrEqual(1);
                    const primeiroResultado = resultadoAvaliadorSintatico[0];
                    expect(primeiroResultado).toBeInstanceOf(BlocoDeclaracao);
                    const primeiroResultadoTipado = primeiroResultado as BlocoDeclaracao;
                    expect(primeiroResultadoTipado.modificadores.length).toBeGreaterThanOrEqual(1);
                    expect(primeiroResultadoTipado.modificadores[0].propriedadeCss).toStrictEqual(
                        MetodosTranslacao[index]
                    );
                    expect(primeiroResultadoTipado.modificadores[0].nomeFoles).toStrictEqual(
                        TraducaoValoresMetodos[MetodosTranslacao[index]]
                    );

                    // Tradutor
                    const resultadoTradutor = tradutor.serializar(resultadoAvaliadorSintatico);

                    // O Tradutor deve serializar de acordo e traduzir translate para translação
                    expect(resultadoTradutor).toContain(`translação(${valoresAceitos[valIndex]});`);

                }
            }
        });

        it('Atribuindo Método "translate() com múltiplos valores"', () => {
            for (let index = 0; index < MetodosTranslacao.length; index += 1) {
                // Lexador
                const resultadoLexador = lexador.mapear([
                    "div {",
                    `${MetodosTranslacao[index]}: translate(100deg, 100deg);`,
                    "}"
                ]);

                // O Lexador não deve encontrar erros
                expect(resultadoLexador.erros).toHaveLength(0);

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
                expect(resultadoAvaliadorSintatico.length).toBeGreaterThanOrEqual(1);
                const primeiroResultado = resultadoAvaliadorSintatico[0];
                expect(primeiroResultado).toBeInstanceOf(BlocoDeclaracao);
                const primeiroResultadoTipado = primeiroResultado as BlocoDeclaracao;
                expect(primeiroResultadoTipado.modificadores.length).toBeGreaterThanOrEqual(1);
                expect(primeiroResultadoTipado.modificadores[0].propriedadeCss).toStrictEqual(
                    MetodosTranslacao[index]
                );

                // Tradutor
                const resultadoTradutor = tradutor.serializar(resultadoAvaliadorSintatico);

                // O Tradutor deve serializar de acordo e traduzir translate para translação
                expect(resultadoTradutor).toContain(`translação(100deg, 100deg);`);
            }
        });

        it('Atribuindo Método "translateX()"', () => {
            for (let index = 0; index < MetodosTranslacao.length; index += 1) {

                const valoresAceitos = ['42px', '3ch', '0'];

                for (let valIndex = 0; valIndex < valoresAceitos.length; valIndex += 1) {
                    // Lexador
                    const resultadoLexador = lexador.mapear([
                        "div {",
                        `${MetodosTranslacao[index]}: translateX(${valoresAceitos[valIndex]});`,
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
                    expect(resultadoAvaliadorSintatico.length).toBeGreaterThanOrEqual(1);
                    const primeiroResultado = resultadoAvaliadorSintatico[0];
                    expect(primeiroResultado).toBeInstanceOf(BlocoDeclaracao);
                    const primeiroResultadoTipado = primeiroResultado as BlocoDeclaracao;
                    expect(primeiroResultadoTipado.modificadores.length).toBeGreaterThanOrEqual(1);
                    expect(primeiroResultadoTipado.modificadores[0].propriedadeCss).toStrictEqual(
                        MetodosTranslacao[index]
                    );
                    expect(primeiroResultadoTipado.modificadores[0].nomeFoles).toStrictEqual(
                        TraducaoValoresMetodos[MetodosTranslacao[index]]
                    );

                    // Tradutor
                    const resultadoTradutor = tradutor.serializar(resultadoAvaliadorSintatico);

                    // O Tradutor deve serializar de acordo e traduzir translateX para translacao-horizontal 
                    expect(resultadoTradutor).toContain(`translacao-horizontal(${valoresAceitos[valIndex]});`);
                }
            }
        });

        it('Atribuindo Método "translateY()"', () => {
            for (let index = 0; index < MetodosTranslacao.length; index += 1) {

                const valoresAceitos = ['42px', '3ch', '0'];

                for (let valIndex = 0; valIndex < valoresAceitos.length; valIndex += 1) {
                    // Lexador
                    const resultadoLexador = lexador.mapear([
                        "div {",
                        `${MetodosTranslacao[index]}: translateY(${valoresAceitos[valIndex]});`,
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
                    expect(resultadoAvaliadorSintatico.length).toBeGreaterThanOrEqual(1);
                    const primeiroResultado = resultadoAvaliadorSintatico[0];
                    expect(primeiroResultado).toBeInstanceOf(BlocoDeclaracao);
                    const primeiroResultadoTipado = primeiroResultado as BlocoDeclaracao;
                    expect(primeiroResultadoTipado.modificadores.length).toBeGreaterThanOrEqual(1);
                    expect(primeiroResultadoTipado.modificadores[0].propriedadeCss).toStrictEqual(
                        MetodosTranslacao[index]
                    );
                    expect(primeiroResultadoTipado.modificadores[0].nomeFoles).toStrictEqual(
                        TraducaoValoresMetodos[MetodosTranslacao[index]]
                    );

                    // Tradutor
                    const resultadoTradutor = tradutor.serializar(resultadoAvaliadorSintatico);

                    // O Tradutor deve serializar de acordo e traduzir translateY para translacao-vertical
                    expect(resultadoTradutor).toContain(`translacao-vertical(${valoresAceitos[valIndex]});`);
                }
            }
        });

        it('Atribuindo Método "translateZ()"', () => {
            for (let index = 0; index < MetodosTranslacao.length; index += 1) {

                const valoresAceitos = ['42px', '3ch', '0'];

                for (let valIndex = 0; valIndex < valoresAceitos.length; valIndex += 1) {
                    // Lexador
                    const resultadoLexador = lexador.mapear([
                        "div {",
                        `${MetodosTranslacao[index]}: translateZ(${valoresAceitos[valIndex]});`,
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
                    expect(resultadoAvaliadorSintatico.length).toBeGreaterThanOrEqual(1);
                    const primeiroResultado = resultadoAvaliadorSintatico[0];
                    expect(primeiroResultado).toBeInstanceOf(BlocoDeclaracao);
                    const primeiroResultadoTipado = primeiroResultado as BlocoDeclaracao;
                    expect(primeiroResultadoTipado.modificadores.length).toBeGreaterThanOrEqual(1);
                    expect(primeiroResultadoTipado.modificadores[0].propriedadeCss).toStrictEqual(
                        MetodosTranslacao[index]
                    );
                    expect(primeiroResultadoTipado.modificadores[0].nomeFoles).toStrictEqual(
                        TraducaoValoresMetodos[MetodosTranslacao[index]]
                    );

                    // Tradutor
                    const resultadoTradutor = tradutor.serializar(resultadoAvaliadorSintatico);

                    // O Tradutor deve serializar de acordo e traduzir translateZ para translação-eixo-z
                    expect(resultadoTradutor).toContain(`translacao-eixo-z(${valoresAceitos[valIndex]});`);
                }
            }
        });

        it('Atribuindo Método "translate3d()"', () => {
            for (let index = 0; index < MetodosTranslacao.length; index += 1) {
                // Lexador
                const resultadoLexador = lexador.mapear([
                    "div {",
                    `${MetodosTranslacao[index]}: translate3d(5ch, 0.4in, 5px);`,
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

                // O Lexador deve montar um objeto de comprimento 17
                expect(resultadoLexador.simbolos).toHaveLength(17);
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
                expect(primeiroResultadoTipado.modificadores[0].propriedadeCss).toStrictEqual(
                    MetodosTranslacao[index]
                );

                // Tradutor
                const resultadoTradutor = tradutor.serializar(resultadoAvaliadorSintatico);

                // O Tradutor deve serializar de acordo e traduzir translate3d para translação-3d
                expect(resultadoTradutor).toContain(`translacao-3d(5ch, 0.4in, 5px);`);
            }
        });

        it('Atribuindo Método "translate3d() cobrindo todos os casos"', () => {
            for (let index = 0; index < MetodosTranslacao.length; index += 1) {

                const valoresAceitos = [
                    '0',
                    '0, 62px, 135px',
                    '2.7rem, 0, 1rem',
                    '5ch, 0.4in, 0',
                    '0, 0, 135px',
                    '0, 2.7rem, 0',
                    '5ch, 0, 0',
                    '42px, 62px, 135px',
                    '0, 0, 0',
                ];

                for (let valIndex = 0; valIndex < valoresAceitos.length; valIndex += 1) {
                    // Lexador
                    const resultadoLexador = lexador.mapear([
                        "div {",
                        `${MetodosTranslacao[index]}: translate3d(${valoresAceitos[valIndex]});`,
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
                    if (valIndex === 0) {
                        expect(resultadoLexador.simbolos).toHaveLength(10);
                        expect(resultadoLexador.simbolos).toEqual(
                            expect.arrayContaining([
                                expect.objectContaining({ tipo: tiposDeSimbolos.NUMERO }),
                            ])
                        );
                    } else if (valIndex === 1 || valIndex === 2 || valIndex === 3) {
                        expect(resultadoLexador.simbolos).toHaveLength(16);
                        expect(resultadoLexador.simbolos).toEqual(
                            expect.arrayContaining([
                                expect.objectContaining({ tipo: tiposDeSimbolos.NUMERO }),
                                expect.objectContaining({ tipo: tiposDeSimbolos.QUANTIFICADOR }),
                            ])
                        );
                    } else if (valIndex === 4 || valIndex === 5 || valIndex === 6) {
                        expect(resultadoLexador.simbolos).toHaveLength(15);
                        expect(resultadoLexador.simbolos).toEqual(
                            expect.arrayContaining([
                                expect.objectContaining({ tipo: tiposDeSimbolos.NUMERO }),
                                expect.objectContaining({ tipo: tiposDeSimbolos.QUANTIFICADOR }),
                            ])
                        );
                    } else if (valIndex === 7) {
                        expect(resultadoLexador.simbolos).toHaveLength(17);
                        expect(resultadoLexador.simbolos).toEqual(
                            expect.arrayContaining([
                                expect.objectContaining({ tipo: tiposDeSimbolos.NUMERO }),
                                expect.objectContaining({ tipo: tiposDeSimbolos.QUANTIFICADOR }),
                            ])
                        );
                    } else {
                        expect(resultadoLexador.simbolos).toHaveLength(14);
                        expect(resultadoLexador.simbolos).toEqual(
                            expect.arrayContaining([
                                expect.objectContaining({ tipo: tiposDeSimbolos.NUMERO }),
                            ])
                        );
                    }

                    // Avaliador Sintático
                    const resultadoAvaliadorSintatico = avaliador.analisar(resultadoLexador.simbolos);

                    // O Avaliador deve montar um objeto com os devidos nomes FolEs e CSS
                    expect(resultadoAvaliadorSintatico.length).toBeGreaterThanOrEqual(1);
                    const primeiroResultado = resultadoAvaliadorSintatico[0];
                    expect(primeiroResultado).toBeInstanceOf(BlocoDeclaracao);
                    const primeiroResultadoTipado = primeiroResultado as BlocoDeclaracao;
                    expect(primeiroResultadoTipado.modificadores.length).toBeGreaterThanOrEqual(1);
                    expect(primeiroResultadoTipado.modificadores[0].propriedadeCss).toStrictEqual(
                        MetodosTranslacao[index]
                    );
                    expect(primeiroResultadoTipado.modificadores[0].nomeFoles).toStrictEqual(
                        TraducaoValoresMetodos[MetodosTranslacao[index]]
                    );

                    // Tradutor
                    const resultadoTradutor = tradutor.serializar(resultadoAvaliadorSintatico);

                    // O Tradutor deve serializar de acordo e traduzir translate3d para translacao-3d
                    if (valIndex !== 8) {
                        expect(resultadoTradutor).toContain(`translacao-3d(${valoresAceitos[valIndex]});`);
                    } else {
                        expect(resultadoTradutor).toContain(`translacao-3d(0);`);
                    }
                }
            }
        });

        it('Caso de Falha - Erro ao instanciar classe SeletorValorReverso', () => {
            for (let index = 0; index < MetodosCss.length; index += 1) {
                const metodoIncorreto = MetodosCss[index].replace(MetodosCss[index][0], '');

                expect(() => {
                    new SeletorValorReverso(metodoIncorreto, []);
                }).toThrow(`O valor \'${metodoIncorreto}\' não foi encontrado.`);
            }
        });
    });
});
