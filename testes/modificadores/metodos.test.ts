import { AvaliadorSintatico } from "../../fontes/avaliador-sintatico";
import { Importador } from "../../fontes/importador";
import { AvaliadorSintaticoInterface, ImportadorInterface, LexadorInterface } from "../../fontes/interfaces";
import { Lexador, Simbolo } from "../../fontes/lexador";
import tiposDeSimbolos from "../../fontes/tipos-de-simbolos/foles";
import { Resolvedor } from "../../fontes/resolvedores";
import { MetodoBorrar, MetodoBrilho, MetodoCalcular, MetodoContraste, MetodoCurvaCubica, MetodoEncaixarConteudo, MetodoEscalaCinza, MetodoGradienteLinear, MetodoInverter, MetodoLimitar, MetodoLinear, MetodoMinMax, MetodoOpacar, MetodoPassos, MetodoPerspectivar, MetodoProjetarSombra, MetodoRaio, MetodoRotacionarMatiz, MetodoSaturar, MetodoSepia, MetodosEscalamento, MetodosFolEs, MetodosInclinar, MetodosRotacionar, MetodosTranslacao, TraducaoValoresMetodos } from "../listas/metodos";
import { BlocoDeclaracao } from "../../fontes/declaracoes";
import { SeletorValor } from "../../fontes/valores/seletor-valor";
import { Contador } from "../../fontes/valores/metodos/foles/contador";

describe('Testando Seletores que recebem MÉTODOS como valor', () => {
    let lexador: LexadorInterface;
    let importador: ImportadorInterface;
    let avaliador: AvaliadorSintaticoInterface;
    let serializador: Resolvedor;

    beforeEach(() => {
        lexador = new Lexador();
        importador = new Importador(lexador);
        avaliador = new AvaliadorSintatico(importador);
        serializador = new Resolvedor();
    });

    it('Atribuindo Método "anotação()" com valor numérico - caso de sucesso', () => {
        const formasAceitas = ['anotação', 'anotacao'];
        const valoresAceitos = ['1', '2', '12', '20'];

        for (let valIndex = 0; valIndex < formasAceitas.length; valIndex += 1) {
            for (let index = 0; index < valoresAceitos.length; index += 1) {
                // Lexador
                const resultadoLexador = lexador.mapear([
                    "lmht {",
                    `variacao-fonte-alternativa: ${formasAceitas[valIndex]}(${valoresAceitos[index]});`,
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
                expect(primeiroResultadoTipado.modificadores[0].propriedadeCss).toStrictEqual(
                    'font-variant-alternates'
                );

                // Tradutor
                const resultadoTradutor = serializador.resolver(resultadoAvaliadorSintatico);

                // O Tradutor deve serializar de acordo e traduzir anotação para annotation
                expect(resultadoTradutor).toContain('font-variant-alternates');
                expect(resultadoTradutor).toContain(`annotation(${valoresAceitos[index]});`);
            }
        }
    });

    it('Atribuindo Método "anotação()" com valor numérico - caso de falha', () => {
        const valoresAceitos = ['0', '100', '300'];

        for (let index = 0; index < valoresAceitos.length; index += 1) {
            // Lexador
            const resultadoLexador = lexador.mapear([
                "lmht {",
                `variacao-fonte-alternativa: anotação(${valoresAceitos[index]});`,
                "}"
            ]);

            const resultadoAvaliadorSintatico = avaliador.analisar(resultadoLexador.simbolos);

            expect(() => {
                serializador.resolver(resultadoAvaliadorSintatico);
            }).toThrow('O valor da função anotação() deve estar entre 1 e 99');
        }
    });

    it('Atribuindo Método "anotação()" com valor string - caso de sucesso', () => {
        const formasAceitas = ['anotação', 'anotacao'];
        const valoresAceitos = ['floral', 'ruby', 'circle'];

        for (let valIndex = 0; valIndex < formasAceitas.length; valIndex += 1) {
            for (let index = 0; index < valoresAceitos.length; index += 1) {
                // Lexador
                const resultadoLexador = lexador.mapear([
                    "lmht {",
                    `variacao-fonte-alternativa: ${formasAceitas[valIndex]}('${valoresAceitos[index]}');`,
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

                // Avaliador Sintático
                const resultadoAvaliadorSintatico = avaliador.analisar(resultadoLexador.simbolos);

                // O Avaliador deve montar um objeto com os devidos nomes FolEs e CSS
                expect(resultadoAvaliadorSintatico.length).toBeGreaterThanOrEqual(1);
                const primeiroResultado = resultadoAvaliadorSintatico[0];
                expect(primeiroResultado).toBeInstanceOf(BlocoDeclaracao);
                const primeiroResultadoTipado = primeiroResultado as BlocoDeclaracao;
                expect(primeiroResultadoTipado.modificadores.length).toBeGreaterThanOrEqual(1);
                expect(primeiroResultadoTipado.modificadores[0].propriedadeCss).toStrictEqual(
                    'font-variant-alternates'
                );

                // Tradutor
                const resultadoTradutor = serializador.resolver(resultadoAvaliadorSintatico);

                // O Tradutor deve serializar de acordo e traduzir anotação para annotation e conter o valor string
                expect(resultadoTradutor).toContain('font-variant-alternates');
                expect(resultadoTradutor).toContain(`annotation('${valoresAceitos[index]}');`);
            }
        }
    });

    it('Atribuindo Método "anotação()" com valor string - caso de falha', () => {
        const valoresAceitos = ['--valorPersonalizado', 'herdar', 'inicial'];

        for (let index = 0; index < valoresAceitos.length; index += 1) {
            // Lexador
            const resultadoLexador = lexador.mapear([
                "lmht {",
                `variacao-fonte-alternativa: anotação(${valoresAceitos[index]});`,
                "}"
            ]);

            const resultadoAvaliadorSintatico = avaliador.analisar(resultadoLexador.simbolos);

            expect(() => {
                serializador.resolver(resultadoAvaliadorSintatico);
            }).toThrow(`Modificador ou variável 'variação-fonte-alternativa' com valor personalizado ${valoresAceitos[index]} inválido. O valor deve seguir as regras de sintaxe de uma identificação personalizada (<custom-indent>).`);
        }
    });

    it('Atribuindo Método "borrar()"', () => {
        for (let index = 0; index < MetodoBorrar.length; index += 1) {

            const valoresAceitos = ['100px', '100%', '0.1', '0', '1', '1.75'];

            for (let valIndex = 0; valIndex < valoresAceitos.length; valIndex += 1) {
                // Lexador
                const resultadoLexador = lexador.mapear([
                    "lmht {",
                    `${MetodoBorrar[index]}: borrar(${valoresAceitos[valIndex]});`,
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
                // TODO @Vitor: Alterei um caso para você. 
                // Os demais podem seguir a mesma lógica.
                expect(resultadoAvaliadorSintatico.length).toBeGreaterThanOrEqual(1);
                const primeiroResultado = resultadoAvaliadorSintatico[0];
                expect(primeiroResultado).toBeInstanceOf(BlocoDeclaracao);
                const primeiroResultadoTipado = primeiroResultado as BlocoDeclaracao;
                expect(primeiroResultadoTipado.modificadores.length).toBeGreaterThanOrEqual(1);
                expect(primeiroResultadoTipado.modificadores[0].propriedadeCss).toStrictEqual(
                    TraducaoValoresMetodos[MetodoBorrar[index]]
                );

                // Tradutor
                const resultadoTradutor = serializador.resolver(resultadoAvaliadorSintatico);

                // O Tradutor deve serializar de acordo e traduzir borrar para blur
                expect(resultadoTradutor).toContain(TraducaoValoresMetodos[MetodoBorrar[index]]);
                expect(resultadoTradutor).toContain(`blur(${valoresAceitos[valIndex]});`);
            }
        }
    });

    it('Atribuindo Método "brilho()"', () => {
        for (let index = 0; index < MetodoBrilho.length; index += 1) {

            const valoresAceitos = ['100px', '100%', '0.1', '0', '1', '1.75'];

            for (let valIndex = 0; valIndex < valoresAceitos.length; valIndex += 1) {
                // Lexador
                const resultadoLexador = lexador.mapear([
                    "lmht {",
                    `${MetodoBrilho[index]}: brilho(${valoresAceitos[valIndex]});`,
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
                    TraducaoValoresMetodos[MetodoBrilho[index]]
                );

                // Tradutor
                const resultadoTradutor = serializador.resolver(resultadoAvaliadorSintatico);

                // O Tradutor deve serializar de acordo e traduzir brilho para brightness
                expect(resultadoTradutor).toContain(TraducaoValoresMetodos[MetodoBrilho[index]]);
                expect(resultadoTradutor).toContain(`brightness(${valoresAceitos[valIndex]});`);
            }
        }
    });

    it('Atribuindo Método "calcular()"', () => {
        for (let index = 0; index < MetodoCalcular.length; index += 1) {
            // Lexador
            const resultadoLexador = lexador.mapear([
                "lmht {",
                `${MetodoCalcular[index]}: calcular(100px - 80px);`,
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
                TraducaoValoresMetodos[MetodoCalcular[index]]
            );

            // Tradutor
            const resultadoTradutor = serializador.resolver(resultadoAvaliadorSintatico);

            expect(resultadoTradutor).toContain(TraducaoValoresMetodos[MetodoCalcular[index]]);
            expect(resultadoTradutor).toContain('calc(100px - 80px);');
        }
    });

    it('Atribuindo Método "conjunto-estilos()" - caso de sucesso', () => {
        const valoresAceitos = ['1', '1, 2', '6, 12, 18'];

        for (let index = 0; index < valoresAceitos.length; index += 1) {
            // Lexador
            const resultadoLexador = lexador.mapear([
                "lmht {",
                `variacao-fonte-alternativa: conjunto-estilos(${valoresAceitos[index]});`,
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

            // O Lexador deve montar um objeto contendo valores numéricos
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
                'font-variant-alternates'
            );

            // Tradutor
            const resultadoTradutor = serializador.resolver(resultadoAvaliadorSintatico);

            // O Tradutor deve serializar de acordo e traduzir escalamento-vertical para scaleY
            expect(resultadoTradutor).toContain('font-variant-alternates');
            expect(resultadoTradutor).toContain(`styleset(${valoresAceitos[index]});`);
        }
    });

    it('Atribuindo Método "conjunto-estilos()" - caso de falha', () => {
        const valoresAceitos = ['0', '1, 21, 12', '3, 13, 30'];

        for (let index = 0; index < valoresAceitos.length; index += 1) {
            // Lexador
            const resultadoLexador = lexador.mapear([
                "lmht {",
                `variacao-fonte-alternativa: conjunto-estilos(${valoresAceitos[index]});`,
                "}"
            ]);

            const resultadoAvaliadorSintatico = avaliador.analisar(resultadoLexador.simbolos);

            expect(() => {
                serializador.resolver(resultadoAvaliadorSintatico);
            }).toThrow('Os valores da função conjunto-estilos() devem estar entre 1 e 20');
        }
    });

    it('Atribuindo Método "contador()"', () => {
        const nomeSimbolo: Simbolo = new Simbolo('IDENTIFICADOR', 'contador', 'any', 1, 2, 3);
        const estiloSimbolo: Simbolo = new Simbolo('IDENTIFICADOR', 'romano-maiusculo', 'any', 1, 2, 3);

        const instanciaContador: Contador = new Contador(nomeSimbolo, estiloSimbolo);

        const estilosAceitos: Array<string> = [];
        Object.keys(instanciaContador.estilosAceitos).forEach((valor) => estilosAceitos.push(valor));

        const estilosTraduzidos: Array<string> = [];
        Object.values(instanciaContador.estilosAceitos).forEach((valor) => estilosTraduzidos.push(valor));

        for (let index = 0; index < estilosAceitos.length; index += 1) {
            // Lexador
            const resultadoLexador = lexador.mapear([
                "lmht {",
                `conteúdo: contador(contador1, ${estilosAceitos[index]});`,
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
            const resultadoTradutor = serializador.resolver(resultadoAvaliadorSintatico);
            expect(resultadoTradutor).toContain('content');
            expect(resultadoTradutor).toContain(`counter(contador1, ${estilosTraduzidos[index]});`);
        }
    });

    it('Caso de Falha - Método "contador()" com valor de estilo inválido', () => {
        const nomeSimbolo: Simbolo = new Simbolo('IDENTIFICADOR', 'contador', 'any', 1, 2, 3);
        const estiloSimbolo: Simbolo = new Simbolo('IDENTIFICADOR', 'romano-maiusculo', 'any', 1, 2, 3);

        const instanciaContador: Contador = new Contador(nomeSimbolo, estiloSimbolo);

        const estilosAceitos: Array<string> = [];
        Object.keys(instanciaContador.estilosAceitos).forEach((valor) => estilosAceitos.push(valor));

        for (let index = 0; index < estilosAceitos.length; index += 1) {
            const estiloErroDigitacao = estilosAceitos[index].replace(/./, "x");
            // Lexador
            const resultadoLexador = lexador.mapear([
                "lmht {",
                `conteúdo: contador(contador1, ${estiloErroDigitacao});`,
                "}"
            ]);

            // O Lexador deve montar um objeto de comprimento 12 sem retornar erros
            expect(resultadoLexador.simbolos).toHaveLength(12);
            expect(resultadoLexador.erros).toHaveLength(0);

            // O Avaliador Sintático também deve retornar o seu objeto sem retornar erros
            const resultadoAvaliadorSintatico = avaliador.analisar(resultadoLexador.simbolos);

            // O Serializador deve retornar o erro de estilo inválido uma vez que não consegue traduzir o valor
            expect(() => {
                serializador.resolver(resultadoAvaliadorSintatico)
            }).toThrow(`Valor de estilo ${estiloErroDigitacao} inválido para a função contador().`);
        }
    });

    it('Atribuindo Método "contraste()"', () => {
        for (let index = 0; index < MetodoContraste.length; index += 1) {

            const valoresAceitos = ['100px', '100%', '0.1', '0', '1', '1.75'];

            for (let valIndex = 0; valIndex < valoresAceitos.length; valIndex += 1) {
                // Lexador
                const resultadoLexador = lexador.mapear([
                    "lmht {",
                    `${MetodoContraste[index]}: contraste(${valoresAceitos[valIndex]});`,
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
                    TraducaoValoresMetodos[MetodoContraste[index]]
                );

                // Tradutor
                const resultadoTradutor = serializador.resolver(resultadoAvaliadorSintatico);

                expect(resultadoTradutor).toContain(TraducaoValoresMetodos[MetodoContraste[index]]);
                expect(resultadoTradutor).toContain(`contrast(${valoresAceitos[valIndex]});`);
            }
        }
    });

    it('Atribuindo Método "curva-cúbica" (cubic-bezier)', () => {
        for (let index = 0; index < MetodoCurvaCubica.length; index += 1) {
            // Lexador
            const resultadoLexador = lexador.mapear([
                "lmht {",
                `${MetodoCurvaCubica[index]}: curva-cúbica(0.42, 0.0, 1.0, 1.0);`,
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
                TraducaoValoresMetodos[MetodoCurvaCubica[index]]
            );

            // // // // Tradutor
            const resultadoTradutor = serializador.resolver(resultadoAvaliadorSintatico);

            expect(resultadoTradutor).toContain(TraducaoValoresMetodos[MetodoCurvaCubica[index]]);
            expect(resultadoTradutor).toContain('cubic-bezier(0.42, 0, 1, 1);');
        }
    });

    it('Atribuindo Método "encaixar-conteúdo" (fit-content)', () => {
        for (let index = 0; index < MetodoEncaixarConteudo.length; index += 1) {
            // Lexador
            const resultadoLexador = lexador.mapear([
                "lmht {",
                `${MetodoEncaixarConteudo[index]}: encaixar-conteúdo(200px);`,
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
                TraducaoValoresMetodos[MetodoEncaixarConteudo[index]]
            );

            // // // Tradutor
            const resultadoTradutor = serializador.resolver(resultadoAvaliadorSintatico);

            expect(resultadoTradutor).toContain(TraducaoValoresMetodos[MetodoEncaixarConteudo[index]]);
            expect(resultadoTradutor).toContain('fit-content(200px)');
        }
    });

    it('Atribuindo Método "escala-cinza()"', () => {
        for (let index = 0; index < MetodoEscalaCinza.length; index += 1) {

            const valoresAceitos = ['100px', '100%', '0.1', '0', '1', '1.75'];

            for (let valIndex = 0; valIndex < valoresAceitos.length; valIndex += 1) {
                // Lexador
                const resultadoLexador = lexador.mapear([
                    "lmht {",
                    `${MetodoEscalaCinza[index]}: escala-cinza(${valoresAceitos[valIndex]});`,
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
                    TraducaoValoresMetodos[MetodoEscalaCinza[index]]
                );

                // Tradutor
                const resultadoTradutor = serializador.resolver(resultadoAvaliadorSintatico);

                // O Tradutor deve serializar de acordo e traduzir escala-cinza para grayscale
                expect(resultadoTradutor).toContain(TraducaoValoresMetodos[MetodoEscalaCinza[index]]);
                expect(resultadoTradutor).toContain(`grayscale(${valoresAceitos[valIndex]});`);
            }
        }
    });

    it('Atribuindo Método "escalamento()"', () => {
        for (let index = 0; index < MetodosEscalamento.length; index += 1) {

            const valoresAceitos = ['0.1', '0', '1', '1.75'];

            for (let valIndex = 0; valIndex < valoresAceitos.length; valIndex += 1) {
                // Lexador
                const resultadoLexador = lexador.mapear([
                    "lmht {",
                    `${MetodosEscalamento[index]}: escalamento(${valoresAceitos[valIndex]});`,
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
                    TraducaoValoresMetodos[MetodosEscalamento[index]]
                );

                // Tradutor
                const resultadoTradutor = serializador.resolver(resultadoAvaliadorSintatico);

                // O Tradutor deve serializar de acordo e traduzir escalamento para scale
                expect(resultadoTradutor).toContain(TraducaoValoresMetodos[MetodosEscalamento[index]]);
                expect(resultadoTradutor).toContain(`scale(${valoresAceitos[valIndex]});`);
            }
        }
    });

    it('Atribuindo Método "escalamento()" com múltiplos valores', () => {
        for (let index = 0; index < MetodosEscalamento.length; index += 1) {
            // Lexador
            const resultadoLexador = lexador.mapear([
                "lmht {",
                `${MetodosEscalamento[index]}: escalamento(1.3, 0.4);`,
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
                TraducaoValoresMetodos[MetodosEscalamento[index]]
            );

            // Tradutor
            const resultadoTradutor = serializador.resolver(resultadoAvaliadorSintatico);

            // O Tradutor deve serializar de acordo e traduzir escalamento para scale
            expect(resultadoTradutor).toContain(TraducaoValoresMetodos[MetodosEscalamento[index]]);
            expect(resultadoTradutor).toContain(`scale(1.3, 0.4);`);
        }
    });

    it('Atribuindo Método "escalamento-3d()"', () => {
        for (let index = 0; index < MetodosEscalamento.length; index += 1) {
            // Lexador
            const resultadoLexador = lexador.mapear([
                "lmht {",
                `${MetodosEscalamento[index]}: escalamento-3d(0.5, 1, 1.7);`,
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
                TraducaoValoresMetodos[MetodosEscalamento[index]]
            );

            // Tradutor
            const resultadoTradutor = serializador.resolver(resultadoAvaliadorSintatico);

            // O Tradutor deve serializar de acordo e traduzir escalamento-3d para scale3d
            expect(resultadoTradutor).toContain(TraducaoValoresMetodos[MetodosEscalamento[index]]);
            expect(resultadoTradutor).toContain(`scale3d(0.5, 1, 1.7);`);
        }
    });

    it('Atribuindo Método "escalamento-eixo-z()"', () => {
        for (let index = 0; index < MetodosEscalamento.length; index += 1) {

            const valoresAceitos = ['0.1', '0', '1', '1.75'];

            for (let valIndex = 0; valIndex < valoresAceitos.length; valIndex += 1) {
                // Lexador
                const resultadoLexador = lexador.mapear([
                    "lmht {",
                    `${MetodosEscalamento[index]}: escalamento-eixo-z(${valoresAceitos[valIndex]});`,
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
                    TraducaoValoresMetodos[MetodosEscalamento[index]]
                );

                // Tradutor
                const resultadoTradutor = serializador.resolver(resultadoAvaliadorSintatico);

                // O Tradutor deve serializar de acordo e traduzir escalamento-eixo-z para scaleZ
                expect(resultadoTradutor).toContain(TraducaoValoresMetodos[MetodosEscalamento[index]]);
                expect(resultadoTradutor).toContain(`scaleZ(${valoresAceitos[valIndex]});`);
            }
        }
    });

    it('Atribuindo Método "escalamento-horizontal()"', () => {
        for (let index = 0; index < MetodosEscalamento.length; index += 1) {

            const valoresAceitos = ['0.1', '0', '1', '1.75'];

            for (let valIndex = 0; valIndex < valoresAceitos.length; valIndex += 1) {
                // Lexador
                const resultadoLexador = lexador.mapear([
                    "lmht {",
                    `${MetodosEscalamento[index]}: escalamento-horizontal(${valoresAceitos[valIndex]});`,
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
                    TraducaoValoresMetodos[MetodosEscalamento[index]]
                );

                // Tradutor
                const resultadoTradutor = serializador.resolver(resultadoAvaliadorSintatico);

                // O Tradutor deve serializar de acordo e traduzir escalamento-horizontal para scaleX
                expect(resultadoTradutor).toContain(TraducaoValoresMetodos[MetodosEscalamento[index]]);
                expect(resultadoTradutor).toContain(`scaleX(${valoresAceitos[valIndex]});`);
            }
        }
    });

    it('Atribuindo Método "escalamento-vertical()"', () => {
        for (let index = 0; index < MetodosEscalamento.length; index += 1) {

            const valoresAceitos = ['0.1', '0', '1', '1.75'];

            for (let valIndex = 0; valIndex < valoresAceitos.length; valIndex += 1) {
                // Lexador
                const resultadoLexador = lexador.mapear([
                    "lmht {",
                    `${MetodosEscalamento[index]}: escalamento-vertical(${valoresAceitos[valIndex]});`,
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
                    TraducaoValoresMetodos[MetodosEscalamento[index]]
                );

                // Tradutor
                const resultadoTradutor = serializador.resolver(resultadoAvaliadorSintatico);

                // O Tradutor deve serializar de acordo e traduzir escalamento-vertical para scaleY
                expect(resultadoTradutor).toContain(TraducaoValoresMetodos[MetodosEscalamento[index]]);
                expect(resultadoTradutor).toContain(`scaleY(${valoresAceitos[valIndex]});`);
            }
        }
    });

    it('Atribuindo Método "espirrar()" - caso de sucesso', () => {
        const valoresAceitos = ['1', '2', '12', '20'];

        for (let index = 0; index < valoresAceitos.length; index += 1) {
            // Lexador
            const resultadoLexador = lexador.mapear([
                "lmht {",
                `variacao-fonte-alternativa: espirrar(${valoresAceitos[index]});`,
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
            expect(primeiroResultadoTipado.modificadores[0].propriedadeCss).toStrictEqual(
                'font-variant-alternates'
            );

            // Tradutor
            const resultadoTradutor = serializador.resolver(resultadoAvaliadorSintatico);

            // O Tradutor deve serializar de acordo e traduzir espirrar para swash
            expect(resultadoTradutor).toContain('font-variant-alternates');
            expect(resultadoTradutor).toContain(`swash(${valoresAceitos[index]});`);
        }
    });

    it('Atribuindo Método "espirrar()" - caso de falha', () => {
        const valoresAceitos = ['0', '100', '300'];

        for (let index = 0; index < valoresAceitos.length; index += 1) {
            // Lexador
            const resultadoLexador = lexador.mapear([
                "lmht {",
                `variacao-fonte-alternativa: espirrar(${valoresAceitos[index]});`,
                "}"
            ]);

            const resultadoAvaliadorSintatico = avaliador.analisar(resultadoLexador.simbolos);

            expect(() => {
                serializador.resolver(resultadoAvaliadorSintatico);
            }).toThrow('O valor da função espirrar() deve estar entre 1 e 99');
        }
    });

    it('Atribuindo Método "estilistico()" - caso de sucesso', () => {
        const valoresAceitos = ['1', '2', '12', '20'];

        for (let index = 0; index < valoresAceitos.length; index += 1) {
            // Lexador
            const resultadoLexador = lexador.mapear([
                "lmht {",
                `variacao-fonte-alternativa: estilistico(${valoresAceitos[index]});`,
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
            expect(primeiroResultadoTipado.modificadores[0].propriedadeCss).toStrictEqual(
                'font-variant-alternates'
            );

            // Tradutor
            const resultadoTradutor = serializador.resolver(resultadoAvaliadorSintatico);

            // O Tradutor deve serializar de acordo e traduzir estilístico para stylistic
            expect(resultadoTradutor).toContain('font-variant-alternates');
            expect(resultadoTradutor).toContain(`stylistic(${valoresAceitos[index]});`);
        }
    });

    it('Atribuindo Método "estilistico()" - caso de falha', () => {
        const valoresAceitos = ['0', '21', '30'];

        for (let index = 0; index < valoresAceitos.length; index += 1) {
            // Lexador
            const resultadoLexador = lexador.mapear([
                "lmht {",
                `variacao-fonte-alternativa: estilistico(${valoresAceitos[index]});`,
                "}"
            ]);

            const resultadoAvaliadorSintatico = avaliador.analisar(resultadoLexador.simbolos);

            expect(() => {
                serializador.resolver(resultadoAvaliadorSintatico);
            }).toThrow('O valor da função estilistico() deve estar entre 1 e 20');
        }
    });

    it('Atribuindo Método "gradiente-linear()" com valor de ângulo deg', () => {
        for (let index = 0; index < MetodoGradienteLinear.length; index += 1) {
            // Lexador
            const resultadoLexador = lexador.mapear([
                "lmht {",
                `${MetodoGradienteLinear[index]}: gradiente-linear(90deg, verde, amarelo);`,
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
                TraducaoValoresMetodos[MetodoGradienteLinear[index]]
            );

            // Tradutor
            const resultadoTradutor = serializador.resolver(resultadoAvaliadorSintatico);

            expect(resultadoTradutor).toContain(TraducaoValoresMetodos[MetodoGradienteLinear[index]]);
            expect(resultadoTradutor).toContain('linear-gradient(90deg, green, yellow);');
        }
    });

    it('Atribuindo Método "gradiente-linear()" com valor de ângulo graus', () => {
        for (let index = 0; index < MetodoGradienteLinear.length; index += 1) {
            // Lexador
            const resultadoLexador = lexador.mapear([
                "lmht {",
                `${MetodoGradienteLinear[index]}: gradiente-linear(90graus, verde, amarelo);`,
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
                TraducaoValoresMetodos[MetodoGradienteLinear[index]]
            );

            // Tradutor
            const resultadoTradutor = serializador.resolver(resultadoAvaliadorSintatico);

            expect(resultadoTradutor).toContain(TraducaoValoresMetodos[MetodoGradienteLinear[index]]);
            expect(resultadoTradutor).toContain('linear-gradient(90deg, green, yellow);');
        }
    });

    it('Atribuindo Método "gradiente-linear()" com valor de posição', () => {
        for (let index = 0; index < MetodoGradienteLinear.length; index += 1) {
            const posicoes = ['superior', 'inferior', 'direita', 'esquerda'];
            for (let posIndex = 0; posIndex < posicoes.length; posIndex += 1) {
                // Lexador
                const resultadoLexador = lexador.mapear([
                    "lmht {",
                    `${MetodoGradienteLinear[index]}: gradiente-linear(${posicoes[posIndex]}, azul, vermelho);`,
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

                // O Lexador também deve encontrar um qualitativo no mapeamento, referente à posição
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
                expect(primeiroResultadoTipado.modificadores[0].propriedadeCss).toStrictEqual(
                    TraducaoValoresMetodos[MetodoGradienteLinear[index]]
                );

                // Tradutor
                const resultadoTradutor = serializador.resolver(resultadoAvaliadorSintatico);

                expect(resultadoTradutor).toContain(TraducaoValoresMetodos[MetodoGradienteLinear[index]]);

                switch (posicoes[posIndex]) {
                    case 'superior':
                        expect(resultadoTradutor).toContain('linear-gradient(0deg, blue, red);');
                        break;
                    case 'direita':
                        expect(resultadoTradutor).toContain('linear-gradient(90deg, blue, red);');
                        break;
                    case 'inferior':
                        expect(resultadoTradutor).toContain('linear-gradient(180deg, blue, red);');
                        break;
                    case 'esquerda':
                        expect(resultadoTradutor).toContain('linear-gradient(270deg, blue, red);');
                        break;
                    default:
                        break;
                }
            }
        }
    });

    it('Atribuindo Método "inclinar()"', () => {
        for (let index = 0; index < MetodosInclinar.length; index += 1) {

            const valoresAceitos = ['90graus', '18deg', '3.142rad', '0', '1'];

            for (let valIndex = 0; valIndex < valoresAceitos.length; valIndex += 1) {
                // Lexador
                const resultadoLexador = lexador.mapear([
                    "lmht {",
                    `${MetodosInclinar[index]}: inclinar(${valoresAceitos[valIndex]});`,
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
                if (valIndex <= 2) {
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
                    TraducaoValoresMetodos[MetodosInclinar[index]]
                );

                // Tradutor
                const resultadoTradutor = serializador.resolver(resultadoAvaliadorSintatico);

                // O Tradutor deve serializar de acordo e traduzir inclinar para skew
                expect(resultadoTradutor).toContain(TraducaoValoresMetodos[MetodosInclinar[index]]);
                if (valIndex !== 0) {
                    expect(resultadoTradutor).toContain(`skew(${valoresAceitos[valIndex]});`);
                } else {
                    expect(resultadoTradutor).toContain(`skew(90deg);`);
                }
            }
        }
    });

    it('Atribuindo Método "inclinar() com múltiplos valores"', () => {
        for (let index = 0; index < MetodosInclinar.length; index += 1) {
            // Lexador
            const resultadoLexador = lexador.mapear([
                "lmht {",
                `${MetodosInclinar[index]}: inclinar(15graus, 15graus);`,
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
                TraducaoValoresMetodos[MetodosInclinar[index]]
            );

            // Tradutor
            const resultadoTradutor = serializador.resolver(resultadoAvaliadorSintatico);

            // O Tradutor deve serializar de acordo e traduzir inclinar para skew
            expect(resultadoTradutor).toContain(TraducaoValoresMetodos[MetodosInclinar[index]]);
            expect(resultadoTradutor).toContain(`skew(15deg, 15deg);`);
        }
    });

    it('Atribuindo Método "inclinar-horizontal()"', () => {
        for (let index = 0; index < MetodosInclinar.length; index += 1) {

            const valoresAceitos = ['180graus', '18deg', '3.142rad', '0', '1'];

            for (let valIndex = 0; valIndex < valoresAceitos.length; valIndex += 1) {
                // Lexador
                const resultadoLexador = lexador.mapear([
                    "lmht {",
                    `${MetodosInclinar[index]}: inclinar-horizontal(${valoresAceitos[valIndex]});`,
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
                if (valIndex <= 2) {
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
                    TraducaoValoresMetodos[MetodosInclinar[index]]
                );
                // Tradutor
                const resultadoTradutor = serializador.resolver(resultadoAvaliadorSintatico);

                // O Tradutor deve serializar de acordo e traduzir inclinar-horizontal para skewX
                expect(resultadoTradutor).toContain(TraducaoValoresMetodos[MetodosInclinar[index]]);
                if (valIndex !== 0) {
                    expect(resultadoTradutor).toContain(`skewX(${valoresAceitos[valIndex]});`);
                } else {
                    expect(resultadoTradutor).toContain(`skewX(180deg);`);
                }
            }
        }
    });

    it('Atribuindo Método "inclinar-vertical()"', () => {
        for (let index = 0; index < MetodosInclinar.length; index += 1) {

            const valoresAceitos = ['180graus', '18deg', '3.142rad', '0', '1'];

            for (let valIndex = 0; valIndex < valoresAceitos.length; valIndex += 1) {
                // Lexador
                const resultadoLexador = lexador.mapear([
                    "lmht {",
                    `${MetodosInclinar[index]}: inclinar-vertical(${valoresAceitos[valIndex]});`,
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
                if (valIndex <= 2) {
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
                    TraducaoValoresMetodos[MetodosInclinar[index]]
                );

                // Tradutor
                const resultadoTradutor = serializador.resolver(resultadoAvaliadorSintatico);

                // O Tradutor deve serializar de acordo e traduzir inclinar-vertical para skewY
                expect(resultadoTradutor).toContain(TraducaoValoresMetodos[MetodosInclinar[index]]);
                if (valIndex !== 0) {
                    expect(resultadoTradutor).toContain(`skewY(${valoresAceitos[valIndex]});`);
                } else {
                    expect(resultadoTradutor).toContain(`skewY(180deg);`);
                }
            }
        }
    });

    it('Atribuindo Método "inverter()"', () => {
        for (let index = 0; index < MetodoInverter.length; index += 1) {

            const valoresAceitos = ['100px', '100%', '0.1', '0', '1', '1.75'];

            for (let valIndex = 0; valIndex < valoresAceitos.length; valIndex += 1) {
                // Lexador
                const resultadoLexador = lexador.mapear([
                    "lmht {",
                    `${MetodoInverter[index]}: inverter(${valoresAceitos[valIndex]});`,
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
                    TraducaoValoresMetodos[MetodoInverter[index]]
                );
                // Tradutor
                const resultadoTradutor = serializador.resolver(resultadoAvaliadorSintatico);

                // O Tradutor deve serializar de acordo e traduzir inverter para invert
                expect(resultadoTradutor).toContain(TraducaoValoresMetodos[MetodoInverter[index]]);
                expect(resultadoTradutor).toContain(`invert(${valoresAceitos[valIndex]});`);
            }
        }
    });

    it('Atribuindo Método "limitar" (clamp)', () => {
        for (let index = 0; index < MetodoLimitar.length; index += 1) {
            // Lexador
            const resultadoLexador = lexador.mapear([
                "lmht {",
                `${MetodoLimitar[index]}: limitar(10vw, 20em, 100vw);`,
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
                TraducaoValoresMetodos[MetodoLimitar[index]]
            );

            // Tradutor
            const resultadoTradutor = serializador.resolver(resultadoAvaliadorSintatico);

            expect(resultadoTradutor).toContain(TraducaoValoresMetodos[MetodoLimitar[index]]);
            expect(resultadoTradutor).toContain('clamp(10vw, 20em, 100vw);');
        }
    });

    it('Atribuindo Método "linear()"', () => {
        for (let index = 0; index < MetodoLinear.length; index += 1) {
            // Lexador
            const resultadoLexador = lexador.mapear([
                "lmht {",
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
                TraducaoValoresMetodos[MetodoLinear[index]]
            );

            // // // // Tradutor
            const resultadoTradutor = serializador.resolver(resultadoAvaliadorSintatico);

            expect(resultadoTradutor).toContain(TraducaoValoresMetodos[MetodoLinear[index]]);
            expect(resultadoTradutor).toContain('linear(0, 0.25, 1);');
        }
    });

    it('Atribuindo Método "minmax()"', () => {
        for (let index = 0; index < MetodoMinMax.length; index += 1) {
            // Lexador
            const resultadoLexador = lexador.mapear([
                "lmht {",
                `${MetodoMinMax[index]}: minmax(100px, conteúdo-máximo);`,
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
                TraducaoValoresMetodos[MetodoMinMax[index]]
            );

            // // // // Tradutor
            const resultadoTradutor = serializador.resolver(resultadoAvaliadorSintatico);

            expect(resultadoTradutor).toContain(TraducaoValoresMetodos[MetodoMinMax[index]]);
            expect(resultadoTradutor).toContain('minmax(100px, max-content);');
        }
    });

    it('Atribuindo Método "opacar()"', () => {
        for (let index = 0; index < MetodoOpacar.length; index += 1) {

            const valoresAceitos = ['100px', '100%', '0.1', '0', '1', '1.75'];

            for (let valIndex = 0; valIndex < valoresAceitos.length; valIndex += 1) {
                // Lexador
                const resultadoLexador = lexador.mapear([
                    "lmht {",
                    `${MetodoOpacar[index]}: opacar(${valoresAceitos[valIndex]});`,
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
                    TraducaoValoresMetodos[MetodoOpacar[index]]
                );

                // Tradutor
                const resultadoTradutor = serializador.resolver(resultadoAvaliadorSintatico);

                // O Tradutor deve serializar de acordo e traduzir opacar para opacity
                expect(resultadoTradutor).toContain(TraducaoValoresMetodos[MetodoOpacar[index]]);
                expect(resultadoTradutor).toContain(`opacity(${valoresAceitos[valIndex]});`);
            }
        }
    });

    it('Atribuindo Método "ornamentos()" com valor numérico - caso de sucesso', () => {
        const valoresAceitos = ['1', '2', '12', '20'];

        for (let index = 0; index < valoresAceitos.length; index += 1) {
            // Lexador
            const resultadoLexador = lexador.mapear([
                "lmht {",
                `variacao-fonte-alternativa: ornamentos(${valoresAceitos[index]});`,
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
            expect(primeiroResultadoTipado.modificadores[0].propriedadeCss).toStrictEqual(
                'font-variant-alternates'
            );

            // Tradutor
            const resultadoTradutor = serializador.resolver(resultadoAvaliadorSintatico);

            // O Tradutor deve serializar de acordo e traduzir ornamentos para ornaments
            expect(resultadoTradutor).toContain('font-variant-alternates');
            expect(resultadoTradutor).toContain(`ornaments(${valoresAceitos[index]});`);
        }
    });

    it('Atribuindo Método "ornamentos()" com valor numérico - caso de falha', () => {
        const valoresAceitos = ['0', '100', '300'];

        for (let index = 0; index < valoresAceitos.length; index += 1) {
            // Lexador
            const resultadoLexador = lexador.mapear([
                "lmht {",
                `variacao-fonte-alternativa: ornamentos(${valoresAceitos[index]});`,
                "}"
            ]);

            const resultadoAvaliadorSintatico = avaliador.analisar(resultadoLexador.simbolos);

            expect(() => {
                serializador.resolver(resultadoAvaliadorSintatico);
            }).toThrow('O valor da função ornamentos() deve estar entre 1 e 99');
        }
    });

    it('Atribuindo Método "ornamentos()" com valor string - caso de sucesso', () => {
        const valoresAceitos = ['floral', 'ruby', 'circle'];
        for (let index = 0; index < valoresAceitos.length; index += 1) {
            // Lexador
            const resultadoLexador = lexador.mapear([
                "lmht {",
                `variacao-fonte-alternativa: ornamentos('${valoresAceitos[index]}');`,
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

            // Avaliador Sintático
            const resultadoAvaliadorSintatico = avaliador.analisar(resultadoLexador.simbolos);

            // O Avaliador deve montar um objeto com os devidos nomes FolEs e CSS
            expect(resultadoAvaliadorSintatico.length).toBeGreaterThanOrEqual(1);
            const primeiroResultado = resultadoAvaliadorSintatico[0];
            expect(primeiroResultado).toBeInstanceOf(BlocoDeclaracao);
            const primeiroResultadoTipado = primeiroResultado as BlocoDeclaracao;
            expect(primeiroResultadoTipado.modificadores.length).toBeGreaterThanOrEqual(1);
            expect(primeiroResultadoTipado.modificadores[0].propriedadeCss).toStrictEqual(
                'font-variant-alternates'
            );

            // Tradutor
            const resultadoTradutor = serializador.resolver(resultadoAvaliadorSintatico);

            // O Tradutor deve serializar de acordo e traduzir ornamentos para ornaments e conter o valor string
            expect(resultadoTradutor).toContain('font-variant-alternates');
            expect(resultadoTradutor).toContain(`ornaments('${valoresAceitos[index]}');`);

        }
    });

    it('Atribuindo Método "ornamentos()" com valor string - caso de falha', () => {
        const valoresAceitos = ['--valorPersonalizado', 'herdar', 'inicial'];

        for (let index = 0; index < valoresAceitos.length; index += 1) {
            // Lexador
            const resultadoLexador = lexador.mapear([
                "lmht {",
                `variacao-fonte-alternativa: ornamentos(${valoresAceitos[index]});`,
                "}"
            ]);

            const resultadoAvaliadorSintatico = avaliador.analisar(resultadoLexador.simbolos);

            expect(() => {
                serializador.resolver(resultadoAvaliadorSintatico);
            }).toThrow(`Modificador ou variável 'variação-fonte-alternativa' com valor personalizado ${valoresAceitos[index]} inválido. O valor deve seguir as regras de sintaxe de uma identificação personalizada (<custom-indent>).`);
        }
    });

    it('Atribuindo Método "passos" (steps)', () => {
        for (let index = 0; index < MetodoPassos.length; index += 1) {
            // Lexador
            const resultadoLexador = lexador.mapear([
                "lmht {",
                `${MetodoPassos[index]}: passos(2, salto-inicial);`,
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

            // O Lexador também deve encontrar número e qualitativo no mapeamento
            expect(resultadoLexador.simbolos).toEqual(
                expect.arrayContaining([
                    expect.objectContaining({ tipo: tiposDeSimbolos.NUMERO }),
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
            expect(primeiroResultadoTipado.modificadores[0].propriedadeCss).toStrictEqual(
                TraducaoValoresMetodos[MetodoPassos[index]]
            );

            // // // // Tradutor
            const resultadoTradutor = serializador.resolver(resultadoAvaliadorSintatico);

            expect(resultadoTradutor).toContain(TraducaoValoresMetodos[MetodoPassos[index]]);
            expect(resultadoTradutor).toContain('steps(2, jump-start);');
        }
    });

    it('Atribuindo Método "perspectivar()"', () => {
        for (let index = 0; index < MetodoPerspectivar.length; index += 1) {

            const valoresAceitos = ['800px', '6.5cm', '0.1', '0', '1', '1.75', 'nenhuma'];

            for (let valIndex = 0; valIndex < valoresAceitos.length; valIndex += 1) {
                // Lexador
                const resultadoLexador = lexador.mapear([
                    "lmht {",
                    `${MetodoPerspectivar[index]}: perspectivar(${valoresAceitos[valIndex]});`,
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
                    TraducaoValoresMetodos[MetodoPerspectivar[index]]
                );

                // Tradutor
                const resultadoTradutor = serializador.resolver(resultadoAvaliadorSintatico);

                // O Tradutor deve serializar de acordo e traduzir perspectivar para perspective
                expect(resultadoTradutor).toContain(TraducaoValoresMetodos[MetodoPerspectivar[index]]);
                expect(resultadoTradutor).toContain(`perspective(${valoresAceitos[valIndex]});`);
            }
        }
    });

    it('Atribuindo Método "projetar-sombra()" com valores de comprimento somente', () => {
        for (let index = 0; index < MetodoProjetarSombra.length; index += 1) {
            const comprimentos = ['15px 15px', '15px 15px 15px', '0.5rem 0.5rem', '0.5rem 0.5rem 1rem'];
            for (let posIndex = 0; posIndex < comprimentos.length; posIndex += 1) {
                // Lexador
                const resultadoLexador = lexador.mapear([
                    "lmht {",
                    `${MetodoProjetarSombra[index]}: projetar-sombra(${comprimentos[posIndex]});`,
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
                    TraducaoValoresMetodos[MetodoProjetarSombra[index]]
                );

                // Tradutor
                const resultadoTradutor = serializador.resolver(resultadoAvaliadorSintatico);

                // O Tradutor deve serializar de acordo e traduzir projetar-sombra para drop-shadow  
                expect(resultadoTradutor).toContain(TraducaoValoresMetodos[MetodoProjetarSombra[index]]);
                expect(resultadoTradutor).toContain(`drop-shadow(${comprimentos[posIndex]});`);
            }
        }
    });

    it('Atribuindo Método "projetar-sombra()" com valores de cor e de comprimento', () => {
        for (let index = 0; index < MetodoProjetarSombra.length; index += 1) {
            const comprimentos = ['15px 15px vermelho', '15px 15px 15px vermelho', 'vermelho 0.5rem 0.5rem', 'vermelho 0.5rem 0.5rem 1rem'];
            for (let posIndex = 0; posIndex < comprimentos.length; posIndex += 1) {
                // Lexador
                const resultadoLexador = lexador.mapear([
                    "lmht {",
                    `${MetodoProjetarSombra[index]}: projetar-sombra(${comprimentos[posIndex]});`,
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
                    TraducaoValoresMetodos[MetodoProjetarSombra[index]]
                );
                // Tradutor
                const resultadoTradutor = serializador.resolver(resultadoAvaliadorSintatico);

                // O Tradutor deve serializar de acordo e traduzir vermelho para red
                expect(resultadoTradutor).toContain(TraducaoValoresMetodos[MetodoProjetarSombra[index]]);
                expect(resultadoTradutor).toContain('red');
            }
        }
    });

    it('Atribuindo Método "raio()" com valores de posição e número/quantificador', () => {
        for (let index = 0; index < MetodoRaio.length; index += 1) {

            const valoresAceitos = ['lado-mais-próximo', 'lado-mais-proximo', 'canto-mais-próximo', 'canto-mais-proximo', 'lado-mais-distante', 'canto-mais-distante', 'lados', 'conter'];

            const traducaoValoresAceitos = ['closest-side', 'closest-side', 'closest-corner', 'closest-corner', 'farthest-side', 'farthest-corner', 'sides', 'contain'];

            for (let valIndex = 0; valIndex < valoresAceitos.length; valIndex += 1) {
                // Lexador
                const resultadoLexador = lexador.mapear([
                    "lmht {",
                    `${MetodoRaio[index]}: raio(${valoresAceitos[valIndex]} 200graus);`,
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
                    TraducaoValoresMetodos[MetodoRaio[index]]
                );

                // Tradutor
                const resultadoTradutor = serializador.resolver(resultadoAvaliadorSintatico);

                // O Tradutor deve serializar de acordo e traduzir raio para ray
                expect(resultadoTradutor).toContain(TraducaoValoresMetodos[MetodoRaio[index]]);
                expect(resultadoTradutor).toContain(`ray(${traducaoValoresAceitos[valIndex]} 200deg);`);
            }
        }
    });

    it('Atribuindo Método "raio()" com somente número/quantificador', () => {
        for (let index = 0; index < MetodoRaio.length; index += 1) {
            // Lexador
            const resultadoLexador = lexador.mapear([
                "lmht {",
                `${MetodoRaio[index]}: raio(200graus);`,
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
                TraducaoValoresMetodos[MetodoRaio[index]]
            );

            // Tradutor
            const resultadoTradutor = serializador.resolver(resultadoAvaliadorSintatico);

            // O Tradutor deve serializar de acordo e traduzir raio para ray
            expect(resultadoTradutor).toContain(TraducaoValoresMetodos[MetodoRaio[index]]);
            expect(resultadoTradutor).toContain(`ray(200deg);`);

        }
    });

    it('Atribuindo Método "rotacionar()"', () => {
        for (let index = 0; index < MetodosRotacionar.length; index += 1) {

            const valoresAceitos = ['45graus', '45deg', '3.142rad', '0.1', '0', '1', '1.75'];

            for (let valIndex = 0; valIndex < valoresAceitos.length; valIndex += 1) {
                // Lexador
                const resultadoLexador = lexador.mapear([
                    "lmht {",
                    `${MetodosRotacionar[index]}: rotacionar(${valoresAceitos[valIndex]});`,
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
                if (valIndex <= 2) {
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
                    TraducaoValoresMetodos[MetodosRotacionar[index]]
                );

                // Tradutor
                const resultadoTradutor = serializador.resolver(resultadoAvaliadorSintatico);

                // O Tradutor deve serializar de acordo e traduzir rotacionar para rotate
                expect(resultadoTradutor).toContain(TraducaoValoresMetodos[MetodosRotacionar[index]]);
                if (valIndex !== 0) {
                    expect(resultadoTradutor).toContain(`rotate(${valoresAceitos[valIndex]});`);
                } else {
                    expect(resultadoTradutor).toContain(`rotate(45deg);`);

                }
            }
        }
    });

    it('Atribuindo Método "rotacionar-3d()" - caso de sucesso', () => {
        for (let index = 0; index < MetodosRotacionar.length; index += 1) {

            const valoresAceitos = ['0, 0, 0, 0', '1, 2, 0, 45deg', '1, 1, 1, 90graus'];

            for (let valIndex = 0; valIndex < valoresAceitos.length; valIndex += 1) {
                // Lexador
                const resultadoLexador = lexador.mapear([
                    "lmht {",
                    `${MetodosRotacionar[index]}: rotacionar-3d(${valoresAceitos[valIndex]});`,
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

                // O Lexador deve montar um objeto de comprimento 17 caso haja quantificador e 16 caso não haja
                if (valIndex > 0) {
                    expect(resultadoLexador.simbolos).toHaveLength(17);
                    expect(resultadoLexador.simbolos).toEqual(
                        expect.arrayContaining([
                            expect.objectContaining({ tipo: tiposDeSimbolos.NUMERO }),
                            expect.objectContaining({ tipo: tiposDeSimbolos.QUANTIFICADOR }),
                        ])
                    );
                } else {
                    expect(resultadoLexador.simbolos).toHaveLength(16);
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
                    TraducaoValoresMetodos[MetodosRotacionar[index]]
                );

                // Tradutor
                const resultadoTradutor = serializador.resolver(resultadoAvaliadorSintatico);

                // O Tradutor deve serializar de acordo e traduzir rotacionar-3d para rotate3d
                expect(resultadoTradutor).toContain(TraducaoValoresMetodos[MetodosRotacionar[index]]);
                if (valIndex < 2) {
                    expect(resultadoTradutor).toContain(`rotate3d(${valoresAceitos[valIndex]});`);
                } else {
                    expect(resultadoTradutor).toContain(`rotate3d(1, 1, 1, 90deg);`);
                }
            }
        }
    });

    it('Atribuindo Método "rotacionar-3d()" - caso de falha', () => {
        for (let index = 0; index < MetodosRotacionar.length; index += 1) {
            // Lexador
            const resultadoLexador = lexador.mapear([
                "lmht {",
                `${MetodosRotacionar[index]}: rotacionar-3d(1, 1, 1, 20px);`,
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

            // Avaliador Sintático 
            const resultadoAvaliadorSintatico = avaliador.analisar(resultadoLexador.simbolos);

            // Serializador não deve aceitar 'px' como quantificador válido
            expect(() => {
                serializador.resolver(resultadoAvaliadorSintatico);
            }).toThrow();
        }
    });

    it('Atribuindo Método "rotacionar-eixo-z()"', () => {
        for (let index = 0; index < MetodosRotacionar.length; index += 1) {

            const valoresAceitos = ['45graus', '45deg', '3.142rad', '0.1', '0', '1', '1.75'];

            for (let valIndex = 0; valIndex < valoresAceitos.length; valIndex += 1) {
                // Lexador
                const resultadoLexador = lexador.mapear([
                    "lmht {",
                    `${MetodosRotacionar[index]}: rotacionar-eixo-z(${valoresAceitos[valIndex]});`,
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
                if (valIndex <= 2) {
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
                    TraducaoValoresMetodos[MetodosRotacionar[index]]
                );

                // Tradutor
                const resultadoTradutor = serializador.resolver(resultadoAvaliadorSintatico);

                // O Tradutor deve serializar de acordo e traduzir rotacionar-eixo-z para rotateZ
                expect(resultadoTradutor).toContain(TraducaoValoresMetodos[MetodosRotacionar[index]]);
                if (valIndex !== 0) {
                    expect(resultadoTradutor).toContain(`rotateZ(${valoresAceitos[valIndex]});`);
                } else {
                    expect(resultadoTradutor).toContain(`rotateZ(45deg);`);
                }
            }
        }
    });

    it('Atribuindo Método "rotacionar-horizontal()"', () => {
        for (let index = 0; index < MetodosRotacionar.length; index += 1) {

            const valoresAceitos = ['45graus', '45deg', '3.142rad', '0.1', '0', '1', '1.75'];

            for (let valIndex = 0; valIndex < valoresAceitos.length; valIndex += 1) {
                // Lexador
                const resultadoLexador = lexador.mapear([
                    "lmht {",
                    `${MetodosRotacionar[index]}: rotacionar-horizontal(${valoresAceitos[valIndex]});`,
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
                if (valIndex <= 2) {
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
                    TraducaoValoresMetodos[MetodosRotacionar[index]]
                );

                // Tradutor
                const resultadoTradutor = serializador.resolver(resultadoAvaliadorSintatico);

                // O Tradutor deve serializar de acordo e traduzir rotacionar-horizontal para rotateX
                expect(resultadoTradutor).toContain(TraducaoValoresMetodos[MetodosRotacionar[index]]);
                if (valIndex !== 0) {
                    expect(resultadoTradutor).toContain(`rotateX(${valoresAceitos[valIndex]});`);
                } else {
                    expect(resultadoTradutor).toContain(`rotateX(45deg);`);
                }
            }
        }
    });

    it('Atribuindo Método "rotacionar-matiz()"', () => {
        for (let index = 0; index < MetodoRotacionarMatiz.length; index += 1) {

            const valoresAceitos = ['90graus', '100px', '100%', '0.1', '0', '1', '1.75'];

            for (let valIndex = 0; valIndex < valoresAceitos.length; valIndex += 1) {
                // Lexador
                const resultadoLexador = lexador.mapear([
                    "lmht {",
                    `${MetodoRotacionarMatiz[index]}: rotacionar-matiz(${valoresAceitos[valIndex]});`,
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
                if (valIndex <= 2) {
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
                    TraducaoValoresMetodos[MetodoRotacionarMatiz[index]]
                );

                // Tradutor
                const resultadoTradutor = serializador.resolver(resultadoAvaliadorSintatico);

                // O Tradutor deve serializar de acordo e traduzir rotacionar-matiz para hue-rotate
                expect(resultadoTradutor).toContain(TraducaoValoresMetodos[MetodoRotacionarMatiz[index]]);

                if (valIndex !== 0) {
                    expect(resultadoTradutor).toContain(`hue-rotate(${valoresAceitos[valIndex]});`);
                } else {
                    expect(resultadoTradutor).toContain(`hue-rotate(90deg);`);
                }
            }
        }
    });

    it('Atribuindo Método "rotacionar-vertical()"', () => {
        for (let index = 0; index < MetodosRotacionar.length; index += 1) {

            const valoresAceitos = ['45graus', '45deg', '3.142rad', '0.1', '0', '1', '1.75'];

            for (let valIndex = 0; valIndex < valoresAceitos.length; valIndex += 1) {
                // Lexador
                const resultadoLexador = lexador.mapear([
                    "lmht {",
                    `${MetodosRotacionar[index]}: rotacionar-vertical(${valoresAceitos[valIndex]});`,
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
                if (valIndex <= 2) {
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
                    TraducaoValoresMetodos[MetodosRotacionar[index]]
                );
                // Tradutor
                const resultadoTradutor = serializador.resolver(resultadoAvaliadorSintatico);

                // O Tradutor deve serializar de acordo e traduzir rotacionar-vertical para rotateY
                expect(resultadoTradutor).toContain(TraducaoValoresMetodos[MetodosRotacionar[index]]);
                if (valIndex !== 0) {
                    expect(resultadoTradutor).toContain(`rotateY(${valoresAceitos[valIndex]});`);
                } else {
                    expect(resultadoTradutor).toContain(`rotateY(45deg);`);
                }
            }
        }
    });

    it('Atribuindo Método "saturar()"', () => {
        for (let index = 0; index < MetodoSaturar.length; index += 1) {

            const valoresAceitos = ['100px', '100%', '0.1', '0', '1', '1.75'];

            for (let valIndex = 0; valIndex < valoresAceitos.length; valIndex += 1) {
                // Lexador
                const resultadoLexador = lexador.mapear([
                    "lmht {",
                    `${MetodoSaturar[index]}: saturar(${valoresAceitos[valIndex]});`,
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
                    TraducaoValoresMetodos[MetodoSaturar[index]]
                );

                // Tradutor
                const resultadoTradutor = serializador.resolver(resultadoAvaliadorSintatico);

                // O Tradutor deve serializar de acordo e traduzir saturar para saturate
                expect(resultadoTradutor).toContain(TraducaoValoresMetodos[MetodoSaturar[index]]);
                expect(resultadoTradutor).toContain(`saturate(${valoresAceitos[valIndex]});`);
            }
        }
    });

    it('Atribuindo Método "sepia()"', () => {
        for (let index = 0; index < MetodoSepia.length; index += 1) {

            const valoresAceitos = ['100px', '100%', '0.1', '0', '1', '1.75'];

            for (let valIndex = 0; valIndex < valoresAceitos.length; valIndex += 1) {
                // Lexador
                const resultadoLexador = lexador.mapear([
                    "lmht {",
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
                    TraducaoValoresMetodos[MetodoSepia[index]]
                );

                // Tradutor
                const resultadoTradutor = serializador.resolver(resultadoAvaliadorSintatico);

                // O Tradutor deve serializar de acordo e traduzir sépia para sepia
                expect(resultadoTradutor).toContain(TraducaoValoresMetodos[MetodoSepia[index]]);
                expect(resultadoTradutor).toContain(`sepia(${valoresAceitos[valIndex]});`);
            }
        }
    });

    it('Atribuindo Método "translação()"', () => {
        for (let index = 0; index < MetodosTranslacao.length; index += 1) {

            const valoresAceitos = ['270graus', '18deg', '3.142rad', '0', '1'];

            for (let valIndex = 0; valIndex < valoresAceitos.length; valIndex += 1) {
                // Lexador
                const resultadoLexador = lexador.mapear([
                    "lmht {",
                    `${MetodosTranslacao[index]}: translação(${valoresAceitos[valIndex]});`,
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
                if (valIndex <= 2) {
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
                    TraducaoValoresMetodos[MetodosTranslacao[index]]
                );

                // Tradutor
                const resultadoTradutor = serializador.resolver(resultadoAvaliadorSintatico);

                // O Tradutor deve serializar de acordo e traduzir translação para translate
                expect(resultadoTradutor).toContain(TraducaoValoresMetodos[MetodosTranslacao[index]]);
                if (valIndex !== 0) {
                    expect(resultadoTradutor).toContain(`translate(${valoresAceitos[valIndex]});`);
                } else {
                    expect(resultadoTradutor).toContain(`translate(270deg);`);
                }
            }
        }
    });

    it('Atribuindo Método "translacao() com múltiplos valores"', () => {
        for (let index = 0; index < MetodosTranslacao.length; index += 1) {
            // Lexador
            const resultadoLexador = lexador.mapear([
                "lmht {",
                `${MetodosTranslacao[index]}: translacao(100graus, 100graus);`,
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
                TraducaoValoresMetodos[MetodosTranslacao[index]]
            );

            // Tradutor
            const resultadoTradutor = serializador.resolver(resultadoAvaliadorSintatico);

            // O Tradutor deve serializar de acordo e traduzir translacao para translate
            expect(resultadoTradutor).toContain(TraducaoValoresMetodos[MetodosTranslacao[index]]);
            expect(resultadoTradutor).toContain(`translate(100deg, 100deg);`);
        }
    });

    it('Atribuindo Método "translação-3d()"', () => {
        for (let index = 0; index < MetodosTranslacao.length; index += 1) {
            // Lexador
            const resultadoLexador = lexador.mapear([
                "lmht {",
                `${MetodosTranslacao[index]}: translacao-3d(5ch, 0.4in, 5em);`,
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
                TraducaoValoresMetodos[MetodosTranslacao[index]]
            );

            // Tradutor
            const resultadoTradutor = serializador.resolver(resultadoAvaliadorSintatico);

            // O Tradutor deve serializar de acordo e traduzir translação-3d para translate3d
            expect(resultadoTradutor).toContain(TraducaoValoresMetodos[MetodosTranslacao[index]]);
            expect(resultadoTradutor).toContain(`translate3d(5ch, 0.4in, 5em);`);
        }
    });

    it('Atribuindo Método "translação-3d() cobrindo todos os casos"', () => {
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
                    "lmht {",
                    `${MetodosTranslacao[index]}: translação-3d(${valoresAceitos[valIndex]});`,
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
                    TraducaoValoresMetodos[MetodosTranslacao[index]]
                );

                // Tradutor
                const resultadoTradutor = serializador.resolver(resultadoAvaliadorSintatico);

                // O Tradutor deve serializar de acordo e traduzir translação-3d para translate3d
                expect(resultadoTradutor).toContain(TraducaoValoresMetodos[MetodosTranslacao[index]]);
                if (valIndex !== 8) {
                    expect(resultadoTradutor).toContain(`translate3d(${valoresAceitos[valIndex]});`);
                } else {
                    expect(resultadoTradutor).toContain(`translate3d(0);`);
                }
            }
        }
    });

    it('Atribuindo Método "translação-eixo-z()"', () => {
        for (let index = 0; index < MetodosTranslacao.length; index += 1) {

            const valoresAceitos = ['42px', '3ch', '0'];

            for (let valIndex = 0; valIndex < valoresAceitos.length; valIndex += 1) {
                // Lexador
                const resultadoLexador = lexador.mapear([
                    "lmht {",
                    `${MetodosTranslacao[index]}: translação-eixo-z(${valoresAceitos[valIndex]});`,
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
                    TraducaoValoresMetodos[MetodosTranslacao[index]]
                );

                // Tradutor
                const resultadoTradutor = serializador.resolver(resultadoAvaliadorSintatico);

                // O Tradutor deve serializar de acordo e traduzir translação-eixo-z para translateZ
                expect(resultadoTradutor).toContain(TraducaoValoresMetodos[MetodosTranslacao[index]]);
                expect(resultadoTradutor).toContain(`translateZ(${valoresAceitos[valIndex]});`);
            }
        }
    });

    it('Atribuindo Método "translacao-eixo-z()"', () => {
        for (let index = 0; index < MetodosTranslacao.length; index += 1) {

            const valoresAceitos = ['42px', '3ch', '0'];

            for (let valIndex = 0; valIndex < valoresAceitos.length; valIndex += 1) {
                // Lexador
                const resultadoLexador = lexador.mapear([
                    "lmht {",
                    `${MetodosTranslacao[index]}: translacao-eixo-z(${valoresAceitos[valIndex]});`,
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
                    TraducaoValoresMetodos[MetodosTranslacao[index]]
                );

                // Tradutor
                const resultadoTradutor = serializador.resolver(resultadoAvaliadorSintatico);

                // O Tradutor deve serializar de acordo e traduzir translacao-eixo-z para translateZ
                expect(resultadoTradutor).toContain(TraducaoValoresMetodos[MetodosTranslacao[index]]);
                expect(resultadoTradutor).toContain(`translateZ(${valoresAceitos[valIndex]});`);
            }
        }
    });

    it('Atribuindo Método "translação-horizontal()"', () => {
        for (let index = 0; index < MetodosTranslacao.length; index += 1) {

            const valoresAceitos = ['42px', '3ch', '0'];

            for (let valIndex = 0; valIndex < valoresAceitos.length; valIndex += 1) {
                // Lexador
                const resultadoLexador = lexador.mapear([
                    "lmht {",
                    `${MetodosTranslacao[index]}: translação-horizontal(${valoresAceitos[valIndex]});`,
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
                    TraducaoValoresMetodos[MetodosTranslacao[index]]
                );

                // Tradutor
                const resultadoTradutor = serializador.resolver(resultadoAvaliadorSintatico);

                // O Tradutor deve serializar de acordo e traduzir translação-horizontal para translateX
                expect(resultadoTradutor).toContain(TraducaoValoresMetodos[MetodosTranslacao[index]]);
                expect(resultadoTradutor).toContain(`translateX(${valoresAceitos[valIndex]});`);
            }
        }
    });

    it('Atribuindo Método "translacao-horizontal()"', () => {
        for (let index = 0; index < MetodosTranslacao.length; index += 1) {

            const valoresAceitos = ['42px', '3ch', '0'];

            for (let valIndex = 0; valIndex < valoresAceitos.length; valIndex += 1) {
                // Lexador
                const resultadoLexador = lexador.mapear([
                    "lmht {",
                    `${MetodosTranslacao[index]}: translacao-horizontal(${valoresAceitos[valIndex]});`,
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
                    TraducaoValoresMetodos[MetodosTranslacao[index]]
                );

                // Tradutor
                const resultadoTradutor = serializador.resolver(resultadoAvaliadorSintatico);

                // O Tradutor deve serializar de acordo e traduzir translação-horizontal para translateX
                expect(resultadoTradutor).toContain(TraducaoValoresMetodos[MetodosTranslacao[index]]);
                expect(resultadoTradutor).toContain(`translateX(${valoresAceitos[valIndex]});`);
            }
        }
    });

    it('Atribuindo Método "translação-vertical()"', () => {
        for (let index = 0; index < MetodosTranslacao.length; index += 1) {

            const valoresAceitos = ['42px', '3ch', '0'];

            for (let valIndex = 0; valIndex < valoresAceitos.length; valIndex += 1) {
                // Lexador
                const resultadoLexador = lexador.mapear([
                    "lmht {",
                    `${MetodosTranslacao[index]}: translação-vertical(${valoresAceitos[valIndex]});`,
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
                    TraducaoValoresMetodos[MetodosTranslacao[index]]
                );

                // Tradutor
                const resultadoTradutor = serializador.resolver(resultadoAvaliadorSintatico);

                // O Tradutor deve serializar de acordo e traduzir translação-vertical para translateY
                expect(resultadoTradutor).toContain(TraducaoValoresMetodos[MetodosTranslacao[index]]);
                expect(resultadoTradutor).toContain(`translateY(${valoresAceitos[valIndex]});`);
            }
        }
    });

    it('Atribuindo Método "translacao-vertical"', () => {
        for (let index = 0; index < MetodosTranslacao.length; index += 1) {

            const valoresAceitos = ['42px', '3ch', '0'];

            for (let valIndex = 0; valIndex < valoresAceitos.length; valIndex += 1) {
                // Lexador
                const resultadoLexador = lexador.mapear([
                    "lmht {",
                    `${MetodosTranslacao[index]}: translacao-vertical(${valoresAceitos[valIndex]});`,
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
                    TraducaoValoresMetodos[MetodosTranslacao[index]]
                );

                // Tradutor
                const resultadoSerializacao = serializador.resolver(resultadoAvaliadorSintatico);

                // O Tradutor deve serializar de acordo e traduzir translação-vertical para translateY
                expect(resultadoSerializacao).toContain(TraducaoValoresMetodos[MetodosTranslacao[index]]);
                expect(resultadoSerializacao).toContain(`translateY(${valoresAceitos[valIndex]});`);
            }
        }
    });

    it('Atribuindo Método "variar-caractere()" - caso de sucesso', () => {
        const valoresAceitos = ['1', '2', '12', '20'];

        for (let index = 0; index < valoresAceitos.length; index += 1) {
            // Lexador
            const resultadoLexador = lexador.mapear([
                "lmht {",
                `variacao-fonte-alternativa: variar-caractere(${valoresAceitos[index]});`,
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
            expect(primeiroResultadoTipado.modificadores[0].propriedadeCss).toStrictEqual(
                'font-variant-alternates'
            );

            // Tradutor
            const resultadoTradutor = serializador.resolver(resultadoAvaliadorSintatico);

            // O Tradutor deve serializar de acordo e traduzir variar-caractere para character-variant
            expect(resultadoTradutor).toContain('font-variant-alternates');
            expect(resultadoTradutor).toContain(`character-variant(${valoresAceitos[index]});`);
        }
    });

    it('Atribuindo Método "variar-caractere()" - caso de falha', () => {
        const valoresAceitos = ['0', '210', '100'];

        for (let index = 0; index < valoresAceitos.length; index += 1) {
            // Lexador
            const resultadoLexador = lexador.mapear([
                "lmht {",
                `variacao-fonte-alternativa: variar-caractere(${valoresAceitos[index]});`,
                "}"
            ]);

            const resultadoAvaliadorSintatico = avaliador.analisar(resultadoLexador.simbolos);

            expect(() => {
                serializador.resolver(resultadoAvaliadorSintatico);
            }).toThrow('O valor da função variar-caractere() deve estar entre 1 e 99');
        }
    });

    it('Caso de Falha - Atribuindo método inexistente', () => {
        for (let index = 0; index < MetodosTranslacao.length; index += 1) {

            const valoresAceitos = ['42px', '3ch', '0'];

            for (let valIndex = 0; valIndex < valoresAceitos.length; valIndex += 1) {
                // Lexador
                const resultadoLexador = lexador.mapear([
                    "lmht {",
                    `${MetodosTranslacao[index]}: translacao-vertical(${valoresAceitos[valIndex]});`,
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
                    TraducaoValoresMetodos[MetodosTranslacao[index]]
                );

                // Tradutor
                const resultadoTradutor = serializador.resolver(resultadoAvaliadorSintatico);

                // O Tradutor deve serializar de acordo e traduzir translação-vertical para translateY
                expect(resultadoTradutor).toContain(TraducaoValoresMetodos[MetodosTranslacao[index]]);
                expect(resultadoTradutor).toContain(`translateY(${valoresAceitos[valIndex]});`);
            }
        }
    });

    it('Caso de Falha - Erro ao instanciar classe SeletorValor', () => {
        for (let index = 0; index < MetodosFolEs.length; index += 1) {
            const metodoIncorreto = MetodosFolEs[index].replace(MetodosFolEs[index][0], '');

            expect(() => {
                new SeletorValor(metodoIncorreto, []);
            }).toThrow(`O valor \'${metodoIncorreto}\' não foi encontrado.`);
        }
    });
});
