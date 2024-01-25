import { AvaliadorSintatico } from "../../fontes/avaliador-sintatico";
import { Importador } from "../../fontes/importador";
import { AvaliadorSintaticoInterface, ImportadorInterface, LexadorInterface } from "../../fontes/interfaces";
import { Lexador } from "../../fontes/lexador";
import { SeletorModificador } from "../../fontes/modificadores/superclasse";
import tiposDeSimbolos from "../../fontes/tipos-de-simbolos/foles";
import { Serializador } from "../../fontes/serializadores";
import { ValorNumerico, ValorNumericoComQuantificador } from "../listas/valor-numerico";

describe('Testando Seletores que recebem VALOR NUMÉRICO sem quantificador', () => {
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

    it('Casos de sucesso - Lexador, Avaliador e Tradutor', () => {
      for (let index = 0; index < ValorNumerico.length; index += 1) {
        const seletor = new SeletorModificador(ValorNumerico[index], '1');

        // Lexador
        const resultadoLexador = lexador.mapear([
          "corpo {",
          `${ValorNumerico[index]}: ${seletor['valor']};`,
          "}"
        ]);

        expect(resultadoLexador.simbolos).toHaveLength(7);
        expect(resultadoLexador.simbolos).toEqual(
          expect.arrayContaining([
            expect.objectContaining({ tipo: tiposDeSimbolos.NUMERO }),
          ])
        );

        // Avaliador Sintático
        const resultadoAvaliadorSintatico = avaliador.analisar(resultadoLexador.simbolos);

        expect(resultadoAvaliadorSintatico[0].modificadores[0].nomeFoles).toStrictEqual(
          seletor['nomeFoles']
        );
        expect(resultadoAvaliadorSintatico[0].modificadores[0].propriedadeCss).toStrictEqual(
          seletor['propriedadeCss']
        );


        // // Tradutor
        const resultadoTradutor = tradutor.serializar(resultadoAvaliadorSintatico);

        expect(resultadoTradutor).toContain(seletor['propriedadeCss']);
      }
    });

    it('Casos de Falha - Lexador, Avaliador e Tradutor', () => {
      for (let index = 0; index < Object.keys(ValorNumerico).length; index += 1) {

        // Lexador - valor numérico não informado
        const resultadoLexador = lexador.mapear([
          "lmht {",
          `${ValorNumerico[index]}: ;`,
          "}"
        ]);

        expect(resultadoLexador.simbolos).not.toEqual(
          expect.arrayContaining([
            expect.objectContaining({ tipo: tiposDeSimbolos.NUMERO }),
          ])
        );

        // Tentando passar um quantificador para os modificadores (o que não deve ser permitido)
        const novoLexador = lexador.mapear([
          "lmht {",
          `${ValorNumerico[index]}: 15px;`,
          "}"
        ]);

        // Avaliador Sintático - Erro esperado como retorno
        expect(() => {
          avaliador.analisar(novoLexador.simbolos);
        }).toThrow(`Esperado ';' após declaração de valor de modificador '${ValorNumerico[index]}'.`);


        // Tradutor - Não deve traduzir devido ao erro do Avaliador Sintático
        expect(() => {
          tradutor.serializar(avaliador.analisar(novoLexador.simbolos));
        }).toHaveLength(0);
      }
    });
  });
});

describe('Testando Seletores que recebem VALOR NUMÉRICO com ou sem quantificador', () => {
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

    it('Casos de sucesso - valor numérico apenas - Lexador, Avaliador e Tradutor', () => {
      for (let index = 0; index < ValorNumericoComQuantificador.length; index += 1) {
        const seletor = new SeletorModificador(ValorNumericoComQuantificador[index], '1');

        // Lexador
        const resultadoLexador = lexador.mapear([
          "corpo {",
          `${ValorNumericoComQuantificador[index]}: ${seletor['valor']};`,
          "}"
        ]);

        expect(resultadoLexador.simbolos).toHaveLength(7);
        expect(resultadoLexador.simbolos).toEqual(
          expect.arrayContaining([
            expect.objectContaining({ tipo: tiposDeSimbolos.NUMERO }),
          ])
        );

        // Avaliador Sintático                
        const resultadoAvaliadorSintatico = avaliador.analisar(resultadoLexador.simbolos);

        expect(resultadoAvaliadorSintatico[0].modificadores[0].nomeFoles).toStrictEqual(
          seletor['nomeFoles']
        );
        expect(resultadoAvaliadorSintatico[0].modificadores[0].propriedadeCss).toStrictEqual(
          seletor['propriedadeCss']
        );


        // // Tradutor
        const resultadoTradutor = tradutor.serializar(resultadoAvaliadorSintatico);

        expect(resultadoTradutor).toContain(seletor['propriedadeCss']);
      }
    });

    it('Casos de Sucesso - valor numérico com quantificador - Lexador, Avaliador e Tradutor', () => {
      for (let index = 0; index < ValorNumericoComQuantificador.length; index += 1) {
        const excecoes = ['fatiar-imagem-borda', 'opacidade'];

        let seletor;
        if (excecoes.includes(ValorNumericoComQuantificador[index])) {
          seletor = new SeletorModificador(ValorNumericoComQuantificador[index], '15', '%');
        } else {
          seletor = new SeletorModificador(ValorNumericoComQuantificador[index], '15', 'px');
        }

        // Lexador
        const resultadoLexador = lexador.mapear([
          "corpo {",
          `${ValorNumericoComQuantificador[index]}: ${seletor['valor']}${seletor['quantificador']};`,
          "}"
        ]);

        expect(resultadoLexador.simbolos).toHaveLength(8);
        expect(resultadoLexador.simbolos).toEqual(
          expect.arrayContaining([
            expect.objectContaining({ tipo: tiposDeSimbolos.NUMERO }),
            expect.objectContaining({ tipo: tiposDeSimbolos.QUANTIFICADOR }),
          ])
        );

        // Avaliador Sintático                
        const resultadoAvaliadorSintatico = avaliador.analisar(resultadoLexador.simbolos);

        expect(resultadoAvaliadorSintatico[0].modificadores[0].nomeFoles).toStrictEqual(
          seletor['nomeFoles']
        );
        expect(resultadoAvaliadorSintatico[0].modificadores[0].propriedadeCss).toStrictEqual(
          seletor['propriedadeCss']
        );


        // // Tradutor
        const resultadoTradutor = tradutor.serializar(resultadoAvaliadorSintatico);

        expect(resultadoTradutor).toContain(seletor['propriedadeCss']);
      }
    });

    it('Casos de Falha - valor numérico com quantificador - Lexador, Avaliador e Tradutor', () => {
      for (let index = 0; index < ValorNumericoComQuantificador.length; index += 1) {
        // Lexador
        const resultadoLexador = lexador.mapear([
          "lmht {",
          `${ValorNumericoComQuantificador[index]}: ;`,
          "}"
        ]);

        expect(resultadoLexador.simbolos).not.toEqual(
          expect.arrayContaining([
            expect.objectContaining({ tipo: tiposDeSimbolos.NUMERO }),
            expect.objectContaining({ tipo: tiposDeSimbolos.QUANTIFICADOR }),
          ])
        );

        // Causar erro de digitação
        const seletorIncorreto = ValorNumericoComQuantificador[index].replace(ValorNumericoComQuantificador[index][0], '')

        const novoLexador = lexador.mapear([
          "lmht {",
          `${seletorIncorreto}: 1.5;`,
          "}"
        ]);

        // Avaliador Sintático - Erro esperado como retorno
        expect(() => {
          avaliador.analisar(novoLexador.simbolos);
        }).toThrow(`Esperado ';' após declaração de valor de modificador '${seletorIncorreto}'.`);

        // // Tradutor - Não deve traduzir devido ao erro do Avaliador Sintático
        expect(() => {
          tradutor.serializar(avaliador.analisar(novoLexador.simbolos));
        }).toHaveLength(0);
      }
    });
  });
});
