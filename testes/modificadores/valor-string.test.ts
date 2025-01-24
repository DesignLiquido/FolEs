import { AvaliadorSintatico } from "../../fontes/avaliador-sintatico";
import { Importador } from "../../fontes/importador";
import { AvaliadorSintaticoInterface, ImportadorInterface, LexadorInterface } from "../../fontes/interfaces";
import { Lexador } from "../../fontes/lexador";
import { SeletorModificador } from "../../fontes/modificadores/superclasse";
import tiposDeSimbolos from "../../fontes/tipos-de-simbolos/foles";
import { Serializador } from "../../fontes/serializadores";
import { ValorString } from "../listas/valor-string";

describe('Testando Seletores com VALORES STRING', () => {
    describe('Testes Unitários', () => {
        let lexador: LexadorInterface;
        let importador: ImportadorInterface;
        let avaliadorSintatico: AvaliadorSintaticoInterface;
        let tradutor: Serializador;

        beforeEach(() => {
            lexador = new Lexador();
            importador = new Importador(lexador);
            avaliadorSintatico = new AvaliadorSintatico(importador);
            tradutor = new Serializador();
        });

        it('Casos de sucesso - Lexador, Avaliador e Tradutor', () => {
            for (let index = 0; index < Object.keys(ValorString).length; index += 1) {

                const valoresString = [
                    "'x'",
                    '"«" "»" "‹" "›"',
                    "'foo'",
                    "'/25B2'",
                ];

                for (let valIndex = 0; valIndex < valoresString.length; valIndex += 1) {
                    // Lexador
                    const resultadoLexador = lexador.mapear([
                        "corpo {",
                        `${ValorString[index]}: ${valoresString[valIndex]};`,
                        "}"
                    ]);

                    if (valIndex !== 1) {
                        expect(resultadoLexador.simbolos).toHaveLength(7);
                    } else {
                        expect(resultadoLexador.simbolos).toHaveLength(10);
                    }

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
                    expect(resultadoAvaliadorSintatico[0].modificadores[0].nomeFoles).toContain(ValorString[index]);
                    expect(resultadoAvaliadorSintatico[0].modificadores[0].valor).toContain(valoresString[valIndex]);                    
                    
                    // Tradutor
                    const resultadoTradutor = tradutor.serializar(resultadoAvaliadorSintatico);
                    expect(resultadoTradutor).toContain(valoresString[valIndex]);
                }
            }
        });
    });
});
