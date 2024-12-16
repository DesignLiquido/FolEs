import { Importador } from "../../fontes/importador";
import { AvaliadorSintaticoInterface, ImportadorInterface, LexadorInterface } from "../../fontes/interfaces";
import { MetodoBorrar, MetodoBrilho, TraducaoValoresMetodos } from "../listas/metodos-css";
import tiposDeSimbolos from "../../fontes/tipos-de-simbolos/css";
import { LexadorReverso } from "../../fontes/lexador/lexador-reverso";
import { AvaliadorSintaticoReverso } from "../../fontes/avaliador-sintatico/avaliador-sintatico-reverso";
import { SerializadorReverso } from "../../fontes/serializadores";

describe('Testando MÉTODOS no processo de tradução reversa', () => {
    describe('Testes Unitários', () => {
        let lexador: LexadorInterface;
        let importador: ImportadorInterface;
        let avaliador: AvaliadorSintaticoInterface;
        let tradutor: SerializadorReverso;

        beforeEach(() => {
            lexador = new LexadorReverso();
            importador = new Importador(lexador);
            avaliador = new AvaliadorSintaticoReverso(importador);
            tradutor = new SerializadorReverso();
        });

        it('Atribuindo Método "blur()"', () => {
            for (let index = 0; index < MetodoBorrar.length; index += 1) {

                const valoresAceitos = ['100px', '100%', '0.1', '0', '1', '1.75'];

                for (let valIndex = 0; valIndex < valoresAceitos.length; valIndex += 1) {
                    // Lexador
                    const resultadoLexador = lexador.mapear([
                        "div {",
                            `${MetodoBorrar[index]}: blur(${valoresAceitos[valIndex]});`,
                        "}"
                    ]);
                    
                    // O Lexador não deve encontrar erros
                    expect(resultadoLexador.erros).toHaveLength(0);

                    // O valor recebido deve ser mapeado como METODO
                    expect(resultadoLexador.simbolos).toEqual(
                        expect.arrayContaining([
                            expect.objectContaining({ tipo: tiposDeSimbolos.METODO }),
                        ])
                    );

                    // O Lexador deve montar um objeto de comprimento 11 caso haja quantificador e 10 caso não haja
                    if (valIndex === 0 || valIndex === 1) {
                        expect(resultadoLexador.simbolos).toHaveLength(11);
                        expect(resultadoLexador.simbolos).toEqual(
                            expect.arrayContaining([
                                expect.objectContaining({ tipo: tiposDeSimbolos.NUMERO }),
                                expect.objectContaining({ tipo: tiposDeSimbolos.QUANTIFICADOR }),
                            ])
                        );
                    } else {
                        expect(resultadoLexador.simbolos).toHaveLength(10);
                        expect(resultadoLexador.simbolos).toEqual(
                            expect.arrayContaining([
                                expect.objectContaining({ tipo: tiposDeSimbolos.NUMERO }),
                            ])
                        );
                    }

                    // Avaliador Sintático
                    const resultadoAvaliadorSintatico = avaliador.analisar(resultadoLexador.simbolos);

                    // O Avaliador deve montar um objeto com os devidos nomes FolEs e CSS
                    expect(resultadoAvaliadorSintatico[0].modificadores[0].propriedadeCss).toStrictEqual(
                        MetodoBorrar[index]
                    );

                    // Tradutor
                    const resultadoTradutor = tradutor.serializar(resultadoAvaliadorSintatico);

                    // O Tradutor deve serializar de acordo e traduzir blur para borrar
                    expect(resultadoTradutor).toContain(TraducaoValoresMetodos[MetodoBorrar[index]]);
                    expect(resultadoTradutor).toContain(`borrar(${valoresAceitos[valIndex]});`);
                }
            }
        });

        it('Atribuindo Método "brightness()"', () => {
            for (let index = 0; index < MetodoBrilho.length; index += 1) {
      
              const valoresAceitos = ['100px', '100%', '0.1', '0', '1', '1.75'];
      
              for (let valIndex = 0; valIndex < valoresAceitos.length; valIndex += 1) {
                // Lexador
                const resultadoLexador = lexador.mapear([
                  "div {",
                        `${MetodoBrilho[index]}: brightness(${valoresAceitos[valIndex]});`,
                  "}"
                ]);
      
                // O Lexador não deve encontrar erros
                expect(resultadoLexador.erros).toHaveLength(0);
      
                // O valor recebido deve ser mapeado como METODO
                expect(resultadoLexador.simbolos).toEqual(
                  expect.arrayContaining([
                    expect.objectContaining({ tipo: tiposDeSimbolos.METODO }),
                  ])
                );
      
                // O Lexador deve montar um objeto de comprimento 11 caso haja quantificador e 10 caso não haja
                if (valIndex === 0 || valIndex === 1) {
                  expect(resultadoLexador.simbolos).toHaveLength(11);
                  expect(resultadoLexador.simbolos).toEqual(
                    expect.arrayContaining([
                      expect.objectContaining({ tipo: tiposDeSimbolos.NUMERO }),
                      expect.objectContaining({ tipo: tiposDeSimbolos.QUANTIFICADOR }),
                    ])
                  );
                } else {
                  expect(resultadoLexador.simbolos).toHaveLength(10);
                  expect(resultadoLexador.simbolos).toEqual(
                    expect.arrayContaining([
                      expect.objectContaining({ tipo: tiposDeSimbolos.NUMERO }),
                    ])
                  );
                }
      
                // Avaliador Sintático
                const resultadoAvaliadorSintatico = avaliador.analisar(resultadoLexador.simbolos);
      
                // O Avaliador deve montar um objeto com os devidos nomes FolEs e CSS
                expect(resultadoAvaliadorSintatico[0].modificadores[0].propriedadeCss).toStrictEqual(
                    MetodoBrilho[index]
                );
      
                // Tradutor
                const resultadoTradutor = tradutor.serializar(resultadoAvaliadorSintatico);
      
                // O Tradutor deve serializar de acordo e traduzir brightness para brilho
                expect(resultadoTradutor).toContain(TraducaoValoresMetodos[MetodoBrilho[index]]);
                expect(resultadoTradutor).toContain(`brilho(${valoresAceitos[valIndex]});`);
              }
            }
          });
    });
});