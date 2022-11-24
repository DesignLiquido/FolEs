import { AvaliadorSintatico } from "../../fontes/avaliador-sintatico";
import { Lexador } from "../../fontes/lexador";
import { SeletorModificador } from "../../fontes/modificadores/superclasse";
import tiposDeSimbolos from "../../fontes/tipos-de-simbolos/foles";
import { Tradutor } from "../../fontes/tradutor";
import { ValorQuantificador } from "../listas/valor-quantificador";

describe('Testando Seletores que recebem valor e quantificador', () => {
    describe('Teste Geral', () => {
        let lexador: Lexador;
        let avaliador: AvaliadorSintatico;
        let tradutor: Tradutor;

        beforeEach(() => {
            lexador = new Lexador();
            avaliador = new AvaliadorSintatico();
            tradutor = new Tradutor();
        });

        it('Casos de sucesso - Lexador, Avaliador e Tradutor', () => {
            for (let index = 0; index < Object.keys(ValorQuantificador).length; index += 1) {
                const seletor = new SeletorModificador(ValorQuantificador[index], '12', 'px');

                // LEXADOR
                const resultadoLexador = lexador.mapear([
                    "lmht {",
                    `${ValorQuantificador[index]}: ${seletor['valor']}${seletor['quantificador']};`,
                    "}"
                ]);

                expect(resultadoLexador).toBeTruthy();
                expect(resultadoLexador.simbolos).toHaveLength(8);
                expect(resultadoLexador.simbolos).toEqual(
                    expect.arrayContaining([
                        expect.objectContaining({ tipo: tiposDeSimbolos.ESTRUTURA }),
                        expect.objectContaining({ tipo: tiposDeSimbolos.CHAVE_ESQUERDA }),
                        expect.objectContaining({ tipo: tiposDeSimbolos.IDENTIFICADOR }),
                        expect.objectContaining({ tipo: tiposDeSimbolos.DOIS_PONTOS }),
                        expect.objectContaining({ tipo: tiposDeSimbolos.NUMERO }),
                        expect.objectContaining({ tipo: tiposDeSimbolos.QUANTIFICADOR }),
                        expect.objectContaining({ tipo: tiposDeSimbolos.PONTO_E_VIRGULA }),
                        expect.objectContaining({ tipo: tiposDeSimbolos.CHAVE_DIREITA }),
                    ])
                );

                // AVALIADOR SINTÁTICO
                const resultadoAvaliadorSintatico = avaliador.analisar(resultadoLexador.simbolos);

                expect(resultadoAvaliadorSintatico).toBeTruthy();
                expect(resultadoAvaliadorSintatico).toHaveLength(1);
                expect(resultadoAvaliadorSintatico[0].seletor).toBe('lmht');
                expect(resultadoAvaliadorSintatico[0].modificadores[0].nomeFoles).toStrictEqual(
                    seletor['nomeFoles']
                );
                expect(resultadoAvaliadorSintatico[0].modificadores[0].propriedadeCss)
                    .toStrictEqual(seletor['propriedadeCss']
                );

                // TRADUTOR
                const resultadoTradutor = tradutor.traduzir(resultadoAvaliadorSintatico);

                expect(resultadoTradutor).toBeTruthy();
                expect(resultadoTradutor).toContain("html");
                expect(resultadoTradutor).toContain(seletor['propriedadeCss']);
                expect(resultadoTradutor).toContain("12px");
            }
        });

        it('Casos de Falha - Lexador, Avaliador e Tradutor', () => {
            for (let index = 0; index < Object.keys(ValorQuantificador).length; index += 1) {
                
                // LEXADOR - valor e quantificador não informados
                const resultadoLexador = lexador.mapear([
                    "lmht {",
                    `${ValorQuantificador[index]}: ;`,
                    "}"
                ]);

                expect(resultadoLexador.simbolos).not.toHaveLength(8);
                expect(resultadoLexador.simbolos).not.toEqual(
                    expect.arrayContaining([
                        expect.objectContaining({ tipo: tiposDeSimbolos.NUMERO }),
                        expect.objectContaining({ tipo: tiposDeSimbolos.QUANTIFICADOR }),
                    ])
                );

                // Causar erro de digitação
                const seletorIncorreto = ValorQuantificador[index].replace(ValorQuantificador[index][0], '')

                const novoLexador = lexador.mapear([
                    "lmht {",
                    `${seletorIncorreto}: 12px;`,
                    "}"
                ]);

                // AVALIADOR SINTÁTICO
                expect(() => {
                    avaliador.analisar(novoLexador.simbolos);
                }).toThrow(`O seletor '${seletorIncorreto}' não foi encontrado.`);


                // TRADUTOR
                expect(() => {
                    tradutor.traduzir(avaliador.analisar(novoLexador.simbolos));
                }).toHaveLength(0);
            }
        });
    });
});
