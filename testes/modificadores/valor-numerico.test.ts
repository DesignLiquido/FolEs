import { AvaliadorSintatico } from "../../fontes/avaliador-sintatico";
import { Lexador } from "../../fontes/lexador";
import { SeletorModificador } from "../../fontes/modificadores/superclasse";
import tiposDeSimbolos from "../../fontes/tipos-de-simbolos/foles";
import { Tradutor } from "../../fontes/tradutor";
import { ValorNumerico } from "../listas/valor-numerico";

describe('Testando Seletores que recebem valor numérico', () => {
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
            for (let index = 1; index < Object.keys(ValorNumerico).length; index += 1) {
                const seletor = new SeletorModificador(ValorNumerico[index], '3', '');

                // LEXADOR
                const resultadoLexador = lexador.mapear([
                    "corpo {",
                    `${ValorNumerico[index]}: ${seletor['valor']}${seletor['quantificador']};`,
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
                        expect.objectContaining({ tipo: tiposDeSimbolos.NUMERO }),
                        expect.objectContaining({ tipo: tiposDeSimbolos.PONTO_E_VIRGULA }),
                        expect.objectContaining({ tipo: tiposDeSimbolos.CHAVE_DIREITA }),
                    ])
                );

                expect(resultadoLexador.simbolos).not.toEqual(
                    expect.arrayContaining([
                        expect.objectContaining({ tipo: tiposDeSimbolos.QUANTIFICADOR }),
                    ])
                );


                // AVALIADOR SINTÁTICO
                // const resultadoAvaliadorSintatico = avaliador.analisar(resultadoLexador.simbolos);

                // expect(resultadoAvaliadorSintatico).toBeTruthy();
                // expect(resultadoAvaliadorSintatico).toHaveLength(1);
                // expect(resultadoAvaliadorSintatico[0].seletor).toBe('corpo');
                // expect(resultadoAvaliadorSintatico[0].modificadores[0].nomeFoles).toStrictEqual(
                //     seletor['nomeFoles']
                // );
                // expect(resultadoAvaliadorSintatico[0].modificadores[0].propriedadeCss).toStrictEqual(
                //     seletor['propriedadeCss']
                // );
                // expect(resultadoAvaliadorSintatico[0].modificadores[0].valor).toStrictEqual(
                //     '3'
                // );


                // TRADUTOR
                // const resultadoTradutor = tradutor.traduzir(resultadoAvaliadorSintatico);

                // expect(resultadoTradutor).toBeTruthy();
                // expect(resultadoTradutor).toContain("body");
                // expect(resultadoTradutor).toContain(seletor['propriedadeCss']);
                // expect(resultadoTradutor).toContain("3");
            }
        });

        // it('Casos de Falha - Lexador, Avaliador e Tradutor', () => {
        //     for (let index = 1; index < Object.keys(ValorNumerico).length; index += 1) {
                
        //         // LEXADOR - valor numérico não informado
        //         const resultadoLexador = lexador.mapear([
        //             "lmht {",
        //             `${ValorNumerico[index]}: ;`,
        //             "}"
        //         ]);

        //         expect(resultadoLexador.simbolos).not.toHaveLength(7);
        //         expect(resultadoLexador.simbolos).not.toEqual(
        //             expect.arrayContaining([
        //                 expect.objectContaining({ tipo: tiposDeSimbolos.NUMERO }),
        //             ])
        //         );

        //         // Causar erro de digitação
        //         const seletorIncorreto = ValorNumerico[index].replace(ValorNumerico[index][0], '')

        //         const novoLexador = lexador.mapear([
        //             "lmht {",
        //             `${seletorIncorreto}: 1;`,
        //             "}"
        //         ]);

        //         // AVALIADOR SINTÁTICO - Erro esperado como retorno
        //         expect(() => {
        //             avaliador.analisar(novoLexador.simbolos);
        //         }).toThrow(`O seletor '${seletorIncorreto}' não foi encontrado.`);


        //         // TRADUTOR - Não deve traduzir devido ao erro do Avaliador Sintático
        //         expect(() => {
        //             tradutor.traduzir(avaliador.analisar(novoLexador.simbolos));
        //         }).toHaveLength(0);
        //     }
        // });
    });
});