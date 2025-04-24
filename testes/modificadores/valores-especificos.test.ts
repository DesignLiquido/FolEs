import { AvaliadorSintatico } from "../../fontes/avaliador-sintatico";
import { Importador } from "../../fontes/importador";
import { AvaliadorSintaticoInterface, ImportadorInterface, LexadorInterface } from "../../fontes/interfaces";
import { Lexador } from "../../fontes/lexador";
import { SeletorModificador } from "../../fontes/modificadores/superclasse";
import tiposDeSimbolos from "../../fontes/tipos-de-simbolos/foles";
import { Serializador } from "../../fontes/serializadores";
import { BlocoDeclaracao } from "../../fontes/declaracoes";
import { fontes } from "../../fontes/modificadores/atributos/fontes";

describe('Testando Seletores com VALORES ESPECÍFICOS', () => {
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
                const seletor = new SeletorModificador('eventos-ponteiro', valoresSVG[index].folEs, null);

                // A classe do modificador deve aceitar o valor SVG
                expect(seletor['valor']).toEqual(valoresSVG[index].folEs);

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
                const resultadoSerializador = tradutor.serializar(resultadoAvaliadorSintatico);

                // O Serializador deve traduzir os valores SVG de acordo
                expect(resultadoSerializador).toContain(seletor['propriedadeCss']);
                expect(resultadoSerializador).toContain(valoresSVG[index].css);
            }
        });

        it('Caso de sucesso - Valor numérico precedido de ponto', () => {
            const valoresComPonto = [
                '.2rem',
                '.5em',
                '.10px',
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
                const resultadoTradutor = tradutor.serializar(resultadoAvaliadorSintatico);
                expect(resultadoTradutor).toContain(valoresComPonto[index]);
            }
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
                expect(primeiroResultadoTipado.modificadores[0].valor).toContain(valoresTagValue[index]);

                // Tradutor
                const resultadoTradutor = tradutor.serializar(resultadoAvaliadorSintatico);
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
            }).toThrowError(`Propriedade 'recursos-fonte' com valor "cs2af" inválido`);
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
                expect(primeiroResultadoTipado.modificadores[0].valor).toContain(valoresFonte[index]);

                // Tradutor
                const resultadoTradutor = tradutor.serializar(resultadoAvaliadorSintatico);
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
                expect(primeiroResultadoTipado.modificadores[0].valor).toContain(valoresGrafia[index]);

                // Tradutor
                const resultadoTradutor = tradutor.serializar(resultadoAvaliadorSintatico);
                expect(resultadoTradutor).toContain('font-family');
                expect(resultadoTradutor).toContain(valoresGrafia[index]);
            }
        });
    });
});
