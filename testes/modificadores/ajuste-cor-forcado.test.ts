import { AvaliadorSintatico } from "../../fontes/avaliador-sintatico";
import { Lexador } from "../../fontes/lexador";
import tiposDeSimbolos from "../../fontes/tipos-de-simbolos/foles";
import { Tradutor } from "../../fontes/tradutor";

describe('Testando Dicionario Modificadores', () => {
    describe('Ajuste Cor Forçado', () => {
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
                "    ajuste-cor-forcado: 15px;",
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
                    expect.objectContaining({ tipo: tiposDeSimbolos.QUANTIFICADOR }),
                    expect.objectContaining({ tipo: tiposDeSimbolos.PONTO_E_VIRGULA }),
                    expect.objectContaining({ tipo: tiposDeSimbolos.CHAVE_DIREITA }),
                ])
            );
        });

        it('Avaliador Sintático - Caso de Sucesso', () => {
            const resultado = lexador.mapear([
                "lmht {",
                "    ajuste-cor-forçado: 15px;",
                "}"
            ]);

            const resultadoAvaliadorSintatico = avaliador.analisar(resultado.simbolos);
            console.log(resultadoAvaliadorSintatico);
            expect(resultadoAvaliadorSintatico).toBeTruthy();
            expect(resultadoAvaliadorSintatico).toHaveLength(1);
            expect(resultadoAvaliadorSintatico[0].seletor).toBe('lmht');
            expect(resultadoAvaliadorSintatico[0].modificadores[0].nomeFoles).toStrictEqual(
                ['ajuste-cor-forcado', 'ajuste-cor-forçado']
            );
            expect(resultadoAvaliadorSintatico[0].modificadores[0].propriedadeCss)
                .toStrictEqual('forced-color-adjust');
        });

        it('Tradutor - Caso de Sucesso', () => {
            const resultado = lexador.mapear([
                "corpo {",
                "    ajuste-cor-forcado: 15px;",
                "}"
            ]);

            const resultadoAvaliadorSintatico = avaliador.analisar(resultado.simbolos);

            const resultadoTradutor = tradutor.traduzir(resultadoAvaliadorSintatico);

            expect(resultadoTradutor).toBeTruthy();
            expect(resultadoTradutor).toContain("body");
            expect(resultadoTradutor).toContain("forced-color-adjust");
            expect(resultadoTradutor).toContain("15px;");
        });

        it('Lexador - Caso de Falha: sem valor', () => {
            const resultado = lexador.mapear([
                "corpo {",
                "    ajuste-cor-forçado: px;",
                "}"
            ]);

            expect(resultado.simbolos).not.toHaveLength(8);
            expect(resultado.simbolos).not.toEqual(
                expect.arrayContaining([
                    expect.objectContaining({ tipo: tiposDeSimbolos.NUMERO }),
                ])
            );
        });

        it('Avaliador Sintático - Caso de Falha: seletor não encontrado', () => {
            const resultado = lexador.mapear([
                "corpo {",
                "    ajuste-cor-forsado: 15px;",
                "}"
            ]);

            expect(() => {
                avaliador.analisar(resultado.simbolos);
            }).toThrow("O seletor 'ajuste-cor-forsado' não foi encontrado.");
        });

        it('Tradutor - Caso de Falha', () => {
            const resultado = lexador.mapear([
                "corpo {",
                "    ajuste-cor-forsado: 15px;",
                "}"
            ]);

            expect(() => {
                tradutor.traduzir(avaliador.analisar(resultado.simbolos));
            }).toHaveLength(0);
        });
    });
});
