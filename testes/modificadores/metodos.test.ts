import { AvaliadorSintatico } from "../../fontes/avaliador-sintatico";
import { Importador } from "../../fontes/importador";
import { AvaliadorSintaticoInterface, ImportadorInterface, LexadorInterface } from "../../fontes/interfaces";
import { Lexador } from "../../fontes/lexador";
import tiposDeSimbolos from "../../fontes/tipos-de-simbolos/foles";
import { Serializador } from "../../fontes/serializadores";
import { MetodoBorrar, MetodoBrilho, MetodoCalcular, MetodoContraste, MetodoCurvaCubica, MetodoEncaixarConteudo, MetodoEscalaCinza, MetodoGradienteLinear, MetodoInverter, MetodoLimitar, MetodoLinear, MetodoMinMax, MetodoOpacar, MetodoPassos, MetodoPerspectivar, MetodoProjetarSombra, MetodoRaio, MetodoRotacionarMatiz, MetodoSaturar, MetodoSepia, MetodosInclinar, MetodosRotacionar, MetodosTranslacao, TraducaoValoresMetodos } from "../listas/metodos";

describe('Testando Seletores que recebem MÉTODOS como valor', () => {
  describe('Testes Unitários', () => {
    let lexador: LexadorInterface;
    let importador: ImportadorInterface;
    let avaliador: AvaliadorSintaticoInterface;
    let tradutor: Serializador;

    beforeEach(() => {
      lexador = new Lexador();
      importador = new Importador(lexador);
      avaliador = new AvaliadorSintatico(importador);
      tradutor = new Serializador();
    });

    it('Atribuindo Método "borrar()"', () => {
      for (let index = 0; index < MetodoBorrar.length; index += 1) {

        const valoresAceitos = ['100px', '100%', '0.1', '0', '1', '1.75'];

        for (let valIndex = 0; valIndex < valoresAceitos.length; valIndex += 1) {
          // Lexador
          const resultadoLexador = lexador.mapear([
            "lmht {",
            `${MetodoBorrar[index]}: borrar(${valoresAceitos[valIndex]});`,
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
            TraducaoValoresMetodos[MetodoBorrar[index]]
          );

          // Tradutor
          const resultadoTradutor = tradutor.serializar(resultadoAvaliadorSintatico);

          // O Tradutor deve serializar de acordo e traduzir borrar para blur
          expect(resultadoTradutor).toContain(TraducaoValoresMetodos[MetodoBorrar[index]]);
          expect(resultadoTradutor).toContain(`blur(${valoresAceitos[valIndex]});`);
        }
      }
    });

    it('Atribuindo Método "brilho()"', () => {
      for (let index = 0; index < MetodoBrilho.length; index += 1) {

        const valoresAceitos = ['100px', '100%', '0.1', '0', '1', '1.75'];

        for (let valIndex = 0; valIndex < valoresAceitos.length; valIndex += 1) {
          // Lexador
          const resultadoLexador = lexador.mapear([
            "lmht {",
            `${MetodoBrilho[index]}: brilho(${valoresAceitos[valIndex]});`,
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
            TraducaoValoresMetodos[MetodoBrilho[index]]
          );

          // Tradutor
          const resultadoTradutor = tradutor.serializar(resultadoAvaliadorSintatico);

          // O Tradutor deve serializar de acordo e traduzir brilho para brightness
          expect(resultadoTradutor).toContain(TraducaoValoresMetodos[MetodoBrilho[index]]);
          expect(resultadoTradutor).toContain(`brightness(${valoresAceitos[valIndex]});`);
        }
      }
    });

    it('Atribuindo Método "calcular()"', () => {
      for (let index = 0; index < MetodoCalcular.length; index += 1) {
        // Lexador
        const resultadoLexador = lexador.mapear([
          "lmht {",
          `${MetodoCalcular[index]}: calcular(100px - 80px);`,
          "}"
        ]);

        // O Lexador deve montar um objeto de comprimento 14 sem retornar nenhum erro
        expect(resultadoLexador.simbolos).toHaveLength(14);
        expect(resultadoLexador.erros).toHaveLength(0);

        // O valor recebido deve ser mapeado como METODO
        expect(resultadoLexador.simbolos).toEqual(
          expect.arrayContaining([
            expect.objectContaining({ tipo: tiposDeSimbolos.METODO }),
          ])
        );

        // O Lexador também deve encontrar números e quantificadores no mapeamento
        expect(resultadoLexador.simbolos).toEqual(
          expect.arrayContaining([
            expect.objectContaining({ tipo: tiposDeSimbolos.NUMERO }),
            expect.objectContaining({ tipo: tiposDeSimbolos.QUANTIFICADOR }),
          ])
        );

        // Avaliador Sintático
        const resultadoAvaliadorSintatico = avaliador.analisar(resultadoLexador.simbolos);

        // O Avaliador deve montar um objeto com os devidos nomes FolEs e CSS
        expect(resultadoAvaliadorSintatico[0].modificadores[0].propriedadeCss).toStrictEqual(
          TraducaoValoresMetodos[MetodoCalcular[index]]
        );

        // Tradutor
        const resultadoTradutor = tradutor.serializar(resultadoAvaliadorSintatico);

        expect(resultadoTradutor).toContain(TraducaoValoresMetodos[MetodoCalcular[index]]);
        expect(resultadoTradutor).toContain('calc(100px - 80px);');
      }
    });

    it('Atribuindo Método "contraste()"', () => {
      for (let index = 0; index < MetodoContraste.length; index += 1) {

        const valoresAceitos = ['100px', '100%', '0.1', '0', '1', '1.75'];

        for (let valIndex = 0; valIndex < valoresAceitos.length; valIndex += 1) {
          // Lexador
          const resultadoLexador = lexador.mapear([
            "lmht {",
            `${MetodoContraste[index]}: contraste(${valoresAceitos[valIndex]});`,
            "}"
          ]);

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

          // O Lexador não deve encontrar erros
          expect(resultadoLexador.erros).toHaveLength(0);

          // O valor recebido deve ser mapeado como METODO
          expect(resultadoLexador.simbolos).toEqual(
            expect.arrayContaining([
              expect.objectContaining({ tipo: tiposDeSimbolos.METODO }),
            ])
          );


          // Avaliador Sintático
          const resultadoAvaliadorSintatico = avaliador.analisar(resultadoLexador.simbolos);

          // O Avaliador deve montar um objeto com os devidos nomes FolEs e CSS
          expect(resultadoAvaliadorSintatico[0].modificadores[0].propriedadeCss).toStrictEqual(
            TraducaoValoresMetodos[MetodoContraste[index]]
          );

          // Tradutor
          const resultadoTradutor = tradutor.serializar(resultadoAvaliadorSintatico);

          expect(resultadoTradutor).toContain(TraducaoValoresMetodos[MetodoContraste[index]]);
          expect(resultadoTradutor).toContain(`contrast(${valoresAceitos[valIndex]});`);
        }
      }
    });

    it('Atribuindo Método "curva-cúbica" (cubic-bezier)', () => {
      for (let index = 0; index < MetodoCurvaCubica.length; index += 1) {
        // Lexador
        const resultadoLexador = lexador.mapear([
          "lmht {",
          `${MetodoCurvaCubica[index]}: curva-cúbica(0.42, 0.0, 1.0, 1.0);`,
          "}"
        ]);

        // O Lexador deve montar um objeto de comprimento 16 sem retornar nenhum erro
        expect(resultadoLexador.simbolos).toHaveLength(16);
        expect(resultadoLexador.erros).toHaveLength(0);

        // O valor recebido deve ser mapeado como METODO
        expect(resultadoLexador.simbolos).toEqual(
          expect.arrayContaining([
            expect.objectContaining({ tipo: tiposDeSimbolos.METODO }),
          ])
        );

        // O Lexador também deve encontrar números no mapeamento
        expect(resultadoLexador.simbolos).toEqual(
          expect.arrayContaining([
            expect.objectContaining({ tipo: tiposDeSimbolos.NUMERO }),
          ])
        );

        // Avaliador Sintático
        const resultadoAvaliadorSintatico = avaliador.analisar(resultadoLexador.simbolos);

        // O Avaliador deve montar um objeto com os devidos nomes FolEs e CSS
        expect(resultadoAvaliadorSintatico[0].modificadores[0].propriedadeCss).toStrictEqual(
          TraducaoValoresMetodos[MetodoCurvaCubica[index]]
        );

        // // // // Tradutor
        const resultadoTradutor = tradutor.serializar(resultadoAvaliadorSintatico);

        expect(resultadoTradutor).toContain(TraducaoValoresMetodos[MetodoCurvaCubica[index]]);
        expect(resultadoTradutor).toContain('cubic-bezier(0.42, 0, 1, 1);');
      }
    });

    it('Atribuindo Método "encaixar-conteúdo" (fit-content)', () => {
      for (let index = 0; index < MetodoEncaixarConteudo.length; index += 1) {
        // Lexador
        const resultadoLexador = lexador.mapear([
          "lmht {",
          `${MetodoEncaixarConteudo[index]}: encaixar-conteúdo(200px);`,
          "}"
        ]);

        // O Lexador deve montar um objeto de comprimento 11 sem retornar nenhum erro
        expect(resultadoLexador.simbolos).toHaveLength(11);
        expect(resultadoLexador.erros).toHaveLength(0);

        // O valor recebido deve ser mapeado como METODO
        expect(resultadoLexador.simbolos).toEqual(
          expect.arrayContaining([
            expect.objectContaining({ tipo: tiposDeSimbolos.METODO }),
          ])
        );

        // O Lexador também deve encontrar número e quantificador no mapeamento
        expect(resultadoLexador.simbolos).toEqual(
          expect.arrayContaining([
            expect.objectContaining({ tipo: tiposDeSimbolos.NUMERO }),
            expect.objectContaining({ tipo: tiposDeSimbolos.QUANTIFICADOR }),
          ])
        );


        // Avaliador Sintático
        const resultadoAvaliadorSintatico = avaliador.analisar(resultadoLexador.simbolos);

        expect(resultadoAvaliadorSintatico[0].modificadores[0].propriedadeCss).toStrictEqual(
          TraducaoValoresMetodos[MetodoEncaixarConteudo[index]]
        );

        // // // Tradutor
        const resultadoTradutor = tradutor.serializar(resultadoAvaliadorSintatico);

        expect(resultadoTradutor).toContain(TraducaoValoresMetodos[MetodoEncaixarConteudo[index]]);
        expect(resultadoTradutor).toContain('fit-content(200px)');
      }
    });

    it('Atribuindo Método "escala-cinza()"', () => {
      for (let index = 0; index < MetodoEscalaCinza.length; index += 1) {

        const valoresAceitos = ['100px', '100%', '0.1', '0', '1', '1.75'];

        for (let valIndex = 0; valIndex < valoresAceitos.length; valIndex += 1) {
          // Lexador
          const resultadoLexador = lexador.mapear([
            "lmht {",
            `${MetodoEscalaCinza[index]}: escala-cinza(${valoresAceitos[valIndex]});`,
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
            TraducaoValoresMetodos[MetodoEscalaCinza[index]]
          );

          // Tradutor
          const resultadoTradutor = tradutor.serializar(resultadoAvaliadorSintatico);

          // O Tradutor deve serializar de acordo e traduzir escala-cinza para grayscale
          expect(resultadoTradutor).toContain(TraducaoValoresMetodos[MetodoEscalaCinza[index]]);
          expect(resultadoTradutor).toContain(`grayscale(${valoresAceitos[valIndex]});`);
        }
      }
    });

    it('Atribuindo Método "gradiente-linear()" com valor de ângulo', () => {
      for (let index = 0; index < MetodoGradienteLinear.length; index += 1) {
        // Lexador
        const resultadoLexador = lexador.mapear([
          "lmht {",
          `${MetodoGradienteLinear[index]}: gradiente-linear(90deg, verde, amarelo);`,
          "}"
        ]);

        // O Lexador deve montar um objeto de comprimento 15 sem retornar nenhum erro
        expect(resultadoLexador.simbolos).toHaveLength(15);
        expect(resultadoLexador.erros).toHaveLength(0);

        // O valor recebido deve ser mapeado como METODO
        expect(resultadoLexador.simbolos).toEqual(
          expect.arrayContaining([
            expect.objectContaining({ tipo: tiposDeSimbolos.METODO }),
          ])
        );

        // O Lexador também deve encontrar número e quantificador no mapeamento
        expect(resultadoLexador.simbolos).toEqual(
          expect.arrayContaining([
            expect.objectContaining({ tipo: tiposDeSimbolos.NUMERO }),
            expect.objectContaining({ tipo: tiposDeSimbolos.QUANTIFICADOR }),
          ])
        );

        // Avaliador Sintático
        const resultadoAvaliadorSintatico = avaliador.analisar(resultadoLexador.simbolos);

        // O Avaliador deve montar um objeto com os devidos nomes FolEs e CSS
        expect(resultadoAvaliadorSintatico[0].modificadores[0].propriedadeCss).toStrictEqual(
          TraducaoValoresMetodos[MetodoGradienteLinear[index]]
        );

        // Tradutor
        const resultadoTradutor = tradutor.serializar(resultadoAvaliadorSintatico);

        expect(resultadoTradutor).toContain(TraducaoValoresMetodos[MetodoGradienteLinear[index]]);
        expect(resultadoTradutor).toContain('linear-gradient(90deg, green, yellow);');
      }
    });

    it('Atribuindo Método "gradiente-linear()" com valor de posição', () => {
      for (let index = 0; index < MetodoGradienteLinear.length; index += 1) {
        const posicoes = ['superior', 'inferior', 'direita', 'esquerda'];
        for (let posIndex = 0; posIndex < posicoes.length; posIndex += 1) {
          // Lexador
          const resultadoLexador = lexador.mapear([
            "lmht {",
            `${MetodoGradienteLinear[index]}: gradiente-linear(${posicoes[posIndex]}, azul, vermelho);`,
            "}"
          ]);

          // O Lexador deve montar um objeto de comprimento 14 sem retornar nenhum erro
          expect(resultadoLexador.simbolos).toHaveLength(14);
          expect(resultadoLexador.erros).toHaveLength(0);

          // O valor recebido deve ser mapeado como METODO
          expect(resultadoLexador.simbolos).toEqual(
            expect.arrayContaining([
              expect.objectContaining({ tipo: tiposDeSimbolos.METODO }),
            ])
          );

          // O Lexador também deve encontrar um qualitativo no mapeamento, referente à posição
          expect(resultadoLexador.simbolos).toEqual(
            expect.arrayContaining([
              expect.objectContaining({ tipo: tiposDeSimbolos.QUALITATIVO }),
            ])
          );

          // Avaliador Sintático
          const resultadoAvaliadorSintatico = avaliador.analisar(resultadoLexador.simbolos);

          // O Avaliador deve montar um objeto com os devidos nomes FolEs e CSS
          expect(resultadoAvaliadorSintatico[0].modificadores[0].propriedadeCss).toStrictEqual(
            TraducaoValoresMetodos[MetodoGradienteLinear[index]]
          );

          // Tradutor
          const resultadoTradutor = tradutor.serializar(resultadoAvaliadorSintatico);

          expect(resultadoTradutor).toContain(TraducaoValoresMetodos[MetodoGradienteLinear[index]]);

          switch (posicoes[posIndex]) {
            case 'superior':
              expect(resultadoTradutor).toContain('linear-gradient(0deg, blue, red);');
              break;
            case 'direita':
              expect(resultadoTradutor).toContain('linear-gradient(90deg, blue, red);');
              break;
            case 'inferior':
              expect(resultadoTradutor).toContain('linear-gradient(180deg, blue, red);');
              break;
            case 'esquerda':
              expect(resultadoTradutor).toContain('linear-gradient(270deg, blue, red);');
              break;
            default:
              break;
          }
        }
      }
    });

    it('Atribuindo Método "inclinar()"', () => {
      for (let index = 0; index < MetodosInclinar.length; index += 1) {

        const valoresAceitos = ['18deg', '3.142rad', '0', '1'];

        for (let valIndex = 0; valIndex < valoresAceitos.length; valIndex += 1) {
          // Lexador
          const resultadoLexador = lexador.mapear([
            "lmht {",
            `${MetodosInclinar[index]}: inclinar(${valoresAceitos[valIndex]});`,
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
            TraducaoValoresMetodos[MetodosInclinar[index]]
          );

          // Tradutor
          const resultadoTradutor = tradutor.serializar(resultadoAvaliadorSintatico);

          // O Tradutor deve serializar de acordo e traduzir inclinar para skew
          expect(resultadoTradutor).toContain(TraducaoValoresMetodos[MetodosInclinar[index]]);
          expect(resultadoTradutor).toContain(`skew(${valoresAceitos[valIndex]});`);
        }
      }
    });

    it('Atribuindo Método "inclinar() com múltiplos valores"', () => {
      for (let index = 0; index < MetodosInclinar.length; index += 1) {
        // Lexador
        const resultadoLexador = lexador.mapear([
          "lmht {",
          `${MetodosInclinar[index]}: inclinar(15deg, 15deg);`,
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

        // O Lexador deve montar um objeto de comprimento 14
        expect(resultadoLexador.simbolos).toHaveLength(14);
        expect(resultadoLexador.simbolos).toEqual(
          expect.arrayContaining([
            expect.objectContaining({ tipo: tiposDeSimbolos.NUMERO }),
            expect.objectContaining({ tipo: tiposDeSimbolos.QUANTIFICADOR }),
          ])
        );

        // Avaliador Sintático
        const resultadoAvaliadorSintatico = avaliador.analisar(resultadoLexador.simbolos);

        // O Avaliador deve montar um objeto com os devidos nomes FolEs e CSS
        expect(resultadoAvaliadorSintatico[0].modificadores[0].propriedadeCss).toStrictEqual(
          TraducaoValoresMetodos[MetodosInclinar[index]]
        );

        // Tradutor
        const resultadoTradutor = tradutor.serializar(resultadoAvaliadorSintatico);

        // O Tradutor deve serializar de acordo e traduzir inclinar para skew
        expect(resultadoTradutor).toContain(TraducaoValoresMetodos[MetodosInclinar[index]]);
        expect(resultadoTradutor).toContain(`skew(15deg, 15deg);`);
      }
    });

    it('Atribuindo Método "inclinar-horizontal()"', () => {
      for (let index = 0; index < MetodosInclinar.length; index += 1) {

        const valoresAceitos = ['18deg', '3.142rad', '0', '1'];

        for (let valIndex = 0; valIndex < valoresAceitos.length; valIndex += 1) {
          // Lexador
          const resultadoLexador = lexador.mapear([
            "lmht {",
            `${MetodosInclinar[index]}: inclinar-horizontal(${valoresAceitos[valIndex]});`,
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
            TraducaoValoresMetodos[MetodosInclinar[index]]
          );

          // Tradutor
          const resultadoTradutor = tradutor.serializar(resultadoAvaliadorSintatico);

          // O Tradutor deve serializar de acordo e traduzir inclinar-horizontal para skewX
          expect(resultadoTradutor).toContain(TraducaoValoresMetodos[MetodosInclinar[index]]);
          expect(resultadoTradutor).toContain(`skewX(${valoresAceitos[valIndex]});`);
        }
      }
    });

    it('Atribuindo Método "inclinar-vertical()"', () => {
      for (let index = 0; index < MetodosInclinar.length; index += 1) {

        const valoresAceitos = ['18deg', '3.142rad', '0', '1'];

        for (let valIndex = 0; valIndex < valoresAceitos.length; valIndex += 1) {
          // Lexador
          const resultadoLexador = lexador.mapear([
            "lmht {",
            `${MetodosInclinar[index]}: inclinar-vertical(${valoresAceitos[valIndex]});`,
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
            TraducaoValoresMetodos[MetodosInclinar[index]]
          );

          // Tradutor
          const resultadoTradutor = tradutor.serializar(resultadoAvaliadorSintatico);

          // O Tradutor deve serializar de acordo e traduzir inclinar-vertical para skewY
          expect(resultadoTradutor).toContain(TraducaoValoresMetodos[MetodosInclinar[index]]);
          expect(resultadoTradutor).toContain(`skewY(${valoresAceitos[valIndex]});`);
        }
      }
    });

    it('Atribuindo Método "inverter()"', () => {
      for (let index = 0; index < MetodoInverter.length; index += 1) {

        const valoresAceitos = ['100px', '100%', '0.1', '0', '1', '1.75'];

        for (let valIndex = 0; valIndex < valoresAceitos.length; valIndex += 1) {
          // Lexador
          const resultadoLexador = lexador.mapear([
            "lmht {",
            `${MetodoInverter[index]}: inverter(${valoresAceitos[valIndex]});`,
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
            TraducaoValoresMetodos[MetodoInverter[index]]
          );

          // Tradutor
          const resultadoTradutor = tradutor.serializar(resultadoAvaliadorSintatico);

          // O Tradutor deve serializar de acordo e traduzir inverter para invert
          expect(resultadoTradutor).toContain(TraducaoValoresMetodos[MetodoInverter[index]]);
          expect(resultadoTradutor).toContain(`invert(${valoresAceitos[valIndex]});`);
        }
      }
    });

    it('Atribuindo Método "translação()"', () => {
      for (let index = 0; index < MetodosTranslacao.length; index += 1) {

        const valoresAceitos = ['18deg', '3.142rad', '0', '1'];

        for (let valIndex = 0; valIndex < valoresAceitos.length; valIndex += 1) {
          // Lexador
          const resultadoLexador = lexador.mapear([
            "lmht {",
            `${MetodosTranslacao[index]}: translação(${valoresAceitos[valIndex]});`,
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
            TraducaoValoresMetodos[MetodosTranslacao[index]]
          );

          // Tradutor
          const resultadoTradutor = tradutor.serializar(resultadoAvaliadorSintatico);

          // O Tradutor deve serializar de acordo e traduzir translação para translate
          expect(resultadoTradutor).toContain(TraducaoValoresMetodos[MetodosTranslacao[index]]);
          expect(resultadoTradutor).toContain(`translate(${valoresAceitos[valIndex]});`);
        }
      }
    });

    it('Atribuindo Método "translação() com múltiplos valores"', () => {
      for (let index = 0; index < MetodosTranslacao.length; index += 1) {
        // Lexador
        const resultadoLexador = lexador.mapear([
          "lmht {",
          `${MetodosTranslacao[index]}: translacao(15deg, 15deg);`,
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

        // O Lexador deve montar um objeto de comprimento 14
        expect(resultadoLexador.simbolos).toHaveLength(14);
        expect(resultadoLexador.simbolos).toEqual(
          expect.arrayContaining([
            expect.objectContaining({ tipo: tiposDeSimbolos.NUMERO }),
            expect.objectContaining({ tipo: tiposDeSimbolos.QUANTIFICADOR }),
          ])
        );

        // Avaliador Sintático
        const resultadoAvaliadorSintatico = avaliador.analisar(resultadoLexador.simbolos);

        // O Avaliador deve montar um objeto com os devidos nomes FolEs e CSS
        expect(resultadoAvaliadorSintatico[0].modificadores[0].propriedadeCss).toStrictEqual(
          TraducaoValoresMetodos[MetodosTranslacao[index]]
        );

        // Tradutor
        const resultadoTradutor = tradutor.serializar(resultadoAvaliadorSintatico);

        // O Tradutor deve serializar de acordo e traduzir translacao para translate
        expect(resultadoTradutor).toContain(TraducaoValoresMetodos[MetodosTranslacao[index]]);
        expect(resultadoTradutor).toContain(`translate(15deg, 15deg);`);
      }
    });

    it('Atribuindo Método "limitar" (clamp)', () => {
      for (let index = 0; index < MetodoLimitar.length; index += 1) {
        // Lexador
        const resultadoLexador = lexador.mapear([
          "lmht {",
          `${MetodoLimitar[index]}: limitar(10vw, 20em, 100vw);`,
          "}"
        ]);

        // O Lexador deve montar um objeto de comprimento 17 sem retornar nenhum erro
        expect(resultadoLexador.simbolos).toHaveLength(17);
        expect(resultadoLexador.erros).toHaveLength(0);

        // O valor recebido deve ser mapeado como METODO
        expect(resultadoLexador.simbolos).toEqual(
          expect.arrayContaining([
            expect.objectContaining({ tipo: tiposDeSimbolos.METODO }),
          ])
        );

        // O Lexador também deve encontrar números e quantificadores no mapeamento
        expect(resultadoLexador.simbolos).toEqual(
          expect.arrayContaining([
            expect.objectContaining({ tipo: tiposDeSimbolos.NUMERO }),
            expect.objectContaining({ tipo: tiposDeSimbolos.QUANTIFICADOR }),
          ])
        );

        // Avaliador Sintático
        const resultadoAvaliadorSintatico = avaliador.analisar(resultadoLexador.simbolos);

        // O Avaliador deve montar um objeto com os devidos nomes FolEs e CSS

        expect(resultadoAvaliadorSintatico[0].modificadores[0].propriedadeCss).toStrictEqual(
          TraducaoValoresMetodos[MetodoLimitar[index]]
        );

        // Tradutor
        const resultadoTradutor = tradutor.serializar(resultadoAvaliadorSintatico);

        expect(resultadoTradutor).toContain(TraducaoValoresMetodos[MetodoLimitar[index]]);
        expect(resultadoTradutor).toContain('clamp(10vw, 20em, 100vw);');
      }
    });

    it('Atribuindo Método "linear()"', () => {
      for (let index = 0; index < MetodoLinear.length; index += 1) {
        // Lexador
        const resultadoLexador = lexador.mapear([
          "lmht {",
          `${MetodoLinear[index]}: linear(0, 0.25, 1);`,
          "}"
        ]);

        // O Lexador deve montar um objeto de comprimento 14 sem retornar nenhum erro
        expect(resultadoLexador.simbolos).toHaveLength(14);
        expect(resultadoLexador.erros).toHaveLength(0);

        // O valor recebido deve ser mapeado como METODO
        expect(resultadoLexador.simbolos).toEqual(
          expect.arrayContaining([
            expect.objectContaining({ tipo: tiposDeSimbolos.METODO }),
          ])
        );

        // O Lexador também deve encontrar números no mapeamento
        expect(resultadoLexador.simbolos).toEqual(
          expect.arrayContaining([
            expect.objectContaining({ tipo: tiposDeSimbolos.NUMERO }),
          ])
        );

        // Avaliador Sintático
        const resultadoAvaliadorSintatico = avaliador.analisar(resultadoLexador.simbolos);

        // O Avaliador deve montar um objeto com os devidos nomes FolEs e CSS

        expect(resultadoAvaliadorSintatico[0].modificadores[0].propriedadeCss).toStrictEqual(
          TraducaoValoresMetodos[MetodoLinear[index]]
        );

        // // // // Tradutor
        const resultadoTradutor = tradutor.serializar(resultadoAvaliadorSintatico);

        expect(resultadoTradutor).toContain(TraducaoValoresMetodos[MetodoLinear[index]]);
        expect(resultadoTradutor).toContain('linear(0, 0.25, 1);');
      }
    });

    it('Atribuindo Método "minmax()"', () => {
      for (let index = 0; index < MetodoMinMax.length; index += 1) {
        // Lexador
        const resultadoLexador = lexador.mapear([
          "lmht {",
          `${MetodoMinMax[index]}: minmax(100px, conteúdo-máximo);`,
          "}"
        ]);

        // O Lexador deve montar um objeto de comprimento 13 sem retornar nenhum erro
        expect(resultadoLexador.simbolos).toHaveLength(13);
        expect(resultadoLexador.erros).toHaveLength(0);

        // O valor recebido deve ser mapeado como METODO
        expect(resultadoLexador.simbolos).toEqual(
          expect.arrayContaining([
            expect.objectContaining({ tipo: tiposDeSimbolos.METODO }),
          ])
        );

        // O Lexador também deve encontrar número e quantificador no mapeamento
        expect(resultadoLexador.simbolos).toEqual(
          expect.arrayContaining([
            expect.objectContaining({ tipo: tiposDeSimbolos.NUMERO }),
            expect.objectContaining({ tipo: tiposDeSimbolos.QUANTIFICADOR }),
          ])
        );

        // Avaliador Sintático
        const resultadoAvaliadorSintatico = avaliador.analisar(resultadoLexador.simbolos);

        // O Avaliador deve montar um objeto com os devidos nomes FolEs e CSS

        expect(resultadoAvaliadorSintatico[0].modificadores[0].propriedadeCss).toStrictEqual(
          TraducaoValoresMetodos[MetodoMinMax[index]]
        );

        // // // // Tradutor
        const resultadoTradutor = tradutor.serializar(resultadoAvaliadorSintatico);

        expect(resultadoTradutor).toContain(TraducaoValoresMetodos[MetodoMinMax[index]]);
        expect(resultadoTradutor).toContain('minmax(100px, max-content);');
      }
    });

    it('Atribuindo Método "opacar()"', () => {
      for (let index = 0; index < MetodoOpacar.length; index += 1) {

        const valoresAceitos = ['100px', '100%', '0.1', '0', '1', '1.75'];

        for (let valIndex = 0; valIndex < valoresAceitos.length; valIndex += 1) {
          // Lexador
          const resultadoLexador = lexador.mapear([
            "lmht {",
            `${MetodoOpacar[index]}: opacar(${valoresAceitos[valIndex]});`,
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
            TraducaoValoresMetodos[MetodoOpacar[index]]
          );

          // Tradutor
          const resultadoTradutor = tradutor.serializar(resultadoAvaliadorSintatico);

          // O Tradutor deve serializar de acordo e traduzir opacar para opacity
          expect(resultadoTradutor).toContain(TraducaoValoresMetodos[MetodoOpacar[index]]);
          expect(resultadoTradutor).toContain(`opacity(${valoresAceitos[valIndex]});`);
        }
      }
    });

    it('Atribuindo Método "passos" (steps)', () => {
      for (let index = 0; index < MetodoPassos.length; index += 1) {
        // Lexador
        const resultadoLexador = lexador.mapear([
          "lmht {",
          `${MetodoPassos[index]}: passos(2, salto-inicial);`,
          "}"
        ]);

        // O Lexador deve montar um objeto de comprimento 12 sem retornar nenhum erro
        expect(resultadoLexador.simbolos).toHaveLength(12);
        expect(resultadoLexador.erros).toHaveLength(0);

        // O valor recebido deve ser mapeado como METODO
        expect(resultadoLexador.simbolos).toEqual(
          expect.arrayContaining([
            expect.objectContaining({ tipo: tiposDeSimbolos.METODO }),
          ])
        );

        // O Lexador também deve encontrar número e qualitativo no mapeamento
        expect(resultadoLexador.simbolos).toEqual(
          expect.arrayContaining([
            expect.objectContaining({ tipo: tiposDeSimbolos.NUMERO }),
            expect.objectContaining({ tipo: tiposDeSimbolos.QUALITATIVO }),
          ])
        );

        // Avaliador Sintático
        const resultadoAvaliadorSintatico = avaliador.analisar(resultadoLexador.simbolos);

        // O Avaliador deve montar um objeto com os devidos nomes FolEs e CSS
        expect(resultadoAvaliadorSintatico[0].modificadores[0].propriedadeCss).toStrictEqual(
          TraducaoValoresMetodos[MetodoPassos[index]]
        );

        // // // // Tradutor
        const resultadoTradutor = tradutor.serializar(resultadoAvaliadorSintatico);

        expect(resultadoTradutor).toContain(TraducaoValoresMetodos[MetodoPassos[index]]);
        expect(resultadoTradutor).toContain('steps(2, jump-start);');
      }
    });

    it('Atribuindo Método "perspectivar()"', () => {
      for (let index = 0; index < MetodoPerspectivar.length; index += 1) {

        const valoresAceitos = ['800px', '6.5cm', '0.1', '0', '1', '1.75', 'nenhuma'];

        for (let valIndex = 0; valIndex < valoresAceitos.length; valIndex += 1) {
          // Lexador
          const resultadoLexador = lexador.mapear([
            "lmht {",
            `${MetodoPerspectivar[index]}: perspectivar(${valoresAceitos[valIndex]});`,
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
          } else if (valIndex !== 6) {
            expect(resultadoLexador.simbolos).toHaveLength(10);
            expect(resultadoLexador.simbolos).toEqual(
              expect.arrayContaining([
                expect.objectContaining({ tipo: tiposDeSimbolos.NUMERO }),
              ])
            );
          } else {
            expect(resultadoLexador.simbolos).toHaveLength(10);
            expect(resultadoLexador.simbolos).toEqual(
              expect.arrayContaining([
                expect.objectContaining({ tipo: tiposDeSimbolos.IDENTIFICADOR }),
              ])
            );
          }

          // Avaliador Sintático
          const resultadoAvaliadorSintatico = avaliador.analisar(resultadoLexador.simbolos);

          // O Avaliador deve montar um objeto com os devidos nomes FolEs e CSS
          expect(resultadoAvaliadorSintatico[0].modificadores[0].propriedadeCss).toStrictEqual(
            TraducaoValoresMetodos[MetodoPerspectivar[index]]
          );

          // Tradutor
          const resultadoTradutor = tradutor.serializar(resultadoAvaliadorSintatico);

          // O Tradutor deve serializar de acordo e traduzir perspectivar para perspective
          expect(resultadoTradutor).toContain(TraducaoValoresMetodos[MetodoPerspectivar[index]]);
          expect(resultadoTradutor).toContain(`perspective(${valoresAceitos[valIndex]});`);
        }
      }
    });

    it('Atribuindo Método "projetar-sombra()" com valores de comprimento somente', () => {
      for (let index = 0; index < MetodoProjetarSombra.length; index += 1) {
        const comprimentos = ['15px 15px', '15px 15px 15px', '0.5rem 0.5rem', '0.5rem 0.5rem 1rem'];
        for (let posIndex = 0; posIndex < comprimentos.length; posIndex += 1) {
          // Lexador
          const resultadoLexador = lexador.mapear([
            "lmht {",
            `${MetodoProjetarSombra[index]}: projetar-sombra(${comprimentos[posIndex]});`,
            "}"
          ]);

          // O Lexador deve montar um objeto de acordo, sem retornar nenhum erro
          expect(resultadoLexador.erros).toHaveLength(0);

          // O valor recebido deve ser mapeado como METODO
          expect(resultadoLexador.simbolos).toEqual(
            expect.arrayContaining([
              expect.objectContaining({ tipo: tiposDeSimbolos.METODO }),
            ])
          );

          // O Lexador também deve sempre encontrar valores e quantificadores na operação
          expect(resultadoLexador.simbolos).toEqual(
            expect.arrayContaining([
              expect.objectContaining({ tipo: tiposDeSimbolos.NUMERO }),
              expect.objectContaining({ tipo: tiposDeSimbolos.QUANTIFICADOR }),

            ])
          );

          // Avaliador Sintático
          const resultadoAvaliadorSintatico = avaliador.analisar(resultadoLexador.simbolos);

          // O Avaliador deve montar um objeto com os devidos nomes FolEs e CSS
          expect(resultadoAvaliadorSintatico[0].modificadores[0].propriedadeCss).toStrictEqual(
            TraducaoValoresMetodos[MetodoProjetarSombra[index]]
          );

          // Tradutor
          const resultadoTradutor = tradutor.serializar(resultadoAvaliadorSintatico);

          // O Tradutor deve serializar de acordo e traduzir projetar-sombra para drop-shadow  
          expect(resultadoTradutor).toContain(TraducaoValoresMetodos[MetodoProjetarSombra[index]]);
          expect(resultadoTradutor).toContain(`drop-shadow(${comprimentos[posIndex]});`);
        }
      }
    });

    it('Atribuindo Método "projetar-sombra()" com valores de cor e de comprimento', () => {
      for (let index = 0; index < MetodoProjetarSombra.length; index += 1) {
        const comprimentos = ['15px 15px vermelho', '15px 15px 15px vermelho', 'vermelho 0.5rem 0.5rem', 'vermelho 0.5rem 0.5rem 1rem'];
        for (let posIndex = 0; posIndex < comprimentos.length; posIndex += 1) {
          // Lexador
          const resultadoLexador = lexador.mapear([
            "lmht {",
            `${MetodoProjetarSombra[index]}: projetar-sombra(${comprimentos[posIndex]});`,
            "}"
          ]);

          // O Lexador deve montar um objeto de acordo, sem retornar nenhum erro
          expect(resultadoLexador.erros).toHaveLength(0);

          // O valor recebido deve ser mapeado como METODO
          expect(resultadoLexador.simbolos).toEqual(
            expect.arrayContaining([
              expect.objectContaining({ tipo: tiposDeSimbolos.METODO }),
            ])
          );

          // O Lexador também deve sempre encontrar valores e quantificadores na operação
          expect(resultadoLexador.simbolos).toEqual(
            expect.arrayContaining([
              expect.objectContaining({ tipo: tiposDeSimbolos.NUMERO }),
              expect.objectContaining({ tipo: tiposDeSimbolos.QUANTIFICADOR }),

            ])
          );

          // Avaliador Sintático
          const resultadoAvaliadorSintatico = avaliador.analisar(resultadoLexador.simbolos);

          // O Avaliador deve montar um objeto com os devidos nomes FolEs e CSS
          expect(resultadoAvaliadorSintatico[0].modificadores[0].propriedadeCss).toStrictEqual(
            TraducaoValoresMetodos[MetodoProjetarSombra[index]]
          );

          // Tradutor
          const resultadoTradutor = tradutor.serializar(resultadoAvaliadorSintatico);

          // O Tradutor deve serializar de acordo e traduzir vermelho para red
          expect(resultadoTradutor).toContain(TraducaoValoresMetodos[MetodoProjetarSombra[index]]);
          expect(resultadoTradutor).toContain('red');
        }
      }
    });

    it('Atribuindo Método "raio()" com valores de posição e número/quantificador', () => {
      for (let index = 0; index < MetodoRaio.length; index += 1) {

        const valoresAceitos = ['lado-mais-próximo', 'lado-mais-proximo', 'canto-mais-próximo', 'canto-mais-proximo', 'lado-mais-distante', 'canto-mais-distante', 'lados', 'conter'];

        const traducaoValoresAceitos = ['closest-side', 'closest-side', 'closest-corner', 'closest-corner', 'farthest-side', 'farthest-corner', 'sides', 'contain'];

        for (let valIndex = 0; valIndex < valoresAceitos.length; valIndex += 1) {
          // Lexador
          const resultadoLexador = lexador.mapear([
            "lmht {",
            `${MetodoRaio[index]}: raio(${valoresAceitos[valIndex]} 200deg);`,
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

          // O Lexador deve montar um objeto de comprimento 12
          expect(resultadoLexador.simbolos).toHaveLength(12);
          expect(resultadoLexador.simbolos).toEqual(
            expect.arrayContaining([
              expect.objectContaining({ tipo: tiposDeSimbolos.NUMERO }),
              expect.objectContaining({ tipo: tiposDeSimbolos.QUANTIFICADOR }),
            ])
          );

          // Avaliador Sintático
          const resultadoAvaliadorSintatico = avaliador.analisar(resultadoLexador.simbolos);

          // O Avaliador deve montar um objeto com os devidos nomes FolEs e CSS
          expect(resultadoAvaliadorSintatico[0].modificadores[0].propriedadeCss).toStrictEqual(
            TraducaoValoresMetodos[MetodoRaio[index]]
          );

          // Tradutor
          const resultadoTradutor = tradutor.serializar(resultadoAvaliadorSintatico);

          // O Tradutor deve serializar de acordo e traduzir raio para ray
          expect(resultadoTradutor).toContain(TraducaoValoresMetodos[MetodoRaio[index]]);
          expect(resultadoTradutor).toContain(`ray(${traducaoValoresAceitos[valIndex]} 200deg);`);
        }
      }
    });

    it('Atribuindo Método "raio()" com somente número/quantificador', () => {
      for (let index = 0; index < MetodoRaio.length; index += 1) {


        // Lexador
        const resultadoLexador = lexador.mapear([
          "lmht {",
          `${MetodoRaio[index]}: raio(200deg);`,
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

        // O Lexador deve montar um objeto de comprimento 11
        expect(resultadoLexador.simbolos).toHaveLength(11);
        expect(resultadoLexador.simbolos).toEqual(
          expect.arrayContaining([
            expect.objectContaining({ tipo: tiposDeSimbolos.NUMERO }),
            expect.objectContaining({ tipo: tiposDeSimbolos.QUANTIFICADOR }),
          ])
        );

        // Avaliador Sintático
        const resultadoAvaliadorSintatico = avaliador.analisar(resultadoLexador.simbolos);

        // O Avaliador deve montar um objeto com os devidos nomes FolEs e CSS
        expect(resultadoAvaliadorSintatico[0].modificadores[0].propriedadeCss).toStrictEqual(
          TraducaoValoresMetodos[MetodoRaio[index]]
        );

        // Tradutor
        const resultadoTradutor = tradutor.serializar(resultadoAvaliadorSintatico);

        // O Tradutor deve serializar de acordo e traduzir raio para ray
        expect(resultadoTradutor).toContain(TraducaoValoresMetodos[MetodoRaio[index]]);
        expect(resultadoTradutor).toContain(`ray(200deg);`);

      }
    });

    it('Atribuindo Método "rotacionar()"', () => {
      for (let index = 0; index < MetodosRotacionar.length; index += 1) {

        const valoresAceitos = ['45deg', '3.142rad', '0.1', '0', '1', '1.75'];

        for (let valIndex = 0; valIndex < valoresAceitos.length; valIndex += 1) {
          // Lexador
          const resultadoLexador = lexador.mapear([
            "lmht {",
            `${MetodosRotacionar[index]}: rotacionar(${valoresAceitos[valIndex]});`,
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
            TraducaoValoresMetodos[MetodosRotacionar[index]]
          );

          // Tradutor
          const resultadoTradutor = tradutor.serializar(resultadoAvaliadorSintatico);

          // O Tradutor deve serializar de acordo e traduzir rotacionar para rotate
          expect(resultadoTradutor).toContain(TraducaoValoresMetodos[MetodosRotacionar[index]]);
          expect(resultadoTradutor).toContain(`rotate(${valoresAceitos[valIndex]});`);
        }
      }
    });

    it('Atribuindo Método "rotacionar-eixo-z()"', () => {
      for (let index = 0; index < MetodosRotacionar.length; index += 1) {

        const valoresAceitos = ['45deg', '3.142rad', '0.1', '0', '1', '1.75'];

        for (let valIndex = 0; valIndex < valoresAceitos.length; valIndex += 1) {
          // Lexador
          const resultadoLexador = lexador.mapear([
            "lmht {",
            `${MetodosRotacionar[index]}: rotacionar-eixo-z(${valoresAceitos[valIndex]});`,
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
            TraducaoValoresMetodos[MetodosRotacionar[index]]
          );

          // Tradutor
          const resultadoTradutor = tradutor.serializar(resultadoAvaliadorSintatico);

          // O Tradutor deve serializar de acordo e traduzir rotacionar-eixo-z para rotateZ
          expect(resultadoTradutor).toContain(TraducaoValoresMetodos[MetodosRotacionar[index]]);
          expect(resultadoTradutor).toContain(`rotateZ(${valoresAceitos[valIndex]});`);
        }
      }
    });

    it('Atribuindo Método "rotacionar-horizontal()"', () => {
      for (let index = 0; index < MetodosRotacionar.length; index += 1) {

        const valoresAceitos = ['45deg', '3.142rad', '0.1', '0', '1', '1.75'];

        for (let valIndex = 0; valIndex < valoresAceitos.length; valIndex += 1) {
          // Lexador
          const resultadoLexador = lexador.mapear([
            "lmht {",
            `${MetodosRotacionar[index]}: rotacionar-horizontal(${valoresAceitos[valIndex]});`,
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
            TraducaoValoresMetodos[MetodosRotacionar[index]]
          );

          // Tradutor
          const resultadoTradutor = tradutor.serializar(resultadoAvaliadorSintatico);

          // O Tradutor deve serializar de acordo e traduzir rotacionar-horizontal para rotateX
          expect(resultadoTradutor).toContain(TraducaoValoresMetodos[MetodosRotacionar[index]]);
          expect(resultadoTradutor).toContain(`rotateX(${valoresAceitos[valIndex]});`);
        }
      }
    });

    it('Atribuindo Método "rotacionar-matiz()"', () => {
      for (let index = 0; index < MetodoRotacionarMatiz.length; index += 1) {

        const valoresAceitos = ['100px', '100%', '0.1', '0', '1', '1.75'];

        for (let valIndex = 0; valIndex < valoresAceitos.length; valIndex += 1) {
          // Lexador
          const resultadoLexador = lexador.mapear([
            "lmht {",
            `${MetodoRotacionarMatiz[index]}: rotacionar-matiz(${valoresAceitos[valIndex]});`,
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
            TraducaoValoresMetodos[MetodoRotacionarMatiz[index]]
          );

          // Tradutor
          const resultadoTradutor = tradutor.serializar(resultadoAvaliadorSintatico);

          // O Tradutor deve serializar de acordo e traduzir rotacionar-matiz para hue-rotate
          expect(resultadoTradutor).toContain(TraducaoValoresMetodos[MetodoRotacionarMatiz[index]]);
          expect(resultadoTradutor).toContain(`hue-rotate(${valoresAceitos[valIndex]});`);
        }
      }
    });

    it('Atribuindo Método "rotacionar-vertical()"', () => {
      for (let index = 0; index < MetodosRotacionar.length; index += 1) {

        const valoresAceitos = ['45deg', '3.142rad', '0.1', '0', '1', '1.75'];

        for (let valIndex = 0; valIndex < valoresAceitos.length; valIndex += 1) {
          // Lexador
          const resultadoLexador = lexador.mapear([
            "lmht {",
            `${MetodosRotacionar[index]}: rotacionar-vertical(${valoresAceitos[valIndex]});`,
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
            TraducaoValoresMetodos[MetodosRotacionar[index]]
          );

          // Tradutor
          const resultadoTradutor = tradutor.serializar(resultadoAvaliadorSintatico);

          // O Tradutor deve serializar de acordo e traduzir rotacionar-vertical para rotateY
          expect(resultadoTradutor).toContain(TraducaoValoresMetodos[MetodosRotacionar[index]]);
          expect(resultadoTradutor).toContain(`rotateY(${valoresAceitos[valIndex]});`);
        }
      }
    });

    it('Atribuindo Método "saturar()"', () => {
      for (let index = 0; index < MetodoSaturar.length; index += 1) {

        const valoresAceitos = ['100px', '100%', '0.1', '0', '1', '1.75'];

        for (let valIndex = 0; valIndex < valoresAceitos.length; valIndex += 1) {
          // Lexador
          const resultadoLexador = lexador.mapear([
            "lmht {",
            `${MetodoSaturar[index]}: saturar(${valoresAceitos[valIndex]});`,
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
            TraducaoValoresMetodos[MetodoSaturar[index]]
          );

          // Tradutor
          const resultadoTradutor = tradutor.serializar(resultadoAvaliadorSintatico);

          // O Tradutor deve serializar de acordo e traduzir saturar para saturate
          expect(resultadoTradutor).toContain(TraducaoValoresMetodos[MetodoSaturar[index]]);
          expect(resultadoTradutor).toContain(`saturate(${valoresAceitos[valIndex]});`);
        }
      }
    });

    it('Atribuindo Método "sepia()"', () => {
      for (let index = 0; index < MetodoSepia.length; index += 1) {

        const valoresAceitos = ['100px', '100%', '0.1', '0', '1', '1.75'];

        for (let valIndex = 0; valIndex < valoresAceitos.length; valIndex += 1) {
          // Lexador
          const resultadoLexador = lexador.mapear([
            "lmht {",
            `${MetodoSepia[index]}: sepia(${valoresAceitos[valIndex]});`,
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
            TraducaoValoresMetodos[MetodoSepia[index]]
          );

          // Tradutor
          const resultadoTradutor = tradutor.serializar(resultadoAvaliadorSintatico);

          // O Tradutor deve serializar de acordo e traduzir sépia para sepia
          expect(resultadoTradutor).toContain(TraducaoValoresMetodos[MetodoSepia[index]]);
          expect(resultadoTradutor).toContain(`sepia(${valoresAceitos[valIndex]});`);
        }
      }
    });
  });
});
