import { AvaliadorSintatico } from "../../fontes/avaliador-sintatico";
import { Importador } from "../../fontes/importador";
import { AvaliadorSintaticoInterface, ImportadorInterface, LexadorInterface } from "../../fontes/interfaces";
import { Lexador } from "../../fontes/lexador";
import tiposDeSimbolos from "../../fontes/tipos-de-simbolos/foles";
import { Serializador } from "../../fontes/serializadores";
import { MetodoCalcular, MetodoCurvaCubica, MetodoEncaixarConteudo, MetodoGradienteLinear, MetodoLimitar, MetodoLinear, MetodoMinMax, MetodoPassos, TraducaoValoresMetodos } from "../listas/metodos";

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

    it('Atribuindo Método "calc()"', () => {
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

    it('Atribuindo Método "linear-gradient()" com valor de ângulo', () => {
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

    it('Atribuindo Método "linear-gradient()" com valor de posição', () => {
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
  });
});
