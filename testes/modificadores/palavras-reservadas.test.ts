import { AvaliadorSintatico } from "../../fontes/avaliador-sintatico";
import { Importador } from "../../fontes/importador";
import { AvaliadorSintaticoInterface, ImportadorInterface, LexadorInterface } from "../../fontes/interfaces";
import { Lexador } from "../../fontes/lexador";
import { SeletorModificador } from "../../fontes/modificadores/superclasse";
import tiposDeSimbolos from "../../fontes/tipos-de-simbolos/foles";
import { Resolvedor } from "../../fontes/resolvedores";
import { PalavrasReservadas } from "../../fontes/listas/palavras-reservadas";
import { BlocoDeclaracao } from "../../fontes/declaracoes";
import { ValorQualitativo } from "../../fontes/valores";

describe('Testando Seletores que recebem PALAVRAS RESERVADAS como atributo', () => {
    describe('Testes Unitários', () => {
        let lexador: LexadorInterface;
        let importador: ImportadorInterface;
        let avaliador: AvaliadorSintaticoInterface;
        let tradutor: Resolvedor;

        beforeEach(() => {
            lexador = new Lexador();
            importador = new Importador(lexador);
            avaliador = new AvaliadorSintatico(importador);
            tradutor = new Resolvedor();
        });

        it('Caso de sucesso - Valores globais válidos', () => {
            for (let index = 0; index < Object.keys(PalavrasReservadas).length; index += 1) {
                const seletor = new SeletorModificador(
                    PalavrasReservadas[index], 
                    [new ValorQualitativo('reverter')]
                ) as any;

                // Lexador
                const resultadoLexador = lexador.mapear([
                    "corpo {",
                    `${PalavrasReservadas[index]}: reverter;`,
                    "}"
                ]);

                // O modificador deve aceitar o valor global
                // expect(seletor['valor']).toEqual('reverter');

                // O Lexador deve montar um objeto de comprimento 7 sem retornar nenhum erro
                expect(resultadoLexador.simbolos).toHaveLength(7);
                expect(resultadoLexador.erros).toHaveLength(0);

                // O Lexador deve classificar o valor como QUALITATIVO
                expect(resultadoLexador.simbolos).toEqual(
                    expect.arrayContaining([
                        expect.objectContaining({ tipo: tiposDeSimbolos.QUALITATIVO }),
                    ])
                );

                // O Lexador não deve encontrar qualquer número ou quantificador na operação
                expect(resultadoLexador.simbolos).not.toEqual(
                    expect.arrayContaining([
                        expect.objectContaining({ tipo: tiposDeSimbolos.QUANTIFICADOR }),
                        expect.objectContaining({ tipo: tiposDeSimbolos.NUMERO }),
                    ])
                );

                // Avaliador Sintático
                const resultadoAvaliadorSintatico = avaliador.analisar(resultadoLexador.simbolos);

                // O Avaliador deve montar um objeto com os devidos nomes FolEs e CSS
                expect(resultadoAvaliadorSintatico.length).toBeGreaterThanOrEqual(1);
                const primeiroResultado = resultadoAvaliadorSintatico[0];
                expect(primeiroResultado).toBeInstanceOf(BlocoDeclaracao);
                const primeiroResultadoTipado = primeiroResultado as BlocoDeclaracao;
                expect(primeiroResultadoTipado.modificadores.length).toBeGreaterThanOrEqual(1);
                expect(primeiroResultadoTipado.modificadores[0].nomeFoles).toStrictEqual(
                    seletor['nomeFoles']
                );
                expect(primeiroResultadoTipado.modificadores[0].propriedadeCss).toStrictEqual(
                    seletor['propriedadeCss']
                );


                // Tradutor
                const resultadoTradutor = tradutor.resolver(resultadoAvaliadorSintatico);

                expect(resultadoTradutor).toContain('body');
                expect(resultadoTradutor).toContain(seletor['propriedadeCss']);
                expect(resultadoTradutor).toContain('revert');
            }
        });

        it('Caso de sucesso - passando valores aceitos', () => {
            for (let index = 0; index < Object.keys(PalavrasReservadas).length; index += 1) {
                // Seletor inicial
                let seletor = new SeletorModificador(
                    PalavrasReservadas[index], 
                    [new ValorQualitativo('reverter')]
                ) as any;

                // Se há uma lista de valores aceitos, é atribuído o primeiro valor ao seletor.
                // Se não há, a condicional abaixo não é executada e o seletor segue sendo o da linha acima.
                if (seletor['valoresAceitos'] !== undefined) {
                    const valor = Object.keys(seletor['valoresAceitos']);
                    seletor = new SeletorModificador(
                        PalavrasReservadas[index], 
                        [new ValorQualitativo(valor[0])]
                    );
                };

                // Lexador
                const resultadoLexador = lexador.mapear([
                    "corpo {",
                    `${PalavrasReservadas[index]}: reverter;`,
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

                // O Lexador deve classificar o valor recebido como IDENTIFICADOR
                expect(resultadoLexador.simbolos).toEqual(
                    expect.arrayContaining([
                        expect.objectContaining({ tipo: tiposDeSimbolos.IDENTIFICADOR }),
                    ])
                );


                // Avaliador Sintático deve conter os nomes FolEs e CSS corretamente
                const resultadoAvaliadorSintatico = avaliador.analisar(resultadoLexador.simbolos);

                // O Avaliador deve montar um objeto com os devidos nomes FolEs e CSS
                expect(resultadoAvaliadorSintatico.length).toBeGreaterThanOrEqual(1);
                const primeiroResultado = resultadoAvaliadorSintatico[0];
                expect(primeiroResultado).toBeInstanceOf(BlocoDeclaracao);
                const primeiroResultadoTipado = primeiroResultado as BlocoDeclaracao;
                expect(primeiroResultadoTipado.modificadores.length).toBeGreaterThanOrEqual(1);
                expect(primeiroResultadoTipado.modificadores[0].nomeFoles).toStrictEqual(
                    seletor['nomeFoles']
                );
                expect(primeiroResultadoTipado.modificadores[0].propriedadeCss).toStrictEqual(
                    seletor['propriedadeCss']
                );

                // Tradutor deve tranformar o código corretamente em CSS
                const resultadoTradutor = tradutor.resolver(resultadoAvaliadorSintatico);

                expect(resultadoTradutor).toContain('body');
                expect(resultadoTradutor).toContain(seletor['propriedadeCss']);
            }
        });

        it('Caso de falha - Palavra reservada não informada', () => {
            for (let index = 0; index < Object.keys(PalavrasReservadas).length; index += 1) {
                // Lexador
                const resultadoLexador = lexador.mapear([
                    "corpo {",
                    `${PalavrasReservadas[index]}: ;`,
                    "}"
                ]);

                // Não deve montar o objeto corretamente
                expect(resultadoLexador.simbolos).not.toHaveLength(7);

                // Não deve encontrar nenhum QUALITATIVO na operação
                expect(resultadoLexador.simbolos).not.toEqual(
                    expect.arrayContaining([
                        expect.objectContaining({ tipo: tiposDeSimbolos.QUALITATIVO }),
                    ])
                );

                // Av. Sintático deve retornar um erro 
                expect(() => {
                    avaliador.analisar(resultadoLexador.simbolos);
                }).toThrow();
            }
        });
    });

});
