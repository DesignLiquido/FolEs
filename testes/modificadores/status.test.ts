import { AvaliadorSintatico } from "../../fontes/avaliador-sintatico";
import { Lexador } from "../../fontes/lexador";
import { SeletorModificador } from "../../fontes/modificadores/superclasse";
import tiposDeSimbolos from "../../fontes/tipos-de-simbolos/foles";
import { Tradutor } from "../../fontes/tradutor";
import { StatusAuto, StatusNenhum, StatusNormal } from "../listas/status";

describe('Testando Seletores com STATUS como atributo', () => {
    const atributosCss = [
        'auto', 'none', 'always', 'avoid',
        'all', 'both', 'left', 'right'
    ];

    const atributosFolEs = [
        ['automatico', 'automático'], 'nenhum', 'sempre', 'evitar',
        'tudo', 'ambos', 'esquerda', 'direita'
    ]

    describe('Testes Unitários', () => {
        let lexador: Lexador;
        let avaliador: AvaliadorSintatico;
        let tradutor: Tradutor;

        beforeEach(() => {
            lexador = new Lexador();
            avaliador = new AvaliadorSintatico();
            tradutor = new Tradutor();
        });

        it('Casos de sucesso - Valor AUTO', () => {
            for (let index = 0; index < StatusAuto.length; index += 1) {
                const seletor = new SeletorModificador(StatusAuto[index], 'auto', null);

                // Lexador
                const resultadoLexador = lexador.mapear([
                    "corpo {",
                    `${StatusAuto[index]}: ${seletor['valor']};`,
                    "}"
                ]);

                // O modificador deve aceitar 'auto' como valor
                expect(seletor['valor']).toEqual('auto');

                // O Lexador deve montar um objeto de comprimento 7 sem retornar nenhum erro
                expect(resultadoLexador.simbolos).toHaveLength(7);
                expect(resultadoLexador.erros).toHaveLength(0);

                // Avaliador Sintático
                // const resultadoAvaliadorSintatico = avaliador.analisar(resultadoLexador.simbolos);

                // expect(resultadoAvaliadorSintatico[0].modificadores[0].nomeFoles).toStrictEqual(
                //     seletor['nomeFoles']
                // );
                // expect(resultadoAvaliadorSintatico[0].modificadores[0].propriedadeCss).toStrictEqual(
                //     seletor['propriedadeCss']
                // );

                // // Tradutor
                // const resultadoTradutor = tradutor.traduzir(resultadoAvaliadorSintatico);

                // expect(resultadoTradutor).toContain(seletor['propriedadeCss']);
                // expect(resultadoTradutor).toContain('always');
            }
        });

        it('Casos de sucesso - Valor NENHUM', () => {
            for (let index = 0; index < StatusNenhum.length; index += 1) {
                const seletor = new SeletorModificador(StatusNenhum[index], 'nenhum', null);

                // Lexador
                const resultadoLexador = lexador.mapear([
                    "corpo {",
                    `${StatusNenhum[index]}: ${seletor['valor']};`,
                    "}"
                ]);

                // O modificador deve aceitar 'nenhum' como valor
                expect(seletor['valor']).toEqual('nenhum');

                // O Lexador deve montar um objeto de comprimento 7 sem retornar nenhum erro
                expect(resultadoLexador.simbolos).toHaveLength(7);
                expect(resultadoLexador.erros).toHaveLength(0);
            }
        });

        it('Casos de sucesso - Valor NORMAL', () => {
            for (let index = 0; index < StatusNormal.length; index += 1) {
                const seletor = new SeletorModificador(StatusNormal[index], 'normal', null);

                // Lexador
                const resultadoLexador = lexador.mapear([
                    "corpo {",
                    `${StatusNormal[index]}: ${seletor['valor']};`,
                    "}"
                ]);

                // O modificador deve aceitar 'normal' como valor
                expect(seletor['valor']).toEqual('normal');

                // O Lexador deve montar um objeto de comprimento 7 sem retornar nenhum erro
                expect(resultadoLexador.simbolos).toHaveLength(7);
                expect(resultadoLexador.erros).toHaveLength(0);
            }
        });

        it.skip('Casos de Falha - Lexador, Avaliador e Tradutor', () => {
            for (let index = 0; index < StatusAuto.length; index += 1) {

                // Lexador - Status não informado
                const resultadoLexador = lexador.mapear([
                    "lmht {",
                    `${StatusAuto[index]}: ;`,
                    "}"
                ]);

                expect(resultadoLexador.simbolos).not.toHaveLength(7);
                expect(resultadoLexador.erros).toHaveLength(1);
                expect(resultadoLexador.simbolos).not.toEqual(
                    expect.arrayContaining([
                        // expect.objectContaining({ tipo: tiposDeSimbolos.ATRIBUTO_STATUS }),
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
                }).toThrow(`O seletor '${seletorIncorreto}' não foi encontrado.`);


                // Tradutor - Não deve traduzir devido ao erro do Avaliador Sintático
                expect(() => {
                    tradutor.traduzir(avaliador.analisar(novoLexador.simbolos));
                }).toHaveLength(0);
            }
        });
    });
});
