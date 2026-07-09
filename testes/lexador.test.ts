import { AvaliadorSintatico } from "../fontes/avaliador-sintatico";
import { Importador } from "../fontes/importador";
import { AvaliadorSintaticoInterface, ImportadorInterface } from "../fontes/interfaces";
import { Lexador } from "../fontes/lexador";

import tiposDeSimbolos from "../fontes/tipos-de-simbolos/foles";

describe('Lexador', () => {
    let lexador: Lexador;
    let importador: ImportadorInterface;
    let avaliadorSintatico: AvaliadorSintaticoInterface;

    beforeEach(() => {
        lexador = new Lexador();
        importador = new Importador(lexador);
        avaliadorSintatico = new AvaliadorSintatico(importador);
    });

    it('Caso de sucesso - função mapear() monta objeto corretamente', () => {
        const resultadoLexador = lexador.mapear([
            "lmht {",
            "    tamanho-texto: 12px;",
            "}"
        ]);

        expect(resultadoLexador).toBeTruthy();
        expect(resultadoLexador.simbolos).toHaveLength(8);

        // Tipos devem estar mapeados
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

        // Lexemas devem estar mapeados
        expect(resultadoLexador.simbolos).toEqual(
            expect.arrayContaining([
                expect.objectContaining({ lexema: '12' }),
                expect.objectContaining({ lexema: 'px' }),
            ])
        );
    });

    it('Caso de falha - mapear() não recebe parâmetros corretos', () => {
        const resultadoLexador = lexador.mapear([
            "lmht {",
            "    tamanho-texto: px;",
            "}"
        ]);

        // Não deve mapear números
        expect(resultadoLexador.simbolos).not.toEqual(
            expect.arrayContaining([
                expect.objectContaining({ tipo: tiposDeSimbolos.NUMERO }),
            ])
        );

        const novoLexador = lexador.mapear([
            "lmht {",
            "    tamanho-texto: 12;",
            "}"
        ]);


        // Não deve mapear quantificador
        expect(novoLexador.simbolos).not.toEqual(
            expect.arrayContaining([
                expect.objectContaining({ tipo: tiposDeSimbolos.QUANTIFICADOR }),
            ])
        );
    });

    it('Caso de sucesso - declarando classe seguida de estrutura', () => {
        const resultadoLexador = lexador.mapear([
            ".minha-classe paragrafo {",
            "    tamanho-texto: 10px;",
            "}"
        ]);

        // Deve montar um objeto de comprimento 10, sem retornar erros
        expect(resultadoLexador.simbolos).toHaveLength(10);
        expect(resultadoLexador.erros).toHaveLength(0);

        // Deve mapear tanto o nome de classe quanto a estrutura
        expect(resultadoLexador.simbolos).toEqual(
            expect.arrayContaining([
                expect.objectContaining({ tipo: tiposDeSimbolos.PONTO }),
                expect.objectContaining({ tipo: tiposDeSimbolos.IDENTIFICADOR }),
                expect.objectContaining({ tipo: tiposDeSimbolos.ESTRUTURA }),
            ])
        );

        // O objeto deve ser recebido corretamente pelo Avaliador Sintático
        const resultadoAvaliadorSintatico = avaliadorSintatico.analisar(resultadoLexador.simbolos);
        expect(resultadoAvaliadorSintatico).toBeTruthy();
    });
});
