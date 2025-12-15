import { AvaliadorSintatico } from "../../fontes/avaliador-sintatico";
import { Importador } from "../../fontes/importador";
import { AvaliadorSintaticoInterface, ImportadorInterface, LexadorInterface } from "../../fontes/interfaces";
import { Lexador } from "../../fontes/lexador";
import { SeletorModificador } from "../../fontes/modificadores/superclasse";
import tiposDeSimbolos from "../../fontes/tipos-de-simbolos/foles";
import { Resolvedor } from "../../fontes/resolvedores";
import { BlocoDeclaracao } from "../../fontes/declaracoes";
import { fontes } from "../../fontes/modificadores/atributos/fontes";
import { ValoresPersonalizados, ValoresPersonalizadosMultiplos } from "../../fontes/listas/valores-personalizados";
import { ValorQualitativo, ValorTexto } from "../../fontes/valores";

describe('Testando Seletores com VALORES ESPECÍFICOS', () => {
    describe('Testes Unitários', () => {
        let lexador: LexadorInterface;
        let importador: ImportadorInterface;
        let avaliadorSintatico: AvaliadorSintaticoInterface;
        let serializador: Resolvedor;

        beforeEach(() => {
            lexador = new Lexador();
            importador = new Importador(lexador);
            avaliadorSintatico = new AvaliadorSintatico(importador);
            serializador = new Resolvedor();
        });

        it('Casos de sucesso - Valores SVG', () => {
            const valoresSVG = [
                {
                    folEs: "pinturaVisivel",
                    css: "visiblePainted",
                },
                {
                    folEs: "pinturaVisível",
                    css: "visiblePainted",
                },
                {
                    folEs: "preenchimentoVisivel",
                    css: "visibleFill",
                },
                {
                    folEs: "preenchimentoVisível",
                    css: "visibleFill",
                },
                {
                    folEs: "tracoVisivel",
                    css: "visibleStroke",
                },
                {
                    folEs: "traçoVisível",
                    css: "visibleStroke",
                },
                {
                    folEs: "pintado",
                    css: "painted",
                },
                {
                    folEs: "preencher",
                    css: "fill",
                },
                {
                    folEs: "tracado",
                    css: "stroke",
                },
                {
                    folEs: "traçado",
                    css: "stroke",
                },
                {
                    folEs: "delimitarCaixa",
                    css: "bounding-box",
                },
                {
                    folEs: "tudo",
                    css: "all",
                },
            ];

            for (let index = 0; index < valoresSVG.length; index += 1) {
                const valorSeletor = new ValorQualitativo(valoresSVG[index].folEs);
                const seletor = new SeletorModificador(
                    'eventos-ponteiro',
                    [valorSeletor],
                    null
                );

                // O seletor deve aceitar o qualitativo SVG
                expect(valorSeletor.qualitativo).toEqual(valoresSVG[index].folEs);

                // Lexador
                const resultadoLexador = lexador.mapear([
                    "corpo {",
                    `eventos-ponteiro: ${valoresSVG[index].folEs};`,
                    "}"
                ]);

                // O Lexador deve montar um objeto de comprimento 7 sem retornar nenhum erro
                expect(resultadoLexador.simbolos).toHaveLength(7);
                expect(resultadoLexador.erros).toHaveLength(0);

                // O valor recebido deve ser mapeado como IDENTIFICADOR
                expect(resultadoLexador.simbolos).toEqual(
                    expect.arrayContaining([
                        expect.objectContaining({ tipo: tiposDeSimbolos.IDENTIFICADOR }),
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

                // Serializador
                const resultadoSerializador = serializador.resolver(resultadoAvaliadorSintatico);

                // O Serializador deve traduzir os valores SVG de acordo
                expect(resultadoSerializador).toContain(seletor['propriedadeCss']);
                expect(resultadoSerializador).toContain(valoresSVG[index].css);
            }
        });

        it('Caso de sucesso - Valor numérico precedido de ponto', () => {
            const valoresComPonto = [
                '.2rem',
                '.5em',
                '.1px',
            ];

            for (let index = 0; index < valoresComPonto.length; index += 1) {
                // Lexador
                const resultadoLexador = lexador.mapear([
                    "lmht {",
                    `espacamento-letras: ${valoresComPonto[index]};`,
                    "}"
                ]);

                // O Lexador deve montar um objeto de comprimento 9 sem retornar nenhum erro
                expect(resultadoLexador.simbolos).toHaveLength(9);
                expect(resultadoLexador.erros).toHaveLength(0);

                // Avaliador Sintático
                const resultadoAvaliadorSintatico = avaliadorSintatico.analisar(resultadoLexador.simbolos);

                // O Avaliador deve montar um objeto com os devidos nomes FolEs e CSS
                expect(resultadoAvaliadorSintatico.length).toBeGreaterThanOrEqual(1);
                const primeiroResultado = resultadoAvaliadorSintatico[0];
                expect(primeiroResultado).toBeInstanceOf(BlocoDeclaracao);
                const primeiroResultadoTipado = primeiroResultado as BlocoDeclaracao;
                expect(primeiroResultadoTipado.modificadores.length).toBeGreaterThanOrEqual(1);

                // Tradutor
                const resultadoSerializacao = serializador.resolver(resultadoAvaliadorSintatico);
                expect(resultadoSerializacao).toContain(valoresComPonto[index]);
            }
        });

        it('Caso de sucesso - Valores do tipo fonte de texto', () => {
            const valoresFonte = [];
            Object.values(fontes).forEach((fonte) => valoresFonte.push(fonte));

            for (let index = 0; index < valoresFonte.length; index += 1) {
                // Lexador
                const resultadoLexador = lexador.mapear([
                    "lmht {",
                    `fonte-texto: "${valoresFonte[index]}";`,
                    "}"
                ]);

                expect(resultadoLexador.simbolos).toHaveLength(7);

                // Avaliador Sintático
                const resultadoAvaliadorSintatico = avaliadorSintatico.analisar(resultadoLexador.simbolos);

                // O Avaliador deve montar um objeto com os devidos nomes FolEs e CSS
                expect(resultadoAvaliadorSintatico.length).toBeGreaterThanOrEqual(1);
                const primeiroResultado = resultadoAvaliadorSintatico[0];
                expect(primeiroResultado).toBeInstanceOf(BlocoDeclaracao);
                const primeiroResultadoTipado = primeiroResultado as BlocoDeclaracao;
                expect(primeiroResultadoTipado.modificadores.length).toBeGreaterThanOrEqual(1);
                expect(primeiroResultadoTipado.modificadores[0].valores.length).toBeGreaterThan(0);
                const valor = primeiroResultadoTipado.modificadores[0].valores[0] as ValorTexto;
                expect(valor.literalTexto).toContain(valoresFonte[index]);

                // Tradutor
                const resultadoTradutor = serializador.resolver(resultadoAvaliadorSintatico);
                expect(resultadoTradutor).toContain('font-family');
                expect(resultadoTradutor).toContain(valoresFonte[index]);
            }
        });

        it('Caso de sucesso - Valor fonte de texto com 2º parâmetro de grafia', () => {
            const valoresGrafia = [
                "serif",
                "sans-serif",
                "monospace",
                "cursive",
                "fantasy",
                "system-ui",
                "ui-serif",
                "ui-sans-serif",
                "ui-monospace",
                "ui-rounded",
                "math",
                "emoji",
                "fangsong",
            ];

            for (let index = 0; index < valoresGrafia.length; index += 1) {
                // Lexador
                const resultadoLexador = lexador.mapear([
                    "lmht {",
                    `fonte-texto: "Arial", ${valoresGrafia[index]};`,
                    "}"
                ]);

                expect(resultadoLexador.simbolos).toHaveLength(9);

                // Avaliador Sintático
                const resultadoAvaliadorSintatico = avaliadorSintatico.analisar(resultadoLexador.simbolos);

                // O Avaliador deve montar um objeto com os devidos nomes FolEs e CSS
                expect(resultadoAvaliadorSintatico.length).toBeGreaterThanOrEqual(1);

                const primeiroResultado = resultadoAvaliadorSintatico[0];
                expect(primeiroResultado).toBeInstanceOf(BlocoDeclaracao);

                const primeiroResultadoTipado = primeiroResultado as BlocoDeclaracao;
                expect(primeiroResultadoTipado.modificadores.length).toBeGreaterThanOrEqual(1);

                const valorTipado = primeiroResultadoTipado.modificadores[0].valores[2] as ValorQualitativo;
                expect(valorTipado.qualitativo).toContain(valoresGrafia[index]);

                // Tradutor
                const resultadoTradutor = serializador.resolver(resultadoAvaliadorSintatico);
                expect(resultadoTradutor).toContain('font-family');
                expect(resultadoTradutor).toContain(valoresGrafia[index]);
            }
        });

        it('Caso de sucesso - Valor fonte de texto com 2º parâmetro de grafia em português', () => {
            const valoresGrafia = [
                {
                    css: "serif",
                    foles: "serifa",
                },
                {
                    css: "sans-serif",
                    foles: "sem-serifa",
                },
                {
                    css: "monospace",
                    foles: "monoespaço",
                },
                {
                    css: "monospace",
                    foles: "monoespaco",
                },
                {
                    css: "cursive",
                    foles: "cursiva",
                },
                {
                    css: "fantasy",
                    foles: "fantasia",
                },
                {
                    css: "system-ui",
                    foles: "sistema-iu",
                },
                {
                    css: "ui-serif",
                    foles: "iu-serifa",
                },
                {
                    css: "ui-sans-serif",
                    foles: "iu-sem-serifa",
                },
                {
                    css: "ui-monospace",
                    foles: "iu-monoespaço",
                },
                {
                    css: "ui-monospace",
                    foles: "iu-monoespaco",
                },
                {
                    css: "ui-rounded",
                    foles: "iu-arredondada",
                },
                {
                    css: "math",
                    foles: "matematica",
                },
                {
                    css: "math",
                    foles: "matemática",
                },
                {
                    css: "emoji",
                    foles: "emoji",
                },
                {
                    css: "fangsong",
                    foles: "serifa-chinesa",
                },
            ];

            for (let index = 0; index < Object.keys(valoresGrafia).length; index += 1) {
                // Lexador
                const resultadoLexador = lexador.mapear([
                    "lmht {",
                    `fonte-texto: "Arial", ${valoresGrafia[index].foles};`,
                    "}"
                ]);

                expect(resultadoLexador.simbolos).toHaveLength(9);

                // Avaliador Sintático
                const resultadoAvaliadorSintatico = avaliadorSintatico.analisar(resultadoLexador.simbolos);

                // O Avaliador deve montar um objeto com os devidos nomes FolEs e CSS
                expect(resultadoAvaliadorSintatico.length).toBeGreaterThanOrEqual(1);

                const primeiroResultado = resultadoAvaliadorSintatico[0];
                expect(primeiroResultado).toBeInstanceOf(BlocoDeclaracao);

                const primeiroResultadoTipado = primeiroResultado as BlocoDeclaracao;
                expect(primeiroResultadoTipado.modificadores.length).toBeGreaterThanOrEqual(1);

                const valorTipado = primeiroResultadoTipado.modificadores[0].valores[2] as ValorQualitativo;
                expect(valorTipado.qualitativo).toContain(valoresGrafia[index].foles);

                // Tradutor
                const resultadoTradutor = serializador.resolver(resultadoAvaliadorSintatico);
                expect(resultadoTradutor).toContain('font-family');
                expect(resultadoTradutor).toContain(valoresGrafia[index].css);
            }
        });

        it('Caso de falha - Atribuição de valor fonte inválido', () => {
            // Lexador
            const resultadoLexador = lexador.mapear([
                "lmht {",
                `fonte-texto: reservada;`,
                "}"
            ]);

            expect(resultadoLexador.simbolos).toHaveLength(7);

            // Avaliador Sintático
            expect(() => {
                avaliadorSintatico.analisar(resultadoLexador.simbolos);
            }).toThrow("Modificador ou variável 'fonte-texto' com valor 'reservada' inválido");

        });

        it('Caso de sucesso - Valores do tipo feature-tag-value', () => {
            const valoresTagValue = [
                '"c2sc", "hist"',
                '"c2sc"',
            ];

            for (let index = 0; index < valoresTagValue.length; index += 1) {
                // Lexador
                const resultadoLexador = lexador.mapear([
                    "lmht {",
                    `recursos-fonte: ${valoresTagValue[index]};`,
                    "}"
                ]);

                if (index === 0) {
                    expect(resultadoLexador.simbolos).toHaveLength(9);
                } else {
                    expect(resultadoLexador.simbolos).toHaveLength(7);
                }

                // Avaliador Sintático
                const resultadoAvaliadorSintatico = avaliadorSintatico.analisar(resultadoLexador.simbolos);

                // O Avaliador deve montar um objeto com os devidos nomes FolEs e CSS
                expect(resultadoAvaliadorSintatico.length).toBeGreaterThanOrEqual(1);
                const primeiroResultado = resultadoAvaliadorSintatico[0];
                expect(primeiroResultado).toBeInstanceOf(BlocoDeclaracao);
                const primeiroResultadoTipado = primeiroResultado as BlocoDeclaracao;
                expect(primeiroResultadoTipado.modificadores.length).toBeGreaterThanOrEqual(1);
                expect(primeiroResultadoTipado.modificadores[0].valores.length).toBeGreaterThan(0);

                // Tradutor
                const resultadoTradutor = serializador.resolver(resultadoAvaliadorSintatico);
                expect(resultadoTradutor).toContain(valoresTagValue[index]);
            }
        });

        it('Caso de falha - Valor feature-tag-value com mais de 4 caracteres', () => {
            // Lexador
            const resultadoLexador = lexador.mapear([
                "lmht {",
                `recursos-fonte: "cs2af";`,
                "}"
            ]);

            // Avaliador Sintático
            expect(() => {
                avaliadorSintatico.analisar(resultadoLexador.simbolos);
            }).toThrow(`Modificador ou variável 'recursos-fonte' com valor "cs2af" inválido`);
        });

        it('Caso de sucesso - Seletores que recebem valores personalizados (custom-indent) válidos', () => {
            for (let index = 0; index < ValoresPersonalizados.length; index += 1) {
                // Lexador
                const resultadoLexador = lexador.mapear([
                    "lmht {",
                    `${ValoresPersonalizados[index]['modificador']}: ${ValoresPersonalizados[index]['valor']};`,
                    "}"
                ]);

                // O Lexador não deve encontrar erros
                expect(resultadoLexador.erros).toHaveLength(0);

                // O valor recebido deve conter o símbolo IDENTIFICADOR
                expect(resultadoLexador.simbolos).toEqual(
                    expect.arrayContaining([
                        expect.objectContaining({ tipo: tiposDeSimbolos.IDENTIFICADOR }),
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
                expect(primeiroResultadoTipado.modificadores[0].nomeFoles).toContain(
                    ValoresPersonalizados[index]['modificador']
                );
                expect(primeiroResultadoTipado.modificadores[0].propriedadeCss).toStrictEqual(
                    ValoresPersonalizados[index]['css']
                );

                // Tradutor
                const resultadoTradutor = serializador.resolver(resultadoAvaliadorSintatico);

                // O Tradutor deve serializar de acordo
                expect(resultadoTradutor).toContain('html');
                expect(resultadoTradutor).toContain(ValoresPersonalizados[index]['css']);
                expect(resultadoTradutor).toContain(ValoresPersonalizados[index]['traducao']);
            }
        });

        it('Caso de sucesso - Seletores que recebem múltiplos valores, sendo um personalizado', () => {
            for (let index = 0; index < ValoresPersonalizadosMultiplos.length; index += 1) {
                // Lexador
                const resultadoLexador = lexador.mapear([
                    "lmht {",
                    `${ValoresPersonalizadosMultiplos[index]['modificador']}: ${ValoresPersonalizadosMultiplos[index]['valor']};`,
                    "}"
                ]);

                // O Lexador não deve encontrar erros
                expect(resultadoLexador.erros).toHaveLength(0);

                // O valor recebido deve conter o símbolo IDENTIFICADOR
                expect(resultadoLexador.simbolos).toEqual(
                    expect.arrayContaining([
                        expect.objectContaining({ tipo: tiposDeSimbolos.IDENTIFICADOR }),
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
                expect(primeiroResultadoTipado.modificadores[0].nomeFoles).toContain(
                    ValoresPersonalizadosMultiplos[index]['modificador']
                );
                expect(primeiroResultadoTipado.modificadores[0].propriedadeCss).toStrictEqual(
                    ValoresPersonalizadosMultiplos[index]['css']
                );

                // Tradutor
                const resultadoTradutor = serializador.resolver(resultadoAvaliadorSintatico);

                // O Tradutor deve serializar de acordo
                expect(resultadoTradutor).toContain('html');
                expect(resultadoTradutor).toContain(ValoresPersonalizadosMultiplos[index]['css']);
                expect(resultadoTradutor).toContain(ValoresPersonalizadosMultiplos[index]['traducao']);
            }
        });

        it('Caso de falha - Atribuição de valor personalizado inválido', () => {
            const valoresInvalidos = [
                '--valorPersonalizado',
                '1111',
                'herdar nenhum',
                'inicial nenhum',
                'reverter nenhum',
                'reverter-camada nenhum',
                'desarmar nenhum',
            ]

            for (let index = 0; index < valoresInvalidos.length; index += 1) {
                // Lexador
                const resultadoLexador = lexador.mapear([
                    "lmht {",
                    `nome-animação: ${valoresInvalidos[index]};`,
                    "}"
                ]);

                if (valoresInvalidos[index].includes(" ")) {
                    const separarValores = valoresInvalidos[index].split(" ");
                    valoresInvalidos[index] = separarValores[0];
                }

                // Avaliador Sintático
                expect(() => {
                    avaliadorSintatico.analisar(resultadoLexador.simbolos);
                }).toThrow();
            }
        });
    });
});
