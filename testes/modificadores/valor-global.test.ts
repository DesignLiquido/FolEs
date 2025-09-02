import { AvaliadorSintatico } from "../../fontes/avaliador-sintatico";
import { Importador } from "../../fontes/importador";
import { AvaliadorSintaticoInterface, ImportadorInterface, LexadorInterface } from "../../fontes/interfaces";
import { Lexador } from "../../fontes/lexador";
import { SeletorModificador } from "../../fontes/modificadores/superclasse";
import tiposDeSimbolos from "../../fontes/tipos-de-simbolos/foles";
import { Resolvedor } from "../../fontes/resolvedores";
import { ValorGlobal, ValorGlobalInvalido } from "../listas/valor-global";
import { BlocoDeclaracao, DeclaracaoVariavel } from "../../fontes/declaracoes";
import { valoresGlobais } from "../../fontes/modificadores/atributos/globais";
import { ValorQualitativo } from "../../fontes/valores";

describe('Testando Seletores com VALORES GLOBAIS', () => {
    describe('Testes Unitários', () => {
        let lexador: LexadorInterface;
        let importador: ImportadorInterface;
        let avaliadorSintatico: AvaliadorSintaticoInterface;
        let resolvedor: Resolvedor;

        beforeEach(() => {
            lexador = new Lexador();
            importador = new Importador(lexador);
            avaliadorSintatico = new AvaliadorSintatico(importador);
            resolvedor = new Resolvedor();
        });

        it('Casos de sucesso - Lexador, Avaliador e Resolvedor', () => {
            for (let index = 0; index < Object.keys(ValorGlobal).length; index += 1) {
                const seletor = new SeletorModificador(
                    ValorGlobal[index],
                    [new ValorQualitativo('herdar')],
                    null
                );

                // Lexador
                const resultadoLexador = lexador.mapear([
                    "corpo {",
                    `${ValorGlobal[index]}: herdar;`,
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

                // Resolvedor
                const resultadoResolvedor = resolvedor.resolver(resultadoAvaliadorSintatico);

                expect(resultadoResolvedor).toContain(seletor['propriedadeCss']);
                expect(resultadoResolvedor).toContain('inherit');
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


                // Resolvedor - Não deve traduzir devido ao erro do Avaliador Sintático
                expect(() => {
                    resolvedor.resolver(avaliadorSintatico.analisar(resultadoLexador.simbolos));
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


                // Resolvedor - Não deve traduzir devido ao erro do Avaliador Sintático
                expect(() => {
                    resolvedor.resolver(avaliadorSintatico.analisar(novoLexador.simbolos));
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
                }).toThrow(`Modificador ou variável '${ValorGlobalInvalido[index]}' com valor '${valorInvalido}' inválido.`);
            }
        });

        it('Caso de Sucesso - Posição atribuída por meio de variável', () => {
            const globaisFolEs = Object.keys(valoresGlobais);
            const globaisCss = Object.values(valoresGlobais);

            for (let index = 0; index < globaisFolEs.length; index += 1) {
                // Lexador
                const resultadoLexador = lexador.mapear([
                    `$valor-padrao: ${globaisFolEs[index]};`,
                    "lmht {",
                    'conteúdo: $valor-padrao;',
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
                const resultadoAvaliadorSintatico = avaliadorSintatico.analisar(resultadoLexador.simbolos);

                // O Avaliador deve montar um objeto com os devidos nomes FolEs e CSS
                expect(resultadoAvaliadorSintatico.length).toBeGreaterThanOrEqual(1);

                // O primeiro item do mapeamento deve ser a declaração da variável
                const primeiroResultado = resultadoAvaliadorSintatico[0];
                expect(primeiroResultado).toBeInstanceOf(DeclaracaoVariavel);

                // O segundo item do mapeamento deve conter as devidas traduções
                const segundoResultado = resultadoAvaliadorSintatico[1];
                const segundoResultadoTipado = segundoResultado as BlocoDeclaracao;
                expect(segundoResultadoTipado.modificadores.length).toBeGreaterThanOrEqual(1);
                expect(segundoResultadoTipado.modificadores[0].nomeFoles).toContain('conteúdo');
                expect(segundoResultadoTipado.modificadores[0].propriedadeCss).toStrictEqual('content');

                // Resolvedor
                const resultadoResolvedor = resolvedor.resolver(resultadoAvaliadorSintatico);
                expect(resultadoResolvedor).toContain(globaisCss[index]);
                expect(resultadoResolvedor).toContain('content');
            }
        });
    });
});
