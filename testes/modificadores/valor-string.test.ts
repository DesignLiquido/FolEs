import { AvaliadorSintatico } from "../../fontes/avaliador-sintatico";
import { Importador } from "../../fontes/importador";
import { AvaliadorSintaticoInterface, ImportadorInterface, LexadorInterface } from "../../fontes/interfaces";
import { Lexador } from "../../fontes/lexador";
import tiposDeSimbolos from "../../fontes/tipos-de-simbolos/foles";
import { Resolvedor } from "../../fontes/resolvedores";
import { ValorString, ValorStringAcentuado } from "../../fontes/listas/valor-string";
import { BlocoDeclaracao } from "../../fontes/declaracoes";
import { ValorTexto } from "../../fontes/valores";

describe('Testando Seletores com VALORES STRING', () => {
    let lexador: LexadorInterface;
    let importador: ImportadorInterface;
    let avaliadorSintatico: AvaliadorSintaticoInterface;
    let serializador: Resolvedor;

    beforeEach(() => {
        lexador = new Lexador();
        importador = new Importador(lexador);
        avaliadorSintatico = new AvaliadorSintatico(importador);
        serializador = new Resolvedor();
    });

    // TODO: Corrigir teste.
    it('Caso de sucesso - Lexador, Avaliador e Tradutor', () => {
        for (let index = 0; index < Object.keys(ValorString).length; index += 1) {

            const valoresString = [
                "'x'",
                "'foo'",
                "'/25B2'",
                // '"«" "»" "‹" "›"',
            ];

            for (let valIndex = 0; valIndex < valoresString.length; valIndex += 1) {
                // Lexador
                const resultadoLexador = lexador.mapear([
                    "corpo {",
                    `${ValorString[index]}: ${valoresString[valIndex]};`,
                    "}"
                ]);

                expect(resultadoLexador.simbolos).toHaveLength(7);

                if (valIndex < 1) {
                    expect(resultadoLexador.simbolos).toEqual(
                        expect.arrayContaining([
                            expect.objectContaining({ tipo: tiposDeSimbolos.TEXTO }),
                        ])
                    );
                } else {
                    expect(resultadoLexador.simbolos).toEqual(
                        expect.arrayContaining([
                            expect.objectContaining({ tipo: tiposDeSimbolos.IDENTIFICADOR }),
                        ])
                    );
                }

                // Avaliador Sintático
                const resultadoAvaliadorSintatico = avaliadorSintatico.analisar(resultadoLexador.simbolos);
                // O Avaliador deve montar um objeto com os devidos nomes FolEs e CSS
                expect(resultadoAvaliadorSintatico.length).toBeGreaterThanOrEqual(1);
                const primeiroResultado = resultadoAvaliadorSintatico[0];
                expect(primeiroResultado).toBeInstanceOf(BlocoDeclaracao);
    
                const primeiroResultadoTipado = primeiroResultado as BlocoDeclaracao;
                expect(primeiroResultadoTipado.modificadores.length).toBeGreaterThanOrEqual(1);
                expect(primeiroResultadoTipado.modificadores[0].nomeFoles).toContain(ValorString[index]);
                expect(primeiroResultadoTipado.modificadores[0].valores.length).toBeGreaterThan(0);
                const valor = primeiroResultadoTipado.modificadores[0].valores[0];
                expect(valor).toBeInstanceOf(ValorTexto);

                const valorTipado = valor as ValorTexto;
                expect(valorTipado.literalTexto).toContain(valoresString[valIndex]);

                // Serializador
                const resultadoSerializacao = serializador.resolver(resultadoAvaliadorSintatico);
                expect(resultadoSerializacao).toContain(valoresString[valIndex]);
            }
        }
    });

    it('Caso de falha - Avaliador sintático deve retornar erro', () => {
        for (let index = 0; index < Object.keys(ValorStringAcentuado).length; index += 1) {
            // Lexador
            const resultadoLexador = lexador.mapear([
                "corpo {",
                `${ValorStringAcentuado[index]}: x;`,
                "}"
            ]);

            // Avaliador Sintático não deve aceitar o valor string sem aspas
            avaliadorSintatico.analisar(resultadoLexador.simbolos);
            expect(avaliadorSintatico.erros.length).toBeGreaterThan(0);
            expect(avaliadorSintatico.erros[0].message).toContain(`Modificador ou variável '${ValorStringAcentuado[index]}' com valor 'x' inválido`);
        }
    });
});
