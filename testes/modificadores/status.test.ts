import { AvaliadorSintatico } from "../../fontes/avaliador-sintatico";
import { Importador } from "../../fontes/importador";
import { AvaliadorSintaticoInterface, ImportadorInterface, LexadorInterface } from "../../fontes/interfaces";
import { Lexador } from "../../fontes/lexador";
import { SeletorModificador } from "../../fontes/modificadores/superclasse";
import tiposDeSimbolos from "../../fontes/tipos-de-simbolos/foles";
import { Resolvedor } from "../../fontes/resolvedores";
import { StatusAuto, StatusNenhum, StatusNormal } from "../listas/status";
import { BlocoDeclaracao, DeclaracaoVariavel } from "../../fontes/declaracoes";
import { ValorQualitativo } from "../../fontes/valores";

describe('Testando Seletores com STATUS como atributo', () => {
    describe('Testes Unitários', () => {
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

        it('Casos de sucesso - Valor válido (auto)', () => {
            for (let index = 0; index < StatusAuto.length; index += 1) {
                const seletor = new SeletorModificador(
                    StatusAuto[index],
                    [new ValorQualitativo('auto')],
                    null
                );

                // Lexador
                const resultadoLexador = lexador.mapear([
                    "corpo {",
                    `${StatusAuto[index]}: auto;`,
                    "}"
                ]);

                // O Lexador deve montar um objeto de comprimento 7 sem retornar nenhum erro
                expect(resultadoLexador.simbolos).toHaveLength(7);
                expect(resultadoLexador.erros).toHaveLength(0);

                // O valor recebido deve ser mapeado como QUALITATIVO
                expect(resultadoLexador.simbolos).toEqual(
                    expect.arrayContaining([
                        expect.objectContaining({ tipo: tiposDeSimbolos.QUALITATIVO }),
                    ])
                );

                // O Lexador não deve encontrar nenhum número ou quantificador no mapeamento
                expect(resultadoLexador.simbolos).not.toEqual(
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
                expect(primeiroResultadoTipado.modificadores[0].nomeFoles).toStrictEqual(
                    seletor['nomeFoles']
                );
                expect(primeiroResultadoTipado.modificadores[0].propriedadeCss).toStrictEqual(
                    seletor['propriedadeCss']
                );

                // // Tradutor
                const resultadoTradutor = resolvedor.resolver(resultadoAvaliadorSintatico);

                expect(resultadoTradutor).toContain(seletor['propriedadeCss']);
                expect(resultadoTradutor).toContain('auto');
            }
        });

        it('Casos de Falha - Lexador, Avaliador e Tradutor', () => {
            for (let index = 0; index < StatusAuto.length; index += 1) {

                // Lexador - Status não informado
                const resultadoLexador = lexador.mapear([
                    "lmht {",
                    `${StatusAuto[index]}: ;`,
                    "}"
                ]);

                expect(resultadoLexador.simbolos).not.toHaveLength(7);

                expect(resultadoLexador.simbolos).not.toEqual(
                    expect.arrayContaining([
                        expect.objectContaining({ tipo: tiposDeSimbolos.QUALITATIVO }),
                    ])
                );

                // Causar erro de digitação
                const seletorIncorreto = StatusAuto[index].replace(StatusAuto[index][0], '')

                const novoLexador = lexador.mapear([
                    "lmht {",
                    `${seletorIncorreto}: automatico;`,
                    "}"
                ]);

                // Avaliador Sintático - Erro esperado como retorno
                expect(() => {
                    avaliador.analisar(novoLexador.simbolos);
                }).toThrow();

                // Tradutor - Não deve traduzir devido ao erro do Avaliador Sintático
                expect(() => {
                    resolvedor.resolver(avaliador.analisar(novoLexador.simbolos));
                }).toHaveLength(0);
            }
        });

        it('Casos de sucesso - Valor válido (nenhum)', () => {
            for (let index = 0; index < StatusNenhum.length; index += 1) {
                const seletor = new SeletorModificador(
                    StatusNenhum[index],
                    [new ValorQualitativo('nenhum')],
                    null
                );

                // Lexador
                const resultadoLexador = lexador.mapear([
                    "corpo {",
                    `${StatusNenhum[index]}: nenhum;`,
                    "}"
                ]);

                // O Lexador deve montar um objeto de comprimento 7 sem retornar nenhum erro
                expect(resultadoLexador.simbolos).toHaveLength(7);
                expect(resultadoLexador.erros).toHaveLength(0);

                // O valor recebido deve ser mapeado como QUALITATIVO
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
                expect(primeiroResultadoTipado.modificadores[0].nomeFoles).toStrictEqual(
                    seletor['nomeFoles']
                );
                expect(primeiroResultadoTipado.modificadores[0].propriedadeCss).toStrictEqual(
                    seletor['propriedadeCss']
                );

                // Resolvedor
                const resultadoResolvedor = resolvedor.resolver(resultadoAvaliadorSintatico);

                expect(resultadoResolvedor).toContain(seletor['propriedadeCss']);
                expect(resultadoResolvedor).toContain('none');
            }
        });

        it('Casos de sucesso - Valor válido (normal)', () => {
            for (let index = 0; index < StatusNormal.length; index += 1) {
                const seletor = new SeletorModificador(
                    StatusNormal[index],
                    [new ValorQualitativo('normal')],
                    null
                );

                // A classe do modificador deve aceitar 'normal' como valor
                // expect(seletor['valor']).toEqual('normal');

                // Lexador
                const resultadoLexador = lexador.mapear([
                    "corpo {",
                    `${StatusNormal[index]}: normal;`,
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
                const resultadoTradutor = resolvedor.resolver(resultadoAvaliadorSintatico);
                expect(resultadoTradutor).toContain(seletor['propriedadeCss']);
                expect(resultadoTradutor).toContain('normal');
            }
        });

        it('Caso de Sucesso - Status atribuído por meio de variável', () => {
            for (let index = 0; index < StatusAuto.length; index += 1) {
                const seletor = new SeletorModificador(
                    StatusAuto[index],
                    [new ValorQualitativo('auto')],
                    null
                );
                
                // Lexador
                const resultadoLexador = lexador.mapear([
                    '$status-padrao: auto;',
                    "lmht {",
                    ` ${StatusAuto[index]}: $status-padrao;`,
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

                // Tradutor
                const resultadoTradutor = resolvedor.resolver(resultadoAvaliadorSintatico);
                expect(resultadoTradutor).toContain(seletor['propriedadeCss']);
                expect(resultadoTradutor).toContain('auto');
            }
        });
    });
});
