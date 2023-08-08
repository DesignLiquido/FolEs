import { AvaliadorSintatico } from "../../fontes/avaliador-sintatico";
import { Importador } from "../../fontes/importador";
import { AvaliadorSintaticoInterface, ImportadorInterface, LexadorInterface } from "../../fontes/interfaces";
import { Lexador } from "../../fontes/lexador";
import { SeletorModificador } from "../../fontes/modificadores/superclasse";
import tiposDeSimbolos from "../../fontes/tipos-de-simbolos/foles";
import { Tradutor } from "../../fontes/tradutor";
import { Valor } from "../../fontes/valores/valor";
import { ValorGlobal } from "../listas/valor-global";

describe('Testando Seletores com VALORES GLOBAIS', () => {
    describe('Testes Unitários', () => {
        let lexador: LexadorInterface;
        let importador: ImportadorInterface;
        let avaliadorSintatico: AvaliadorSintaticoInterface;
        let tradutor: Tradutor;

        beforeEach(() => {
            lexador = new Lexador();
            importador = new Importador(lexador);
            avaliadorSintatico = new AvaliadorSintatico(importador);
            tradutor = new Tradutor();
        });

        it('Casos de sucesso - Lexador, Avaliador e Tradutor', () => {
            for (let index = 0; index < Object.keys(ValorGlobal).length; index += 1) {
                const seletor = new SeletorModificador(ValorGlobal[index], 'herdar', null);

                // Lexador
                const resultadoLexador = lexador.mapear([
                    "corpo {",
                    `${ValorGlobal[index]}: ${seletor['valor']};`,
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

                expect(resultadoAvaliadorSintatico[0].modificadores[0].nomeFoles).toStrictEqual(
                    seletor['nomeFoles']
                );
                expect(resultadoAvaliadorSintatico[0].modificadores[0].propriedadeCss).toStrictEqual(
                    seletor['propriedadeCss']
                );


                // Tradutor
                const resultadoTradutor = tradutor.traduzir(resultadoAvaliadorSintatico);

                expect(resultadoTradutor).toContain(seletor['propriedadeCss']);
                expect(resultadoTradutor).toContain('inherit');
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


                // Tradutor - Não deve traduzir devido ao erro do Avaliador Sintático
                expect(() => {
                    tradutor.traduzir(avaliadorSintatico.analisar(resultadoLexador.simbolos));
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


                // Tradutor - Não deve traduzir devido ao erro do Avaliador Sintático
                expect(() => {
                    tradutor.traduzir(avaliadorSintatico.analisar(novoLexador.simbolos));
                }).toHaveLength(0);
            }
        });
    });
});
