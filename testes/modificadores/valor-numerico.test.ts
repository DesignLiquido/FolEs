import { AvaliadorSintatico } from "../../fontes/avaliador-sintatico";
import { Importador } from "../../fontes/importador";
import { AvaliadorSintaticoInterface, ImportadorInterface, LexadorInterface } from "../../fontes/interfaces";
import { Lexador } from "../../fontes/lexador";
import { SeletorModificador } from "../../fontes/modificadores/superclasse";
import { Resolvedor } from "../../fontes/resolvedores";
import { ModificadoresDeValorNumerico, ModificadoresDeValorNumericoApenas, ModificadoresDeValorNumericoComQuantificador, ModificadoresDeValorNumericoZeroUm } from "../listas/valores-numericos";
import { BlocoDeclaracao, DeclaracaoVariavel } from "../../fontes/declaracoes";
import { ValorNumerico } from "../../fontes/valores";
import tiposDeSimbolos from "../../fontes/tipos-de-simbolos/foles";

describe('Testando Seletores que recebem VALOR NUMÉRICO sem quantificador', () => {
    let lexador: LexadorInterface;
    let importador: ImportadorInterface;
    let avaliador: AvaliadorSintaticoInterface;
    let resolvedor: Resolvedor;

    beforeEach(() => {
        lexador = new Lexador();
        importador = new Importador(lexador);
        avaliador = new AvaliadorSintatico(importador);
        resolvedor = new Resolvedor();
    });

    it('Casos de sucesso - Lexador, Avaliador e Resolvedor', () => {
        for (let index = 0; index < ModificadoresDeValorNumerico.length; index += 1) {
            const seletor = new SeletorModificador(
                ModificadoresDeValorNumerico[index],
                [new ValorNumerico(ModificadoresDeValorNumerico[index], 1)]
            );

            const primeiroValor = (seletor as any).valores[0] as ValorNumerico;

            // Lexador
            const resultadoLexador = lexador.mapear([
                "corpo {",
                `${ModificadoresDeValorNumerico[index]}: ${primeiroValor.literalNumerico};`,
                "}"
            ]);

            expect(resultadoLexador.simbolos).toHaveLength(7);
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
                seletor['nomeFoles']
            );
            expect(primeiroResultadoTipado.modificadores[0].propriedadeCss).toStrictEqual(
                seletor['propriedadeCss']
            );

            // Resolvedor
            const resultadoResolvedor = resolvedor.resolver(resultadoAvaliadorSintatico);

            expect(resultadoResolvedor).toContain(seletor['propriedadeCss']);
        }
    });

    it('Casos de Falha - Lexador, Avaliador e Resolvedor', () => {
        for (let index = 0; index < Object.keys(ModificadoresDeValorNumericoApenas).length; index += 1) {

            // Lexador - valor numérico não informado
            const resultadoLexador = lexador.mapear([
                "lmht {",
                `${ModificadoresDeValorNumericoApenas[index]}: ;`,
                "}"
            ]);

            expect(resultadoLexador.simbolos).not.toEqual(
                expect.arrayContaining([
                    expect.objectContaining({ tipo: tiposDeSimbolos.NUMERO }),
                ])
            );

            // Tentando passar um quantificador para os modificadores (o que não deve ser permitido)
            const novoLexador = lexador.mapear([
                "lmht {",
                `${ModificadoresDeValorNumericoApenas[index]}: 15px;`,
                "}"
            ]);

            // Avaliador Sintático - Erro esperado como retorno
            const regex = /[~çáéíóúÁÉÍÓÚ]/;

            if (!regex.test(ModificadoresDeValorNumericoApenas[index]) && regex.test(ModificadoresDeValorNumericoApenas[index + 1])) {
                expect(() => {
                    avaliador.analisar(novoLexador.simbolos);
                }).toThrow(`Modificador ou variável '${ModificadoresDeValorNumericoApenas[index + 1]}' aceita somente valores numéricos. O quantificador 'px' é inválido para esta operação.`);
            } else {
                expect(() => {
                    avaliador.analisar(novoLexador.simbolos);
                }).toThrow(`Modificador ou variável '${ModificadoresDeValorNumericoApenas[index]}' aceita somente valores numéricos. O quantificador 'px' é inválido para esta operação.`);
            }

            // Resolvedor - Não deve traduzir devido ao erro do Avaliador Sintático
            expect(() => {
                resolvedor.resolver(avaliador.analisar(novoLexador.simbolos));
            }).toHaveLength(0);
        }
    });

    it('Casos de falha - Modificadores que só aceitam zero ou um como valor numérico', () => {
        for (let index = 0; index < ModificadoresDeValorNumericoZeroUm.length; index += 1) {
            // Lexador
            const resultadoLexador = lexador.mapear([
                "corpo {",
                `${ModificadoresDeValorNumericoZeroUm[index]}: 2;`,
                "}"
            ]);

            expect(() => {
                avaliador.analisar(resultadoLexador.simbolos);
            }).toThrow(`Modificador ou variável '${ModificadoresDeValorNumericoZeroUm[index]}' com valor 2 inválido.`);
        }
    });

    it('Caso de Sucesso - Valor numérico atribuído por meio de variável', () => {
        for (let index = 0; index < ModificadoresDeValorNumerico.length; index += 1) {
            const seletor = new SeletorModificador(
                ModificadoresDeValorNumerico[index],
                [new ValorNumerico(ModificadoresDeValorNumerico[index], 1)]
            );

            // Lexador
            const resultadoLexador = lexador.mapear([
                `$numero-padrao: 1;`,
                "lmht {",
                `${ModificadoresDeValorNumerico[index]}: $numero-padrao;`,
                "}"
            ]);

            // O Lexador deve montar o objeto de acordo, sem retornar erros.
            expect(resultadoLexador.simbolos).toHaveLength(13);
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

            // Resolvedor
            const resultadoResolvedor = resolvedor.resolver(resultadoAvaliadorSintatico);
            expect(resultadoResolvedor).toContain(seletor['propriedadeCss']);
            expect(resultadoResolvedor).toContain('1');
        }
    });
});

describe('Testando Seletores que recebem VALOR NUMÉRICO com ou sem quantificador', () => {
    let lexador: LexadorInterface;
    let importador: ImportadorInterface;
    let avaliador: AvaliadorSintaticoInterface;
    let resolvedor: Resolvedor;

    beforeEach(() => {
        lexador = new Lexador();
        importador = new Importador(lexador);
        avaliador = new AvaliadorSintatico(importador);
        resolvedor = new Resolvedor();
    });

    it('Casos de Sucesso - valor numérico apenas - Lexador, Avaliador e Resolvedor', () => {
        for (let index = 0; index < ModificadoresDeValorNumericoComQuantificador.length; index += 1) {
            const seletor = new SeletorModificador(
                ModificadoresDeValorNumericoComQuantificador[index],
                [new ValorNumerico(ModificadoresDeValorNumericoComQuantificador[index], 1)]
            );

            const primeiroValor = (seletor as any).valores[0] as ValorNumerico;

            // Lexador
            const resultadoLexador = lexador.mapear([
                "corpo {",
                `${ModificadoresDeValorNumericoComQuantificador[index]}: ${primeiroValor.literalNumerico};`,
                "}"
            ]);

            expect(resultadoLexador.simbolos).toHaveLength(7);
            expect(resultadoLexador.simbolos).toEqual(
                expect.arrayContaining([
                    expect.objectContaining({ tipo: tiposDeSimbolos.NUMERO }),
                ])
            );

            // Avaliador Sintático                
            const resultadoAvaliadorSintatico = avaliador.analisar(resultadoLexador.simbolos);
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

            // Resolvedor
            const resultadoResolvedor = resolvedor.resolver(resultadoAvaliadorSintatico);

            expect(resultadoResolvedor).toContain(seletor['propriedadeCss']);
        }
    });

    it('Casos de Sucesso - valor numérico com quantificador - Lexador, Avaliador e Resolvedor', () => {
        for (let index = 0; index < ModificadoresDeValorNumericoComQuantificador.length; index += 1) {
            const excecoes = ['fatiar-imagem-borda', 'opacidade'];

            let seletor;
            if (excecoes.includes(ModificadoresDeValorNumericoComQuantificador[index])) {
                seletor = new SeletorModificador(
                    ModificadoresDeValorNumericoComQuantificador[index],
                    [new ValorNumerico(ModificadoresDeValorNumericoComQuantificador[index], 15, '%')]
                );
            } else {
                seletor = new SeletorModificador(
                    ModificadoresDeValorNumericoComQuantificador[index],
                    [new ValorNumerico(ModificadoresDeValorNumericoComQuantificador[index], 15, 'px')]
                );
            }

            const primeiroValor = seletor.valores[0] as ValorNumerico;

            // Lexador
            const resultadoLexador = lexador.mapear([
                "corpo {",
                `${ModificadoresDeValorNumericoComQuantificador[index]}: ${primeiroValor.literalNumerico}${primeiroValor.quantificador};`,
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

            // Resolvedor
            const resultadoResolvedor = resolvedor.resolver(resultadoAvaliadorSintatico);

            expect(resultadoResolvedor).toContain(seletor['propriedadeCss']);
        }
    });

    it('Casos de Falha - valor numérico com quantificador - Lexador, Avaliador e Resolvedor', () => {
        for (let index = 0; index < ModificadoresDeValorNumericoComQuantificador.length; index += 1) {
            // Lexador
            const resultadoLexador = lexador.mapear([
                "lmht {",
                `${ModificadoresDeValorNumericoComQuantificador[index]}: ;`,
                "}"
            ]);

            expect(resultadoLexador.simbolos).not.toEqual(
                expect.arrayContaining([
                    expect.objectContaining({ tipo: tiposDeSimbolos.NUMERO }),
                    expect.objectContaining({ tipo: tiposDeSimbolos.QUANTIFICADOR }),
                ])
            );

            // Causar erro de digitação
            const seletorIncorreto = ModificadoresDeValorNumericoComQuantificador[index].replace(ModificadoresDeValorNumericoComQuantificador[index][0], '')

            const novoLexador = lexador.mapear([
                "lmht {",
                `${seletorIncorreto}: 1.5;`,
                "}"
            ]);

            // Avaliador Sintático - Erro esperado como retorno
            expect(() => {
                avaliador.analisar(novoLexador.simbolos);
            }).toThrow(`O seletor '${seletorIncorreto}' não existe.`);

            // // Resolvedor - Não deve traduzir devido ao erro do Avaliador Sintático
            expect(() => {
                resolvedor.resolver(avaliador.analisar(novoLexador.simbolos));
            }).toHaveLength(0);
        }
    });

    it('Casos de Sucesso - valor numérico fracionário - Lexador, Avaliador e Resolvedor', () => {
        for (let index = 0; index < ModificadoresDeValorNumericoComQuantificador.length; index += 1) {
            const seletor = new SeletorModificador(
                ModificadoresDeValorNumericoComQuantificador[index],
                [new ValorNumerico(ModificadoresDeValorNumericoComQuantificador[index], 1)]
            );

            // Lexador
            const resultadoLexador = lexador.mapear([
                "corpo {",
                `${ModificadoresDeValorNumericoComQuantificador[index]}: 0.5;`,
                "}"
            ]);

            expect(resultadoLexador.simbolos).toHaveLength(7);
            expect(resultadoLexador.simbolos).toEqual(
                expect.arrayContaining([
                    expect.objectContaining({ tipo: tiposDeSimbolos.NUMERO }),
                ])
            );

            // Avaliador Sintático                
            const resultadoAvaliadorSintatico = avaliador.analisar(resultadoLexador.simbolos);
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

            // Resolvedor
            const resultadoResolvedor = resolvedor.resolver(resultadoAvaliadorSintatico);

            expect(resultadoResolvedor).toContain(seletor['propriedadeCss']);
            expect(resultadoResolvedor).toContain('body');
            expect(resultadoResolvedor).toContain('0.5');
        }
    });
});
