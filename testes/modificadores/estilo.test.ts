import { AvaliadorSintatico } from "../../fontes/avaliador-sintatico";
import { Importador } from "../../fontes/importador";
import { AvaliadorSintaticoInterface, ImportadorInterface, LexadorInterface } from "../../fontes/interfaces";
import { Lexador } from "../../fontes/lexador";
import { SeletorModificador } from "../../fontes/modificadores/superclasse";
import tiposDeSimbolos from "../../fontes/tipos-de-simbolos/foles";
import { Serializador } from "../../fontes/serializadores";
import { Estilo, EstiloBorda } from "../listas/estilo";
import { BlocoDeclaracao, DeclaracaoVariavel } from "../../fontes/declaracoes";
import { estilos } from "../../fontes/modificadores/atributos/estilo";

describe('Testando Seletores com ESTILO como atributo', () => {
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

        it('Casos de sucesso - Valor válido', () => {
            for (let index = 0; index < Estilo.length; index += 1) {
                const seletor = new SeletorModificador(Estilo[index], 'pontilhado', null);

                // Lexador
                const resultadoLexador = lexador.mapear([
                    "corpo {",
                    `${Estilo[index]}: ${seletor['valor']};`,
                    "}"
                ]);

                expect(resultadoLexador.simbolos).toHaveLength(7);
                expect(resultadoLexador.erros).toHaveLength(0);

                expect(resultadoLexador.simbolos).toEqual(
                    expect.arrayContaining([
                        expect.objectContaining({ tipo: tiposDeSimbolos.QUALITATIVO }),
                    ])
                );

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


                // // Tradutor
                const resultadoTradutor = tradutor.serializar(resultadoAvaliadorSintatico);

                expect(resultadoTradutor).toContain('body');

                expect(resultadoTradutor).toContain(seletor['propriedadeCss']);
                expect(resultadoTradutor).toContain('dotted');
            }
        });

        it('Casos de falha - Valor não informado', () => {
            for (let index = 0; index < Object.keys(Estilo).length; index += 1) {

                // Lexador - estilo não informado
                const resultadoLexador = lexador.mapear([
                    "lmht {",
                    `${Estilo[index]}: ;`,
                    "}"
                ]);

                expect(resultadoLexador.simbolos).not.toHaveLength(7);
                expect(resultadoLexador.simbolos).not.toEqual(
                    expect.arrayContaining([
                        expect.objectContaining({ tipo: tiposDeSimbolos.QUALITATIVO }),
                    ])
                );

                expect(() => {
                    avaliador.analisar(resultadoLexador.simbolos);
                }).toThrow(`Esperado ';' após declaração de valor de modificador '${Estilo[index]}'.`);
            }
        });

        it('Casos de falha - Seletor com erro de digitação', () => {
            for (let index = 0; index < Object.keys(Estilo).length; index += 1) {
                // Causar erro de digitação
                const seletorIncorreto = Estilo[index].replace(Estilo[index][0], '')

                const resultadoLexador = lexador.mapear([
                    "lmht {",
                    `${seletorIncorreto}: solido;`,
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

        it('Casos de falha - Valor inválido de estilo de borda deve retornar erro', () => {
            for (let index = 0; index < EstiloBorda.length; index += 1) {
                const valorInvalido = 'pontilado';

                // Lexador
                const resultadoLexador = lexador.mapear([
                    "corpo {",
                    `${EstiloBorda[index]}: ${valorInvalido};`,
                    "}"
                ]);

                // Avaliador Sintático
                expect(() => {
                    avaliador.analisar(resultadoLexador.simbolos);
                }).toThrowError(`Propriedade '${EstiloBorda[index]}' com valor ${valorInvalido} inválido.`);
            }
        });

        it('Casos de sucesso - Valores de estilo atribuídos por meio de variável', () => {
            const estilosFolEs = Object.keys(estilos);
            const estilosCss = Object.values(estilos);

            for (let index = 0; index < estilosFolEs.length; index += 1) {
                // Lexador
                const resultadoLexador = lexador.mapear([
                    `$estilo-padrao: ${estilosFolEs[index]};`,
                    "corpo {",
                        'contorno: $estilo-padrao;',
                    "}"
                ]);

                // O Lexador deve montar o objeto de acordo, sem retornar erros
                expect(resultadoLexador.simbolos).toHaveLength(13);
                expect(resultadoLexador.erros).toHaveLength(0);

                // O mapeamento do Lexador  deve conter o símbolo Variável
                expect(resultadoLexador.simbolos).toEqual(
                    expect.arrayContaining([
                        expect.objectContaining({ tipo: tiposDeSimbolos.VARIAVEL }),
                    ])
                );

                // O mapeamento do Lexador não deve conter números e/ou quantificadores
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
                expect(primeiroResultado).toBeInstanceOf(DeclaracaoVariavel);

                const segundoResultado = resultadoAvaliadorSintatico[1];
                const segundoResultadoTipado = segundoResultado as BlocoDeclaracao;
                expect(segundoResultadoTipado.modificadores.length).toBeGreaterThanOrEqual(1);
                expect(segundoResultadoTipado.modificadores[0].nomeFoles).toStrictEqual('contorno');
                expect(segundoResultadoTipado.modificadores[0].propriedadeCss).toStrictEqual('outline');

                // Tradutor
                const resultadoTradutor = tradutor.serializar(resultadoAvaliadorSintatico);
                expect(resultadoTradutor).toContain(estilosCss[index]);
            }
        });
    });
});
