import { AvaliadorSintatico } from "../../fontes/avaliador-sintatico";
import { Lexador } from "../../fontes/lexador";
import tiposDeSimbolos from "../../fontes/tipos-de-simbolos/foles";
import { Tradutor } from "../../fontes/tradutor";

describe('Testando Dicionario Modificadores', () => {
    describe('Largura Mínima', () => {
        let lexador: Lexador;
        let avaliador: AvaliadorSintatico;
        let tradutor: Tradutor;

        beforeEach(() => {
            lexador = new Lexador();
            avaliador = new AvaliadorSintatico();
            tradutor = new Tradutor();
        });

        it('Lexador - Caso de Sucesso', () => {
            const resultado = lexador.mapear([
                "lmht {",
                "    agrupar-palavra: normal;",
                "}"
            ]);
            
            expect(resultado).toBeTruthy();
            expect(resultado.simbolos).toHaveLength(7);
            expect(resultado.simbolos).toEqual(
                expect.arrayContaining([
                    expect.objectContaining({ tipo: tiposDeSimbolos.ESTRUTURA }),
                    expect.objectContaining({ tipo: tiposDeSimbolos.CHAVE_ESQUERDA }),
                    expect.objectContaining({ tipo: tiposDeSimbolos.IDENTIFICADOR }),
                    expect.objectContaining({ tipo: tiposDeSimbolos.DOIS_PONTOS }),
                    expect.objectContaining({ tipo: tiposDeSimbolos.PONTO_E_VIRGULA }),
                    expect.objectContaining({ tipo: tiposDeSimbolos.CHAVE_DIREITA }),
                ])
            );
        });

        it('Avaliador Sintático - Caso de Sucesso', () => {
            const resultado = lexador.mapear([
                "lmht {",
                "    agrupar-palavra: 1px;",
                "}"
            ]);

            const resultadoAvaliadorSintatico = avaliador.analisar(resultado.simbolos);
            console.log(resultadoAvaliadorSintatico);
            expect(resultadoAvaliadorSintatico).toBeTruthy();
            expect(resultadoAvaliadorSintatico).toHaveLength(1);
            expect(resultadoAvaliadorSintatico[0].seletor).toBe('lmht');
            expect(resultadoAvaliadorSintatico[0].modificadores[0].nomeFoles).toStrictEqual(
                'agrupar-palavra'
            );
            expect(resultadoAvaliadorSintatico[0].modificadores[0].propriedadeCss)
                .toStrictEqual('word-wrap');
        });

        it('Tradutor - Caso de Sucesso', () => {
            const resultado = lexador.mapear([
                "lmht {",
                "    agrupar-palavra: 1px;",
                "}"
            ]);

            const resultadoAvaliadorSintatico = avaliador.analisar(resultado.simbolos);

            const resultadoTradutor = tradutor.traduzir(resultadoAvaliadorSintatico);

            expect(resultadoTradutor).toBeTruthy();
            expect(resultadoTradutor).toContain("html");
            expect(resultadoTradutor).toContain("word-wrap");
        });

        it('Lexador - Caso de Falha: sem valor e quantificador', () => {
            const resultado = lexador.mapear([
                "lmht {",
                "    agrupar-palavra: ;",
                "}"
            ]);

            expect(resultado.simbolos).not.toHaveLength(7);
            expect(resultado.simbolos).not.toEqual(
                expect.arrayContaining([
                    expect.objectContaining({ tipo: tiposDeSimbolos.NUMERO }),
                    expect.objectContaining({ tipo: tiposDeSimbolos.QUANTIFICADOR }),
                ])
            );
        });

        it('Avaliador Sintático - Caso de Falha: seletor não encontrado', () => {
            const resultado = lexador.mapear([
                "lmht {",
                "    agupar-palavra: 12px;",
                "}"
            ]);

            expect(() => {
                avaliador.analisar(resultado.simbolos);
            }).toThrow("O seletor 'agupar-palavra' não foi encontrado.");
        });

        it('Tradutor - Caso de Falha', () => {
            const resultado = lexador.mapear([
                "lmht {",
                "    agupar-palavra: 12px;",
                "}"
            ]);

            expect(() => {
                tradutor.traduzir(avaliador.analisar(resultado.simbolos));
            }).toHaveLength(0);
        });
    });
});
