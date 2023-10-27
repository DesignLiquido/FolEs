import { AvaliadorSintatico } from "../../fontes/avaliador-sintatico";
import { Importador } from "../../fontes/importador";
import { AvaliadorSintaticoInterface, ImportadorInterface, LexadorInterface } from "../../fontes/interfaces";
import { Lexador } from "../../fontes/lexador";
import { SeletorModificador } from "../../fontes/modificadores/superclasse";
import tiposDeSimbolos from "../../fontes/tipos-de-simbolos/foles";
import { Tradutor } from "../../fontes/serializadores";
import { ValorNumerico } from "../listas/valor-numerico";

describe('Testando Seletores que recebem VALOR NUMÉRICO como atributo', () => {
    const atributos = [
        '1', '10', '0.5', '0'
    ];

    describe('Testes Unitários', () => {
        let lexador: LexadorInterface;
        let importador: ImportadorInterface;
        let avaliador: AvaliadorSintaticoInterface;
        let tradutor: Tradutor;

        beforeEach(() => {
            lexador = new Lexador();
            importador = new Importador(lexador);
            avaliador = new AvaliadorSintatico(importador);
            tradutor = new Tradutor();
        });

        it('Casos de sucesso - Lexador, Avaliador e Tradutor', () => {
            for (let index = 0; index < ValorNumerico.length; index += 1) {
                const seletor = new SeletorModificador(ValorNumerico[index], '1');

                // Lexador
                const resultadoLexador = lexador.mapear([
                    "corpo {",
                    `${ValorNumerico[index]}: ${seletor['valor']};`,
                    "}"
                ]);

                expect(resultadoLexador.simbolos).toHaveLength(7);
                expect(resultadoLexador.simbolos).toEqual(
                    expect.arrayContaining([
                        expect.objectContaining({ tipo: tiposDeSimbolos.NUMERO }),
                    ])
                );

                // Avaliador Sintático - AINDA NÃO ACEITA VALORES NUMÉRICOS S/ QUANTIFICADOR
                // STATUS: Aguardando resolução de Issue #57 para descomentar as linhas abaixo
                
                // const resultadoAvaliadorSintatico = avaliador.analisar(resultadoLexador.simbolos);

                // expect(resultadoAvaliadorSintatico[0].modificadores[0].nomeFoles).toStrictEqual(
                //     seletor['nomeFoles']
                // );
                // expect(resultadoAvaliadorSintatico[0].modificadores[0].propriedadeCss).toStrictEqual(
                //     seletor['propriedadeCss']
                // );


                // // Tradutor
                // const resultadoTradutor = tradutor.traduzir(resultadoAvaliadorSintatico);

                // expect(resultadoTradutor).toContain(seletor['propriedadeCss']);
            }
        });

        it('Casos de Falha - Lexador, Avaliador e Tradutor', () => {
            for (let index = 0; index < Object.keys(ValorNumerico).length; index += 1) {
                
                // Lexador - valor numérico não informado
                const resultadoLexador = lexador.mapear([
                    "lmht {",
                    `${ValorNumerico[index]}: ;`,
                    "}"
                ]);

                expect(resultadoLexador.simbolos).not.toEqual(
                    expect.arrayContaining([
                        expect.objectContaining({ tipo: tiposDeSimbolos.NUMERO }),
                    ])
                );

                // Causar erro de digitação
                // const seletorIncorreto = ValorNumerico[index].replace(ValorNumerico[index][0], '')

                // const novoLexador = lexador.mapear([
                //     "lmht {",
                //     `${seletorIncorreto}: 1.5;`,
                //     "}"
                // ]);

                // // Avaliador Sintático - Erro esperado como retorno
                // expect(() => {
                //     avaliador.analisar(novoLexador.simbolos);
                // }).toThrow(`O seletor '${seletorIncorreto}' não existe.`);


                // // Tradutor - Não deve traduzir devido ao erro do Avaliador Sintático
                // expect(() => {
                //     tradutor.traduzir(avaliador.analisar(novoLexador.simbolos));
                // }).toHaveLength(0);
            }
        });
    });
});
