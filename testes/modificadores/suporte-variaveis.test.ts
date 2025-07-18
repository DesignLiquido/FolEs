import { AvaliadorSintatico } from "../../fontes/avaliador-sintatico";
import { Importador } from "../../fontes/importador";
import { AvaliadorSintaticoInterface, ImportadorInterface, LexadorInterface } from "../../fontes/interfaces";
import { Lexador } from "../../fontes/lexador";
import tiposDeSimbolos from "../../fontes/tipos-de-simbolos/foles";
import { Serializador } from "../../fontes/serializadores";
import { BlocoDeclaracao, DeclaracaoVariavel } from "../../fontes/declaracoes";

describe('Testando Suporte a VARIÁVEIS', () => {
    describe('Testes Unitários', () => {
        let lexador: LexadorInterface;
        let importador: ImportadorInterface;
        let avaliador: AvaliadorSintaticoInterface;
        let serializador: Serializador;

        beforeEach(() => {
            lexador = new Lexador();
            importador = new Importador(lexador);
            avaliador = new AvaliadorSintatico(importador);
            serializador = new Serializador();
        });

        it('Caso de sucesso - Atribuição de variável com valor QUALITATIVO', () => {
            // Lexador
            const resultadoLexador = lexador.mapear([
                "$cor-secundaria: branco;",
                "corpo {",
                "cor-barra-rolagem: $cor-secundaria;",
                "}"
            ]);

            // O Lexador deve montar um objeto de comprimento 13 sem retornar nenhum erro
            expect(resultadoLexador.simbolos).toHaveLength(13);
            expect(resultadoLexador.erros).toHaveLength(0);

            // O Lexador deve reconhecer a variável declarada
            expect(resultadoLexador.simbolos).toEqual(
                expect.arrayContaining([
                    expect.objectContaining({ tipo: tiposDeSimbolos.VARIAVEL }),
                ])
            );

            // O Lexador não deve encontrar qualquer número ou quantificador na operação
            expect(resultadoLexador.simbolos).not.toEqual(
                expect.arrayContaining([
                    expect.objectContaining({ tipo: tiposDeSimbolos.QUANTIFICADOR }),
                    expect.objectContaining({ tipo: tiposDeSimbolos.NUMERO }),
                ])
            );

            // O Lexador deve classificar o valor recebido como QUALITATIVO
            expect(resultadoLexador.simbolos).toEqual(
                expect.arrayContaining([
                    expect.objectContaining({ tipo: tiposDeSimbolos.QUALITATIVO }),
                ])
            );

            // Avaliador Sintático
            const resultadoAvaliadorSintatico = avaliador.analisar(resultadoLexador.simbolos);
            expect(resultadoAvaliadorSintatico.length).toBeGreaterThanOrEqual(1);

            // O primeiro item do Avaliador deve ser a declaração de variável
            const primeiroResultado = resultadoAvaliadorSintatico[0];
            expect(primeiroResultado).toBeInstanceOf(DeclaracaoVariavel);

            const primeiroResultadoTipado = primeiroResultado as DeclaracaoVariavel;
            expect(primeiroResultadoTipado.nome).toBe('cor-secundaria');

            // O segundo item do Avaliador deve ser o bloco de declaração com os modificadores
            const segundoResultado = resultadoAvaliadorSintatico[1];
            expect(segundoResultado).toBeInstanceOf(BlocoDeclaracao);

            const segundoResultadoTipado = segundoResultado as BlocoDeclaracao;
            expect(segundoResultadoTipado.modificadores.length).toBeGreaterThanOrEqual(1);

            // Serializador deve traduzir de acordo o valor qualitativo
            const resultadoSerializador = serializador.serializar(resultadoAvaliadorSintatico);
            expect(resultadoSerializador).toContain('body {');
            expect(resultadoSerializador).toContain('scrollbar-color: white;');
        });

        it('Caso de sucesso - Atribuição de variável com valor NUMÉRICO sem quantificador', () => {
            // Lexador
            const resultadoLexador = lexador.mapear([
                "$valor-indice: 0;",
                "corpo {",
                "indice-z: $valor-indice;",
                "}"
            ]);

            // O Lexador deve montar um objeto de comprimento 13 sem retornar nenhum erro
            expect(resultadoLexador.simbolos).toHaveLength(13);
            expect(resultadoLexador.erros).toHaveLength(0);

            // O Lexador deve reconhecer a variável declarada
            expect(resultadoLexador.simbolos).toEqual(
                expect.arrayContaining([
                    expect.objectContaining({ tipo: tiposDeSimbolos.VARIAVEL }),
                ])
            );

            // O Lexador não deve encontrar qualitativos na operação
            expect(resultadoLexador.simbolos).not.toEqual(
                expect.arrayContaining([
                    expect.objectContaining({ tipo: tiposDeSimbolos.QUALITATIVO }),
                ])
            );

            // O Lexador deve classificar o valor recebido como NUMERO
            expect(resultadoLexador.simbolos).toEqual(
                expect.arrayContaining([
                    expect.objectContaining({ tipo: tiposDeSimbolos.NUMERO }),
                ])
            );

            // Avaliador Sintático
            const resultadoAvaliadorSintatico = avaliador.analisar(resultadoLexador.simbolos);
            expect(resultadoAvaliadorSintatico.length).toBeGreaterThanOrEqual(1);

            // O primeiro item do Avaliador deve ser a declaração de variável
            const primeiroResultado = resultadoAvaliadorSintatico[0];
            expect(primeiroResultado).toBeInstanceOf(DeclaracaoVariavel);

            const primeiroResultadoTipado = primeiroResultado as DeclaracaoVariavel;
            expect(primeiroResultadoTipado.nome).toBe('valor-indice');

            // O segundo item do Avaliador deve ser o bloco de declaração com os modificadores
            const segundoResultado = resultadoAvaliadorSintatico[1];
            expect(segundoResultado).toBeInstanceOf(BlocoDeclaracao);

            const segundoResultadoTipado = segundoResultado as BlocoDeclaracao;
            expect(segundoResultadoTipado.modificadores.length).toBeGreaterThanOrEqual(1);

            // Serializador deve traduzir de acordo
            const resultadoSerializador = serializador.serializar(resultadoAvaliadorSintatico);
            expect(resultadoSerializador).toContain('body {');
            expect(resultadoSerializador).toContain('z-index: 0;');
        });

        it('Caso de sucesso - Atribuição de variável com valor numérico COM QUANTIFICADOR', () => {
            // Lexador
            const resultadoLexador = lexador.mapear([
                "$valor-recuo: 12px;",
                "corpo {",
                "recuo-direito: $valor-recuo;",
                "}"
            ]);

            // O Lexador deve montar um objeto de comprimento 14 sem retornar nenhum erro
            expect(resultadoLexador.simbolos).toHaveLength(14);
            expect(resultadoLexador.erros).toHaveLength(0);

            // O Lexador deve reconhecer a variável declarada
            expect(resultadoLexador.simbolos).toEqual(
                expect.arrayContaining([
                    expect.objectContaining({ tipo: tiposDeSimbolos.VARIAVEL }),
                ])
            );

            // O Lexador não deve encontrar qualitativos na operação
            expect(resultadoLexador.simbolos).not.toEqual(
                expect.arrayContaining([
                    expect.objectContaining({ tipo: tiposDeSimbolos.QUALITATIVO }),
                ])
            );

            // O Lexador deve classificar o valor recebido como NUMERO e QUANTIFICADOR
            expect(resultadoLexador.simbolos).toEqual(
                expect.arrayContaining([
                    expect.objectContaining({ tipo: tiposDeSimbolos.NUMERO }),
                    expect.objectContaining({ tipo: tiposDeSimbolos.QUANTIFICADOR }),
                ])
            );

            // Avaliador Sintático
            const resultadoAvaliadorSintatico = avaliador.analisar(resultadoLexador.simbolos);
            expect(resultadoAvaliadorSintatico.length).toBeGreaterThanOrEqual(1);

            // O primeiro item do Avaliador deve ser a declaração de variável
            const primeiroResultado = resultadoAvaliadorSintatico[0];
            expect(primeiroResultado).toBeInstanceOf(DeclaracaoVariavel);

            const primeiroResultadoTipado = primeiroResultado as DeclaracaoVariavel;
            expect(primeiroResultadoTipado.nome).toBe('valor-recuo');

            // O segundo item do Avaliador deve ser o bloco de declaração com os modificadores
            const segundoResultado = resultadoAvaliadorSintatico[1];
            expect(segundoResultado).toBeInstanceOf(BlocoDeclaracao);

            const segundoResultadoTipado = segundoResultado as BlocoDeclaracao;
            expect(segundoResultadoTipado.modificadores.length).toBeGreaterThanOrEqual(1);

            // Serializador deve traduzir de acordo
            const resultadoSerializador = serializador.serializar(resultadoAvaliadorSintatico);
            expect(resultadoSerializador).toContain('body {');
            expect(resultadoSerializador).toContain('padding-right: 12px;');
        });

        it('Caso de sucesso - Atribuição de variável com MÉTODOS DE COR', () => {
            const valoresMetodo = [
                'rgb(31, 120, 50)',
                'rgba(31, 120, 50)',
                'hsl(50, 80%, 40%)',
                'hsla(50, 80%, 40%)',
            ]

            for (let index = 0; index < valoresMetodo.length; index += 1) {
                // Lexador
                const resultadoLexador = lexador.mapear([
                    `$cor-padrao: ${valoresMetodo[index]};`,
                    "corpo {",
                        "sombra-caixa: $cor-padrao;",
                    "}"
                ]);

                // O Lexador deve montar um objeto de comprimento 14 ou 20 sem retornar nenhum erro
                if (index <= 1) {
                    expect(resultadoLexador.simbolos).toHaveLength(20);
                } else {
                    expect(resultadoLexador.simbolos).toHaveLength(22);
                }
                expect(resultadoLexador.erros).toHaveLength(0);

                // O Lexador deve reconhecer a variável declarada
                expect(resultadoLexador.simbolos).toEqual(
                    expect.arrayContaining([
                        expect.objectContaining({ tipo: tiposDeSimbolos.VARIAVEL }),
                    ])
                );

                // O Lexador não deve encontrar qualitativos, números ou quantificadores na operação
                expect(resultadoLexador.simbolos).not.toEqual(
                    expect.arrayContaining([
                        expect.objectContaining({ tipo: tiposDeSimbolos.QUALITATIVO }),
                        expect.objectContaining({ tipo: tiposDeSimbolos.NUMERO }),
                        expect.objectContaining({ tipo: tiposDeSimbolos.QUANTIFICADOR }),
                    ])
                );

                // O Lexador deve classificar o valor recebido como METODO
                expect(resultadoLexador.simbolos).toEqual(
                    expect.arrayContaining([
                        expect.objectContaining({ tipo: tiposDeSimbolos.METODO }),
                    ])
                );

                // Avaliador Sintático
                const resultadoAvaliadorSintatico = avaliador.analisar(resultadoLexador.simbolos);
                expect(resultadoAvaliadorSintatico.length).toBeGreaterThanOrEqual(1);

                // O primeiro item do Avaliador deve ser a declaração de variável
                const primeiroResultado = resultadoAvaliadorSintatico[0];
                expect(primeiroResultado).toBeInstanceOf(DeclaracaoVariavel);

                const primeiroResultadoTipado = primeiroResultado as DeclaracaoVariavel;
                expect(primeiroResultadoTipado.nome).toBe('cor-padrao');

                // O segundo item do Avaliador deve ser o bloco de declaração com os modificadores
                const segundoResultado = resultadoAvaliadorSintatico[1];
                expect(segundoResultado).toBeInstanceOf(BlocoDeclaracao);

                const segundoResultadoTipado = segundoResultado as BlocoDeclaracao;
                expect(segundoResultadoTipado.modificadores.length).toBeGreaterThanOrEqual(1);

                // Serializador deve traduzir de acordo
                const resultadoSerializador = serializador.serializar(resultadoAvaliadorSintatico);
                expect(resultadoSerializador).toContain('body {');
                expect(resultadoSerializador).toContain(`box-shadow: ${valoresMetodo[index]};`);
            }
        });

        it('Caso de sucesso - Atribuição de variável com MÉTODOS GERAIS', () => {
            const valoresMetodo = [
                {
                    foles: 'borrar(4px)',
                    css: 'blur(4px)'
                },
                {
                    foles: 'brilho(50%)',
                    css: 'brightness(50%)'
                },
                {
                    foles: 'contraste(50%)',
                    css: 'contrast(50%)'
                },
                {
                    foles: 'escala-cinza(30%)',
                    css: 'grayscale(30%)'
                },
                {
                    foles: 'rotacionar-matiz(90deg)',
                    css: 'hue-rotate(90deg)'
                },
                {
                    foles: 'inverter(50%)',
                    css: 'invert(50%)'
                },
                {
                    foles: 'opacar(50%)',
                    css: 'opacity(50%)'
                },
                {
                    foles: 'saturar(10%)',
                    css: 'saturate(10%)'
                },
                {
                    foles: 'sepia(60%)',
                    css: 'sepia(60%)'
                },
            ]

            for (let index = 0; index < valoresMetodo.length; index += 1) {
                // Lexador
                const resultadoLexador = lexador.mapear([
                    `$metodo-padrao: ${valoresMetodo[index].foles};`,
                    "corpo {",
                        "filtro-fundo: $metodo-padrao;",
                    "}"
                ]);

                // O Lexador deve montar um objeto de acordo, sem retornar nenhum erro
                expect(resultadoLexador.erros).toHaveLength(0);

                // O Lexador deve reconhecer a variável declarada, o método, o número e o quantificador
                expect(resultadoLexador.simbolos).toEqual(
                    expect.arrayContaining([
                        expect.objectContaining({ tipo: tiposDeSimbolos.VARIAVEL }),
                        expect.objectContaining({ tipo: tiposDeSimbolos.METODO }),
                        expect.objectContaining({ tipo: tiposDeSimbolos.NUMERO }),
                        expect.objectContaining({ tipo: tiposDeSimbolos.QUANTIFICADOR }),
                    ])
                );

                // Avaliador Sintático
                const resultadoAvaliadorSintatico = avaliador.analisar(resultadoLexador.simbolos);
                expect(resultadoAvaliadorSintatico.length).toBeGreaterThanOrEqual(1);

                // O primeiro item do Avaliador deve ser a declaração de variável
                const primeiroResultado = resultadoAvaliadorSintatico[0];
                expect(primeiroResultado).toBeInstanceOf(DeclaracaoVariavel);

                const primeiroResultadoTipado = primeiroResultado as DeclaracaoVariavel;
                expect(primeiroResultadoTipado.nome).toBe('metodo-padrao');

                // O segundo item do Avaliador deve ser o bloco de declaração com os modificadores
                const segundoResultado = resultadoAvaliadorSintatico[1];
                expect(segundoResultado).toBeInstanceOf(BlocoDeclaracao);

                const segundoResultadoTipado = segundoResultado as BlocoDeclaracao;
                expect(segundoResultadoTipado.modificadores.length).toBeGreaterThanOrEqual(1);

                // Serializador deve traduzir de acordo
                const resultadoSerializador = serializador.serializar(resultadoAvaliadorSintatico);
                expect(resultadoSerializador).toContain('body {');
                expect(resultadoSerializador).toContain(`backdrop-filter: ${valoresMetodo[index].css};`);
            }
        });

        // TODO: Depreciado. Deve disparar erro de avaliação sintática.
        it.skip('Caso de falha - Atribuição de variável com valor inválido', () => {
            // Lexador
            const resultadoLexador = lexador.mapear([
                "$cor-secundaria: branc;",
                "corpo {",
                    "cor-barra-rolagem: $cor-secundaria;",
                "}"
            ]);

            // Avaliador Sintático
            const resultadoAvaliadorSintatico = avaliador.analisar(resultadoLexador.simbolos);

            // Serializador deve retornar erro de valor inválido antes de traduzir
            expect(() => {
                serializador.serializar(resultadoAvaliadorSintatico);
            }).toThrow(`Modificador ou variável 'cor-barra-rolagem' com valor branc inválido`);
        });

        it('Caso de falha - Declaração de variável após atribuição (fora de ordem)', () => {
            // Lexador
            const resultadoLexador = lexador.mapear([
                "corpo {",
                "cor-barra-rolagem: $cor-secundaria;",
                "}",
                "$cor-secundaria: branco;",
            ]);

            // Avaliador Sintático
            const resultadoAvaliadorSintatico = avaliador.analisar(resultadoLexador.simbolos);

            // Serializador deve retornar erro de valor inválido antes de traduzir
            expect(() => {
                serializador.serializar(resultadoAvaliadorSintatico);
            }).toThrow(`A variável 'cor-secundaria' deve ser declarada antes da atribuição de valor.`);;
        });

    });
});
