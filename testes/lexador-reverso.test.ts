import { LexadorReverso } from "../fontes/lexador/lexador-reverso";

import tiposDeSimbolos from "../fontes/tipos-de-simbolos/css";

describe('Lexador Reverso', () => {
    let lexadorReverso: LexadorReverso;

    beforeEach(() => {
        lexadorReverso = new LexadorReverso();
    });

    it('Caso de sucesso - função mapear() monta objeto corretamente', () => {
        const resultadoLexador = lexadorReverso.mapear([
            "html {",
            "    font-size: 12px;",
            "}"
        ]);

        expect(resultadoLexador).toBeTruthy();
        expect(resultadoLexador.simbolos).toHaveLength(8);

        // Tipos devem estar mapeados
        expect(resultadoLexador.simbolos).toEqual(
            expect.arrayContaining([
                expect.objectContaining({ tipo: tiposDeSimbolos.TAG }),
                expect.objectContaining({ tipo: tiposDeSimbolos.CHAVE_ESQUERDA }),
                expect.objectContaining({ tipo: tiposDeSimbolos.IDENTIFICADOR }),
                expect.objectContaining({ tipo: tiposDeSimbolos.DOIS_PONTOS }),
                expect.objectContaining({ tipo: tiposDeSimbolos.NUMERO }),
                // expect.objectContaining({ tipo: tiposDeSimbolos.QUANTIFICADOR }),
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
});
