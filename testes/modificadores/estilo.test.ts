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
            for (let index = 0; index < Object.keys(Estilo).length; index += 1) {
                const seletor = new SeletorModificador(Estilo[index], 'pontilhado', null);

                // LEXADOR
                const resultadoLexador = lexador.mapear([
                    "corpo {",
                    `${Estilo[index]}: ${seletor['valor']};`,
                    "}"
                ]);

                expect(resultadoLexador).toBeTruthy();
                expect(resultadoLexador.simbolos).toHaveLength(7);
                expect(resultadoLexador.simbolos).toEqual(
                    expect.arrayContaining([
                        expect.objectContaining({ tipo: tiposDeSimbolos.ESTRUTURA }),
                        expect.objectContaining({ tipo: tiposDeSimbolos.CHAVE_ESQUERDA }),
                        expect.objectContaining({ tipo: tiposDeSimbolos.IDENTIFICADOR }),
                        expect.objectContaining({ tipo: tiposDeSimbolos.DOIS_PONTOS }),
                        // expect.objectContaining({ tipo: tiposDeSimbolos.ATRIBUTO_ESTILO }),
                        expect.objectContaining({ tipo: tiposDeSimbolos.PONTO_E_VIRGULA }),
                        expect.objectContaining({ tipo: tiposDeSimbolos.CHAVE_DIREITA }),
                    ])
                );

                expect(resultadoLexador.simbolos).not.toEqual(
                    expect.arrayContaining([
                        expect.objectContaining({ tipo: tiposDeSimbolos.QUANTIFICADOR }),
                        expect.objectContaining({ tipo: tiposDeSimbolos.NUMERO }),
                    ])
                );


                // AVALIADOR SINTÁTICO
                const resultadoAvaliadorSintatico = avaliador.analisar(resultadoLexador.simbolos);

                expect(resultadoAvaliadorSintatico).toBeTruthy();
                expect(resultadoAvaliadorSintatico).toHaveLength(1);
                expect(resultadoAvaliadorSintatico[0].seletor).toBe('corpo');
                expect(resultadoAvaliadorSintatico[0].modificadores[0].nomeFoles).toStrictEqual(
                    seletor['nomeFoles']
                );
                expect(resultadoAvaliadorSintatico[0].modificadores[0].propriedadeCss).toStrictEqual(
                    seletor['propriedadeCss']
                );
                expect(resultadoAvaliadorSintatico[0].modificadores[0].valor).toStrictEqual(
                    'pontilhado'
                );


                // TRADUTOR
                const resultadoTradutor = tradutor.traduzir(resultadoAvaliadorSintatico);

                expect(resultadoTradutor).toBeTruthy();
                expect(resultadoTradutor).toContain("body");
                expect(resultadoTradutor).toContain(seletor['propriedadeCss']);
                expect(resultadoTradutor).toContain('dotted;');
            }
        });

        it('Casos de Falha - Lexador, Avaliador e Tradutor', () => {
            for (let index = 0; index < Object.keys(Estilo).length; index += 1) {

                // LEXADOR - estilo não informado
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

                // AVALIADOR SINTÁTICO - Erro esperado como retorno
                expect(() => {
                    avaliador.analisar(novoLexador.simbolos);
                }).toThrow(`O seletor '${seletorIncorreto}' não foi encontrado.`);


                // TRADUTOR - Não deve traduzir devido ao erro do Avaliador Sintático
                expect(() => {
                    tradutor.traduzir(avaliador.analisar(novoLexador.simbolos));
                }).toHaveLength(0);
            }
        });
    });
});
