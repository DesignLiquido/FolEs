import { Lexador } from "../fontes/lexador";

import tiposDeSimbolos from "../fontes/tipos-de-simbolos/foles";

describe('Lexador', () => {
    let lexador: Lexador;

    beforeEach(() => {
        lexador = new Lexador();
    });

    it.skip('Caso de sucesso - função mapear() monta objeto corretamente', () => {
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

    it.skip('Caso de falha - mapear() não recebe parâmetros corretos', () => {
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
});
