import { AvaliadorSintatico } from "../../fontes/avaliador-sintatico";
import { Importador } from "../../fontes/importador";
import { AvaliadorSintaticoInterface, ImportadorInterface, LexadorInterface } from "../../fontes/interfaces";
import { Lexador } from "../../fontes/lexador";
import tiposDeSimbolos from "../../fontes/tipos-de-simbolos/foles";
import { Serializador } from "../../fontes/serializadores";
import { Pseudoclasses } from "../listas/pseudoclasses";

describe('Testando Seletores com PSEUDOCLASSES', () => {
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

        it('Caso de sucesso - Lexador, Avaliador e Tradutor', () => {
            for (let index = 0; index < Pseudoclasses.length; index += 1) {
                // Lexador
                const resultadoLexador = lexador.mapear([
                    `divisão:${Pseudoclasses[index]} {`,
                    'tamanho-fonte: 12px;',
                    "}"
                ]);

                // O Lexador deve montar um objeto de comprimento 7 sem retornar nenhum erro
                expect(resultadoLexador.simbolos).toHaveLength(10);
                expect(resultadoLexador.erros).toHaveLength(0);

                // O Lexador deve mapear o tipo de símbolo Pseudoclasse
                expect(resultadoLexador.simbolos).toEqual(
                    expect.arrayContaining([
                        expect.objectContaining({ tipo: tiposDeSimbolos.PSEUDO_CLASSE }),
                    ])
                );

                // Avaliador Sintático
                const resultadoAvaliadorSintatico = avaliador.analisar(resultadoLexador.simbolos);

                // Serializador
                const resultadoTradutor = tradutor.serializar(resultadoAvaliadorSintatico);

                // O Serializador deve traduzir devidamente os termos
                expect(resultadoTradutor).toContain('div');
                expect(resultadoTradutor).toContain(resultadoAvaliadorSintatico[0].seletores[0].pseudoclasse.pseudoclasseCss);
                expect(resultadoTradutor).toContain('12px;');
            }
        });

        it('Caso de falha - Pseudoclasse inexistente', () => {
            for (let index = 0; index < Pseudoclasses.length; index += 1) {
                // Causar erro de digitação
                const pseudoclasseIncorreta = Pseudoclasses[index].replace(Pseudoclasses[index][0], '');

                // Lexador
                const resultadoLexador = lexador.mapear([
                    `divisão:${pseudoclasseIncorreta} {`,
                        'tamanho-fonte: 12px;',
                    "}"
                ]);

                // Avaliador Sintático - Erro esperado como retorno
                expect(() => {
                    avaliador.analisar(resultadoLexador.simbolos);
                }).toThrow('Esperado nome de pseudoclasse');

                // Serializador - Não deve traduzir devido ao erro do Avaliador Sintático
                expect(() => {
                    tradutor.serializar(avaliador.analisar(resultadoLexador.simbolos));
                }).toHaveLength(0);
            }
        });
    });
});
