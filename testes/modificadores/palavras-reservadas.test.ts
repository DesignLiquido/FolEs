import { AvaliadorSintatico } from "../../fontes/avaliador-sintatico";
import { Lexador } from "../../fontes/lexador";
import { SeletorModificador } from "../../fontes/modificadores/superclasse";
import tiposDeSimbolos from "../../fontes/tipos-de-simbolos/foles";
import { Tradutor } from "../../fontes/tradutor";
import { PalavrasReservadas } from "../listas/palavras-reservadas";

describe('Testando Seletores que recebem PALAVRAS RESERVADAS como atributo', () => {
    describe('Testes Unitários', () => {
        let lexador: Lexador;
        let avaliador: AvaliadorSintatico;
        let tradutor: Tradutor;

        beforeEach(() => {
            lexador = new Lexador();
            avaliador = new AvaliadorSintatico();
            tradutor = new Tradutor();
        });

        it('Testando seletores de Palavras Reservadas com valores globais', () => {
            for (let index = 0; index < Object.keys(PalavrasReservadas).length; index += 1) {
                const seletor = new SeletorModificador(PalavrasReservadas[index], 'reverter', null);

                // Lexador
                const resultadoLexador = lexador.mapear([
                    "corpo {",
                    `${PalavrasReservadas[index]}: ${seletor['valor']};`,
                    "}"
                ]);

                // O modificador deve aceitar o valor global
                expect(seletor['valor']).toEqual('reverter');

                // O Lexador deve montar um objeto de comprimento 7 sem retornar nenhum erro
                expect(resultadoLexador.simbolos).toHaveLength(7);
                expect(resultadoLexador.erros).toHaveLength(0);

                // O Lexador não deve encontrar qualquer número ou quantificador na operação
                expect(resultadoLexador.simbolos).not.toEqual(
                    expect.arrayContaining([
                        expect.objectContaining({ tipo: tiposDeSimbolos.QUANTIFICADOR }),
                        expect.objectContaining({ tipo: tiposDeSimbolos.NUMERO }),
                    ])
                );

                // // Avaliador Sintático
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
                // expect(resultadoTradutor).toContain('inherit');
            }
        });

        it('Testando seletores de Palavras Reservadas com os referidos valores aceitos', () => {
            for (let index = 0; index < Object.keys(PalavrasReservadas).length; index += 1) {
                let seletor = new SeletorModificador(PalavrasReservadas[index], 'reverter', null);

                // Se há uma lista de valores aceitos, é atribuído o primeiro valor ao seletor.
                // Se não há, a condicional abaixo não é executada e o seletor segue sendo o da linha acima.
                if(seletor['valoresAceitos'] !== undefined) {
                    const valor = Object.keys(seletor['valoresAceitos']);
                    seletor = new SeletorModificador(
                        PalavrasReservadas[index], valor[0], null
                    );
                };

                // Lexador
                const resultadoLexador = lexador.mapear([
                    "corpo {",
                    `${PalavrasReservadas[index]}: ${seletor['valor']};`,
                    "}"
                ]);

                // O Lexador deve montar um objeto de comprimento 7 sem retornar nenhum erro
                expect(resultadoLexador.simbolos).toHaveLength(7);
                expect(resultadoLexador.erros).toHaveLength(0);

                // O Lexador não deve encontrar qualquer número ou quantificador na operação
                expect(resultadoLexador.simbolos).not.toEqual(
                    expect.arrayContaining([
                        expect.objectContaining({ tipo: tiposDeSimbolos.QUANTIFICADOR }),
                        expect.objectContaining({ tipo: tiposDeSimbolos.NUMERO }),
                    ])
                );
            }
        });
    });
});
