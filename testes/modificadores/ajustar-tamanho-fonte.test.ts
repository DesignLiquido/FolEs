import { AvaliadorSintatico } from "../../fontes/avaliador-sintatico";
import { Lexador } from "../../fontes/lexador";
import tiposDeSimbolos from "../../fontes/tipos-de-simbolos/foles";
import { Tradutor } from "../../fontes/tradutor";

describe('Testando Dicionario Modificadores', () => {
    describe('Ajustar Tamanho Fonte', () => {
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
                "    ajustar-tamanho-fonte: 0.5mm;",
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
                "    ajustar-tamanho-fonte: 0.5mm;",
                "}"
            ]);

            const resultadoAvaliadorSintatico = avaliador.analisar(resultado.simbolos);
            console.log(resultadoAvaliadorSintatico);
            expect(resultadoAvaliadorSintatico).toBeTruthy();
            expect(resultadoAvaliadorSintatico).toHaveLength(1);
            expect(resultadoAvaliadorSintatico[0].seletor).toBe('lmht');
            expect(resultadoAvaliadorSintatico[0].modificadores[0].nomeFoles).toStrictEqual(
                'ajustar-tamanho-fonte'
            );
            expect(resultadoAvaliadorSintatico[0].modificadores[0].propriedadeCss)
                .toStrictEqual('font-size-adjust');
            expect(resultadoAvaliadorSintatico[0].modificadores[0].valor)
                .toStrictEqual('0.5');
        });

        it('Tradutor - Caso de Sucesso', () => {
            const resultado = lexador.mapear([
                "lmht {",
                "    ajustar-tamanho-fonte: 0.5mm;",
                "}"
            ]);

            const resultadoAvaliadorSintatico = avaliador.analisar(resultado.simbolos);

            const resultadoTradutor = tradutor.traduzir(resultadoAvaliadorSintatico);

            expect(resultadoTradutor).toBeTruthy();
            expect(resultadoTradutor).toContain("html");
            expect(resultadoTradutor).toContain("font-size-adjust");
            expect(resultadoTradutor).toContain("0.5mm");
        });

        it('Lexador - Caso de Falha: sem valor e quantificador', () => {
            const resultado = lexador.mapear([
                "lmht {",
                "    ajustar-tamanho-fonte: ;",
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
                "    ajusar-tamanho-fote: 0.5mm;",
                "}"
            ]);

            expect(() => {
                avaliador.analisar(resultado.simbolos);
            }).toThrow("O seletor 'ajusar-tamanho-fote' não foi encontrado.");
        });

        it('Tradutor - Caso de Falha', () => {
            const resultado = lexador.mapear([
                "lmht {",
                "    ajusar-tamanho-fote: 0.5mm;",
                "}"
            ]);

            expect(() => {
                tradutor.traduzir(avaliador.analisar(resultado.simbolos));
            }).toHaveLength(0);
        });
    });
});
