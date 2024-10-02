import { AvaliadorSintatico } from "../../fontes/avaliador-sintatico";
import { Importador } from "../../fontes/importador";
import { AvaliadorSintaticoInterface, ImportadorInterface, LexadorInterface } from "../../fontes/interfaces";
import { Lexador } from "../../fontes/lexador";
import { Serializador } from "../../fontes/serializadores";
import { AtribuicaoAbreviadaVQ } from "../listas/atribuicao-abreviada";
import tiposDeSimbolos from "../../fontes/tipos-de-simbolos/foles";
import { SeletorModificador } from "../../fontes/modificadores/superclasse";

describe('Testando Seletores de Atribuição Abreviada, que recebem dois ou mais valores', () => {
    describe('Testes Unitários', () => {
        let lexador: LexadorInterface;
        let importador: ImportadorInterface;
        let avaliador: AvaliadorSintaticoInterface;
        let tradutor: Serializador;

        beforeEach(() => {
            lexador = new Lexador();
            importador = new Importador(lexador);
            avaliador = new AvaliadorSintatico(importador);
            tradutor = new Serializador();
        });
        it('Seletores que recebem múltiplos atributos do tipo valor-quantificador', () => {
            for (let index = 0; index < AtribuicaoAbreviadaVQ.length; index += 1) {
                const valoresAceitos = [
                    '1em',
                    '10vh 10vh',
                    '10px 50px 20px',
                    '10px 25px 10px 25px',
                ];
                
                for (let valIndex = 0; valIndex < valoresAceitos.length; valIndex += 1) {
                    const seletor = new SeletorModificador(AtribuicaoAbreviadaVQ[index], valoresAceitos[valIndex], 'px');
                    
                    // Lexador
                    const resultadoLexador = lexador.mapear([
                        "lmht {",
                            `${AtribuicaoAbreviadaVQ[index]}: ${valoresAceitos[valIndex]};`,
                        "}"
                    ]);

                    // O Lexador não deve encontrar erros
                    expect(resultadoLexador.erros).toHaveLength(0);

                    // O valor recebido deve conter tanto NUMERO quanto QUANTIFICADOR
                    expect(resultadoLexador.simbolos).toEqual(
                        expect.arrayContaining([
                            expect.objectContaining({ tipo: tiposDeSimbolos.NUMERO }),
                            expect.objectContaining({ tipo: tiposDeSimbolos.QUANTIFICADOR }),
                        ])
                    );

                    // Avaliador Sintático
                    const resultadoAvaliadorSintatico = avaliador.analisar(resultadoLexador.simbolos);
                    
                    // O Avaliador deve montar um objeto com os devidos nomes FolEs e CSS
                    expect(resultadoAvaliadorSintatico[0].modificadores[0].propriedadeCss).toStrictEqual(
                        seletor['propriedadeCss']
                    );
                    expect(resultadoAvaliadorSintatico[0].modificadores[0].nomeFoles).toStrictEqual(
                        seletor['nomeFoles']
                    );

                    // Tradutor
                    const resultadoTradutor = tradutor.serializar(resultadoAvaliadorSintatico);

                    // O Tradutor deve serializar de acordo
                    expect(resultadoTradutor).toContain('html');
                    expect(resultadoTradutor).toContain(seletor['propriedadeCss']);
                    expect(resultadoTradutor).toContain(valoresAceitos[valIndex]);
                }
            }
        });
    });
});
