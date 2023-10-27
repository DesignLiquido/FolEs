import { AvaliadorSintatico } from "../../fontes/avaliador-sintatico";
import { Importador } from "../../fontes/importador";
import { ImportadorInterface, LexadorInterface } from "../../fontes/interfaces";
import { Lexador } from "../../fontes/lexador";
import { SeletorModificador } from "../../fontes/modificadores/superclasse";
import tiposDeSimbolos from "../../fontes/tipos-de-simbolos/foles";
import { Serializador } from "../../fontes/serializadores";
import { TraducaoUrl, Url } from "../listas/url";

describe('Testando Seletores que recebem URL como atributo', () => {
    describe('Testes Unitários', () => {
        let lexador: LexadorInterface;
        let importador: ImportadorInterface;
        let avaliador: AvaliadorSintatico;
        let tradutor: Serializador;

        beforeEach(() => {
            lexador = new Lexador();
            importador = new Importador(lexador);
            avaliador = new AvaliadorSintatico(importador);
            tradutor = new Serializador();
        });

        it('Casos de sucesso - Lexador, Avaliador e Tradutor', () => {
            const URLexemplo = 'url("https://www.showmetech.com.br/wp-content/uploads//2018/12/email_ss_1920-1920x1024.png")';

            for (let index = 0; index < Url.length; index += 1) {
                // Lexador
                const resultadoLexador = lexador.mapear([
                    "lmht {",
                    `${Url[index]}: ${URLexemplo};`,
                    "}"
                ]);

                expect(resultadoLexador.simbolos).toHaveLength(10);
                expect(resultadoLexador.simbolos).toEqual(
                    expect.arrayContaining([
                        expect.objectContaining({ tipo: tiposDeSimbolos.METODO }),
                    ])
                );

                // Avaliador Sintático
                const resultadoAvaliadorSintatico = avaliador.analisar(resultadoLexador.simbolos);

                expect(resultadoAvaliadorSintatico[0].modificadores[0].propriedadeCss).toStrictEqual(
                    TraducaoUrl[Url[index]]
                );


                // Tradutor
                const resultadoTradutor = tradutor.serializar(resultadoAvaliadorSintatico);

                expect(resultadoTradutor).toContain(TraducaoUrl[Url[index]]);
                expect(resultadoTradutor).toContain('url');
            }
        });

        it('Casos de Falha - Lexador, Avaliador e Tradutor', () => {
            for (let index = 0; index < Url.length; index += 1) {
                // Lexador - URL não informada
                const resultadoLexador = lexador.mapear([
                    "lmht {",
                    `${Url[index]}: ;`,
                    "}"
                ]);

                expect(resultadoLexador.simbolos).not.toEqual(
                    expect.arrayContaining([
                        expect.objectContaining({ tipo: tiposDeSimbolos.METODO }),
                    ])
                );

                // Causar erro de digitação
                const seletorIncorreto = Url[index].replace(Url[index][0], '')

                const novoLexador = lexador.mapear([
                    "lmht {",
                    `${seletorIncorreto}: 'url("img_tree.gif")';`,
                    "}"
                ]);

                // Avaliador Sintático - Erro esperado como retorno
                expect(() => {
                    avaliador.analisar(novoLexador.simbolos);
                }).toThrow(`O seletor '${seletorIncorreto}' não existe.`);


                // Tradutor - Não deve traduzir devido ao erro do Avaliador Sintático
                expect(() => {
                    tradutor.serializar(avaliador.analisar(novoLexador.simbolos));
                }).toHaveLength(0);
            }
        });
    });
});
