import { AvaliadorSintatico } from "../../fontes/avaliador-sintatico";
import { Importador } from "../../fontes/importador";
import { AvaliadorSintaticoInterface, ImportadorInterface, LexadorInterface } from "../../fontes/interfaces";
import { Lexador } from "../../fontes/lexador";
import { SeletorModificador } from "../../fontes/modificadores/superclasse";
import tiposDeSimbolos from "../../fontes/tipos-de-simbolos/foles";
import { Serializador } from "../../fontes/serializadores";
import { Posição } from "../listas/posição";
import { BlocoDeclaracao } from "../../fontes/declaracoes";

describe('Testando Seletores de POSIÇÃO', () => {
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

        it('Casos de sucesso - Lexador, Avaliador e Tradutor', () => {
            for (let index = 0; index < Posição.length; index += 1) {
                const seletor = new SeletorModificador(Posição[index], 'centro', null);

                // Lexador
                const resultadoLexador = lexador.mapear([
                    "corpo {",
                    `${Posição[index]}: ${seletor['valor']};`,
                    "}"
                ]);

                // O modificador deve aceitar 'centro' como valor
                expect(seletor['valor']).toEqual('centro');

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

                // O Lexador deve classificar o valor recebido como QUALITATIVO
                expect(resultadoLexador.simbolos).toEqual(
                    expect.arrayContaining([
                        expect.objectContaining({ tipo: tiposDeSimbolos.QUALITATIVO }),
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


                // // Tradutor
                const resultadoTradutor = tradutor.serializar(resultadoAvaliadorSintatico);

                expect(resultadoTradutor).toContain('body');
                expect(resultadoTradutor).toContain(seletor['propriedadeCss']);
                expect(resultadoTradutor).toContain('center;');
            }
        });

        it('Casos de Falha - Valor não informado', () => {
            for (let index = 0; index < Object.keys(Posição).length; index += 1) {

                // Lexador - Posição não informada
                const resultadoLexador = lexador.mapear([
                    "lmht {",
                    `${Posição[index]}: ;`,
                    "}"
                ]);

                // O objeto do Lexados não deve ser montado corretamente
                expect(resultadoLexador.simbolos).not.toHaveLength(7);
                expect(resultadoLexador.simbolos).not.toEqual(
                    expect.arrayContaining([
                        expect.objectContaining({ tipo: tiposDeSimbolos.QUALITATIVO }),
                    ])
                );

                // O Avaliador Sintático deve retornar um erro
                expect(() => {
                    avaliador.analisar(resultadoLexador.simbolos);
                }).toThrow(`Esperado ';' após declaração de valor de modificador '${Posição[index]}'.`);
            }
        });

        it('Casos de Falha - Seletor com erro de digitação', () => {
            for (let index = 0; index < Object.keys(Posição).length; index += 1) {
                // Causar erro de digitação
                const seletorIncorreto = Posição[index].replace(Posição[index][0], '')

                const resultadoLexador = lexador.mapear([
                    "lmht {",
                    `${seletorIncorreto}: esquerda;`,
                    "}"
                ]);

                // Avaliador Sintático - Erro esperado como retorno
                expect(() => {
                    avaliador.analisar(resultadoLexador.simbolos);
                }).toThrow(`O seletor '${seletorIncorreto}' não existe.`);


                // Tradutor - Não deve traduzir devido ao erro do Avaliador Sintático
                expect(() => {
                    tradutor.serializar(avaliador.analisar(resultadoLexador.simbolos));
                }).toHaveLength(0);
            }
        });
    });
});
