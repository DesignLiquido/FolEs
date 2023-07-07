import { AvaliadorSintatico } from "../../fontes/avaliador-sintatico";
import { Lexador } from "../../fontes/lexador";
import { SeletorModificador } from "../../fontes/modificadores/superclasse";
import tiposDeSimbolos from "../../fontes/tipos-de-simbolos/foles";
import { Tradutor } from "../../fontes/tradutor";
import { MetodoEncaixarConteudo, MetodoLimitar, MetodoLinear, MetodoMinMax, MetodoPassos } from "../listas/metodos";

describe('Testando Seletores que recebem MÉTODOS como valor', () => {
  describe('Testes Unitários', () => {
    let lexador: Lexador;
    let avaliador: AvaliadorSintatico;
    let tradutor: Tradutor;

    beforeEach(() => {
      lexador = new Lexador();
      avaliador = new AvaliadorSintatico();
      tradutor = new Tradutor();
    });

    it('Atribuindo Método "encaixar-conteúdo" (fit-content)', () => {
      for (let index = 0; index < MetodoEncaixarConteudo.length; index += 1) {
        const seletor = new SeletorModificador(MetodoEncaixarConteudo[index], 'fit-content(200px)');

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

        // // O Avaliador deve montar um objeto com os devidos nomes FolEs e CSS
        expect(resultadoAvaliadorSintatico[0].modificadores[0].nomeFoles).toStrictEqual(
          seletor['nomeFoles']
        );
        expect(resultadoAvaliadorSintatico[0].modificadores[0].propriedadeCss).toStrictEqual(
          seletor['propriedadeCss']
        );

        // // // Tradutor
        const resultadoTradutor = tradutor.traduzir(resultadoAvaliadorSintatico);

        expect(resultadoTradutor).toContain(seletor['propriedadeCss']);
        expect(resultadoTradutor).toContain('fit-content(200px)');
      }
    });

    it('Atribuindo Método "limitar" (clamp)', () => {
      for (let index = 0; index < MetodoLimitar.length; index += 1) {
        const seletor = new SeletorModificador(MetodoLimitar[index], 'clamp(10vw, 20em, 100vw)');

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

        // // // O Avaliador deve montar um objeto com os devidos nomes FolEs e CSS
        expect(resultadoAvaliadorSintatico[0].modificadores[0].nomeFoles).toStrictEqual(
          seletor['nomeFoles']
        );
        expect(resultadoAvaliadorSintatico[0].modificadores[0].propriedadeCss).toStrictEqual(
          seletor['propriedadeCss']
        );

        // // // // Tradutor
        const resultadoTradutor = tradutor.traduzir(resultadoAvaliadorSintatico);

        expect(resultadoTradutor).toContain(seletor['propriedadeCss']);
        expect(resultadoTradutor).toContain('clamp(10vw, 20em, 100vw);');
      }
    });

    it('Atribuindo Método "minmax()"', () => {
      for (let index = 0; index < MetodoMinMax.length; index += 1) {
        const seletor = new SeletorModificador(MetodoMinMax[index], 'minmax(100px, max-content)');

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

        // // // O Avaliador deve montar um objeto com os devidos nomes FolEs e CSS
        expect(resultadoAvaliadorSintatico[0].modificadores[0].nomeFoles).toStrictEqual(
          seletor['nomeFoles']
        );
        expect(resultadoAvaliadorSintatico[0].modificadores[0].propriedadeCss).toStrictEqual(
          seletor['propriedadeCss']
        );

        // // // // Tradutor
        const resultadoTradutor = tradutor.traduzir(resultadoAvaliadorSintatico);

        expect(resultadoTradutor).toContain(seletor['propriedadeCss']);
        expect(resultadoTradutor).toContain('minmax(100px, max-content);');
      }
    });

    it('Atribuindo Método "passos" (steps)', () => {
      for (let index = 0; index < MetodoPassos.length; index += 1) {
        const seletor = new SeletorModificador(MetodoPassos[index], 'steps(2, jump-start)');

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

        // // // O Avaliador deve montar um objeto com os devidos nomes FolEs e CSS
        expect(resultadoAvaliadorSintatico[0].modificadores[0].nomeFoles).toStrictEqual(
          seletor['nomeFoles']
        );
        expect(resultadoAvaliadorSintatico[0].modificadores[0].propriedadeCss).toStrictEqual(
          seletor['propriedadeCss']
        );

        // // // // Tradutor
        const resultadoTradutor = tradutor.traduzir(resultadoAvaliadorSintatico);

        expect(resultadoTradutor).toContain(seletor['propriedadeCss']);
        expect(resultadoTradutor).toContain('steps(2, jump-start);');
      }
    });

    it('Atribuindo Método "curva-cúbica" (cubic-bezier)', () => {
      for (let index = 0; index < MetodoPassos.length; index += 1) {
        const seletor = new SeletorModificador(MetodoPassos[index], 'cubic-bezier(0.42, 0.0, 1.0, 1.0)');

        // Lexador
        const resultadoLexador = lexador.mapear([
          "lmht {",
          `${MetodoPassos[index]}: curva-cúbica(0.42, 0.0, 1.0, 1.0);`,
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

        // // // O Avaliador deve montar um objeto com os devidos nomes FolEs e CSS
        expect(resultadoAvaliadorSintatico[0].modificadores[0].nomeFoles).toStrictEqual(
          seletor['nomeFoles']
        );
        expect(resultadoAvaliadorSintatico[0].modificadores[0].propriedadeCss).toStrictEqual(
          seletor['propriedadeCss']
        );

        // // // // Tradutor
        const resultadoTradutor = tradutor.traduzir(resultadoAvaliadorSintatico);

        expect(resultadoTradutor).toContain(seletor['propriedadeCss']);
        expect(resultadoTradutor).toContain('cubic-bezier(0.42, 0, 1, 1);');
      }
    });

    it('Atribuindo Método "linear()"', () => {
      for (let index = 0; index < MetodoLinear.length; index += 1) {
        const seletor = new SeletorModificador(MetodoLinear[index], 'linear(0, 0.25, 1)');

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

        // // // O Avaliador deve montar um objeto com os devidos nomes FolEs e CSS
        expect(resultadoAvaliadorSintatico[0].modificadores[0].nomeFoles).toStrictEqual(
          seletor['nomeFoles']
        );
        expect(resultadoAvaliadorSintatico[0].modificadores[0].propriedadeCss).toStrictEqual(
          seletor['propriedadeCss']
        );

        // // // // Tradutor
        const resultadoTradutor = tradutor.traduzir(resultadoAvaliadorSintatico);

        expect(resultadoTradutor).toContain(seletor['propriedadeCss']);
        expect(resultadoTradutor).toContain('linear(0, 0.25, 1);');
      }
    });
  });
});
