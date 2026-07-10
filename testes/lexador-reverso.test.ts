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
        expect(resultadoLexador.erros).toHaveLength(0);

        // Tipos devem estar mapeados
        expect(resultadoLexador.simbolos).toEqual(
            expect.arrayContaining([
                expect.objectContaining({ tipo: tiposDeSimbolos.TAG }),
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

    it('Caso de sucesso - função analisarNumero() mapeia números com denotação pontual', () => {
        const resultadoLexador = lexadorReverso.mapear([
            "html {",
            "    font-size: 1.5;",
            "}"
        ]);

        expect(resultadoLexador).toBeTruthy();
        expect(resultadoLexador.simbolos).toHaveLength(7);
        expect(resultadoLexador.erros).toHaveLength(0);

        // Tipos devem estar mapeados
        expect(resultadoLexador.simbolos).toEqual(
            expect.arrayContaining([
                expect.objectContaining({ tipo: tiposDeSimbolos.TAG }),
                expect.objectContaining({ tipo: tiposDeSimbolos.CHAVE_ESQUERDA }),
                expect.objectContaining({ tipo: tiposDeSimbolos.IDENTIFICADOR }),
                expect.objectContaining({ tipo: tiposDeSimbolos.DOIS_PONTOS }),
                expect.objectContaining({ tipo: tiposDeSimbolos.NUMERO }),
                expect.objectContaining({ tipo: tiposDeSimbolos.PONTO_E_VIRGULA }),
                expect.objectContaining({ tipo: tiposDeSimbolos.CHAVE_DIREITA }),
            ])
        );

        // Lexemas devem estar mapeados
        expect(resultadoLexador.simbolos).toEqual(
            expect.arrayContaining([
                expect.objectContaining({ lexema: '1.5' }),
            ])
        );
    });

    it('Caso de sucesso - mapeamento de classes e IDs', () => {
        const classeId = ['.', '#'];

        for (let index = 0; index < classeId.length; index += 1) {
            const resultadoLexador = lexadorReverso.mapear([
                `${classeId[index]}meu-seletor {`,
                "    padding: 10px;",
                "}"
            ]);

            expect(resultadoLexador).toBeTruthy();
            expect(resultadoLexador.simbolos).toHaveLength(9);
            expect(resultadoLexador.erros).toHaveLength(0);

            // Deve mapear PONTO ou CERQUILHA corretamente
            if (index === 0) {
                expect(resultadoLexador.simbolos).toEqual(
                    expect.arrayContaining([
                        expect.objectContaining({ tipo: tiposDeSimbolos.PONTO }),
                    ])
                );
            } else {
                expect(resultadoLexador.simbolos).toEqual(
                    expect.arrayContaining([
                        expect.objectContaining({ tipo: tiposDeSimbolos.CERQUILHA }),
                    ])
                );
            }

            // Todos os demais tipos devem estar mapeados
            expect(resultadoLexador.simbolos).toEqual(
                expect.arrayContaining([
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
                    expect.objectContaining({ lexema: 'meu-seletor' }),
                ])
            );
        }
    });

    it('Caso de falha - caractere inesperado', () => {
        const resultadoLexador = lexadorReverso.mapear([
            `html {`,
            "    padding: 10px&;",
            "}"
        ]);

        expect(resultadoLexador.erros).toHaveLength(1);
        expect(resultadoLexador.erros).toEqual(
            [{ "caractere": "&", "linha": 2, "mensagem": "Caractere inesperado." }]
        );
    });

    it('Caso de sucesso - declarando classe seguida de estrutura', () => {
        const resultadoLexador = lexadorReverso.mapear([
            ".my-class p {",
            "    font-size: 10px;",
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
                expect.objectContaining({ tipo: tiposDeSimbolos.TAG }),
            ])
        );
    });
});
