import { Lexador } from "../fontes/lexador";
import tiposDeSimbolos from "../fontes/tipos-de-simbolos";

describe('Lexador', () => {
    describe('mapear()', () => {
        let lexador: Lexador;

        beforeEach(() => {
            lexador = new Lexador();
        });

        it('Funciona', () => {
            const resultado = lexador.mapear([
                "lmht {",
                "    tamanho-texto: 12px;",
                "}"
            ]);
            expect(resultado).toBeTruthy();
            expect(resultado.simbolos).toHaveLength(8);
            expect(resultado.simbolos).toEqual(
                expect.arrayContaining([
                    expect.objectContaining({ tipo: tiposDeSimbolos.ESTRUTURA }),
                    expect.objectContaining({ tipo: tiposDeSimbolos.CHAVE_ESQUERDA }),
                    expect.objectContaining({ tipo: tiposDeSimbolos.IDENTIFICADOR }),
                    expect.objectContaining({ tipo: tiposDeSimbolos.DOIS_PONTOS }),
                    expect.objectContaining({ tipo: tiposDeSimbolos.NUMERO }),
                    expect.objectContaining({ tipo: tiposDeSimbolos.IDENTIFICADOR }),
                    expect.objectContaining({ tipo: tiposDeSimbolos.PONTO_E_VIRGULA }),
                    expect.objectContaining({ tipo: tiposDeSimbolos.CHAVE_DIREITA }),
                ])
            );
        });
    });
});
