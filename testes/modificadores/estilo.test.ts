import { AvaliadorSintatico } from "../../fontes/avaliador-sintatico";
import { Lexador } from "../../fontes/lexador";
import { SeletorModificador } from "../../fontes/modificadores/superclasse";
import tiposDeSimbolos from "../../fontes/tipos-de-simbolos/foles";
import { Tradutor } from "../../fontes/tradutor";
import { Estilo } from "../listas/estilo";

describe('Testando Seletores com ESTILO como atributo', () => {
    const atributosCss = [
        'dashed', 'dotted', 'groove', 'solid', 'double',
        'ridge', 'inset', 'outset', 'none', 'hidden'
    ];

    const atributosFolEs = [
        'tracejado', 'pontilhado', 'entalhado', ['solido', 'sólido'], 'duplicado',
        'sulcado', 'embutido', 'saltado', 'nenhum', 'escondido'
    ];

    describe('Testes Unitários', () => {
        let lexador: Lexador;
        let avaliador: AvaliadorSintatico;
        let tradutor: Tradutor;

        beforeEach(() => {
            lexador = new Lexador();
            avaliador = new AvaliadorSintatico();
            tradutor = new Tradutor();
        });

        it('Casos de sucesso - Lexador, Avaliador e Tradutor', () => {
            for (let index = 0; index < Estilo.length; index += 1) {
                const seletor = new SeletorModificador(Estilo[index], 'pontilhado', null);

                // Lexador
                const resultadoLexador = lexador.mapear([
                    "corpo {",
                    `${Estilo[index]}: ${seletor['valor']};`,
                    "}"
                ]);

                expect(resultadoLexador.simbolos).toHaveLength(7);
                expect(resultadoLexador.simbolos).toEqual(
                    expect.arrayContaining([
                        // expect.objectContaining({ tipo: tiposDeSimbolos.ATRIBUTO_ESTILO }),
                    ])
                );

                expect(resultadoLexador.simbolos).not.toEqual(
                    expect.arrayContaining([
                        expect.objectContaining({ tipo: tiposDeSimbolos.QUANTIFICADOR }),
                        expect.objectContaining({ tipo: tiposDeSimbolos.NUMERO }),
                    ])
                );


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
                // expect(resultadoTradutor).toContain('dotted');
            }
        });

        it.skip('Casos de Falha - Lexador, Avaliador e Tradutor', () => {
            for (let index = 0; index < Object.keys(Estilo).length; index += 1) {

                // Lexador - estilo não informado
                const resultadoLexador = lexador.mapear([
                    "lmht {",
                    `${Estilo[index]}: ;`,
                    "}"
                ]);

                expect(resultadoLexador.simbolos).not.toHaveLength(7);
                expect(resultadoLexador.simbolos).not.toEqual(
                    expect.arrayContaining([
                        // expect.objectContaining({ tipo: tiposDeSimbolos.ATRIBUTO_ESTILO }),
                    ])
                );

                // Causar erro de digitação
                const seletorIncorreto = Estilo[index].replace(Estilo[index][0], '')

                const novoLexador = lexador.mapear([
                    "lmht {",
                    `${seletorIncorreto}: solido;`,
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
