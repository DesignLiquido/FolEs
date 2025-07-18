import { AvaliadorSintatico } from "../../fontes/avaliador-sintatico";
import { Importador } from "../../fontes/importador";
import { AvaliadorSintaticoInterface, ImportadorInterface, LexadorInterface } from "../../fontes/interfaces";
import { Lexador } from "../../fontes/lexador";
import { Serializador } from "../../fontes/serializadores";
import { AtribuicaoAbreviadaPR, AtribuicaoAbreviadaPREspecificas, AtribuicaoAbreviadaVQ, AtribuicaoAbreviadaVQePR, AtribuicaoSeparadaPorBarra, AtribuicaoSeparadaPorVirgula } from "../listas/atribuicao-abreviada";
import tiposDeSimbolos from "../../fontes/tipos-de-simbolos/foles";
import { SeletorModificador } from "../../fontes/modificadores/superclasse";
import { BlocoDeclaracao } from "../../fontes/declaracoes";
import { ValorNumerico, ValorQualitativo } from "../../fontes/valores";

describe('Testando Seletores de Atribuição Abreviada, que recebem dois ou mais valores', () => {
    describe('Testes Unitários', () => {
        let lexador: LexadorInterface;
        let importador: ImportadorInterface;
        let avaliador: AvaliadorSintaticoInterface;
        let serializador: Serializador;

        beforeEach(() => {
            lexador = new Lexador();
            importador = new Importador(lexador);
            avaliador = new AvaliadorSintatico(importador);
            serializador = new Serializador();
        });

        it('Seletores que recebem múltiplos atributos do tipo valor-quantificador', () => {
            for (let index = 0; index < AtribuicaoAbreviadaVQ.length; index += 1) {
                const nomeModificador = AtribuicaoAbreviadaVQ[index];
                const valoresAceitos = [
                    [new ValorNumerico(nomeModificador, 1, 'em')],
                    [new ValorNumerico(nomeModificador, 10, 'vh'), new ValorNumerico(nomeModificador, 10, 'vh')],
                    [new ValorNumerico(nomeModificador, 10, 'px'), new ValorNumerico(nomeModificador, 50, 'px'), new ValorNumerico(nomeModificador, 20, 'px')],
                    [new ValorNumerico(nomeModificador, 10, 'px'), new ValorNumerico(nomeModificador, 25, 'px'), new ValorNumerico(nomeModificador, 10, 'px'), new ValorNumerico(nomeModificador, 25, 'px')],
                ];

                for (let valIndex = 0; valIndex < valoresAceitos.length; valIndex += 1) {
                    const seletor = new SeletorModificador(
                        AtribuicaoAbreviadaVQ[index], 
                        valoresAceitos[valIndex]
                    );

                    let valoresResolvidos = valoresAceitos[valIndex].reduce((acumulador, proximo) => acumulador += `${proximo.literalNumerico}${proximo.quantificador || ""} `, "");
                    valoresResolvidos = valoresResolvidos.slice(0, -1);
                    const codigo = [
                        "lmht {",
                        `${AtribuicaoAbreviadaVQ[index]}: ${valoresResolvidos};`,
                        "}"
                    ];

                    // Lexador
                    const resultadoLexador = lexador.mapear(codigo);

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

                    // Serializador
                    const resultadoSerializacao = serializador.serializar(resultadoAvaliadorSintatico);

                    // O Serializador deve serializar de acordo
                    expect(resultadoSerializacao).toContain('html');
                    expect(resultadoSerializacao).toContain(seletor['propriedadeCss']);
                    expect(resultadoSerializacao).toContain(valoresResolvidos);
                }
            }
        });

        // TODO: Corrigir teste.
        it.skip('Seletores que recebem múltiplas palavras reservadas como atributo', () => {
            for (let index = 0; index < AtribuicaoAbreviadaPR.length; index += 1) {
                let seletor: any;
                if (index <= 5) {
                    seletor = new SeletorModificador(
                        AtribuicaoAbreviadaPR[index], 
                        [new ValorNumerico(AtribuicaoAbreviadaPR[index], 10, 'px')]
                    );
                } else if (index > 5 && index <= 7) {
                    seletor = new SeletorModificador(
                        AtribuicaoAbreviadaPR[index], 
                        [new ValorQualitativo('tracejado')], 
                        null
                    );
                } else {
                    seletor = new SeletorModificador(
                        AtribuicaoAbreviadaPR[index], 
                        [new ValorQualitativo('centro')], 
                        null
                    );
                }

                const valoresAceitos: Array<string> = Object.keys(seletor.valoresAceitos);
                let valorPR: string = '';
                for (let valIndex = 0; valIndex < 2; valIndex += 1) {
                    valorPR += valoresAceitos[valIndex];
                    if (valIndex < 1) {
                        valorPR += ' ';
                    }
                }
                
                // Lexador
                const resultadoLexador = lexador.mapear([
                    "lmht {",
                    `${AtribuicaoAbreviadaPR[index]}: ${valorPR};`,
                    "}"
                ]);

                // O Lexador não deve encontrar erros e deve montar um objeto contendo 8 símbolos
                expect(resultadoLexador.erros).toHaveLength(0);
                expect(resultadoLexador.simbolos).toHaveLength(8);

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
                const resultadoTradutor = serializador.serializar(resultadoAvaliadorSintatico);

                // O Tradutor deve serializar de acordo
                expect(resultadoTradutor).toContain('html');
                expect(resultadoTradutor).toContain(seletor['propriedadeCss']);
            }
        });

        // TODO: Corrigir teste.
        it.skip('Seletores que recebem palavras reservadas específicas como atributo', () => {
            for (let index = 0; index < AtribuicaoAbreviadaPREspecificas.length; index += 1) {

                const seletor = new SeletorModificador(
                    AtribuicaoAbreviadaPREspecificas[index]['modificador'],
                    AtribuicaoAbreviadaPREspecificas[index]['valor'],
                );

                // Lexador
                const resultadoLexador = lexador.mapear([
                    "lmht {",
                        `${AtribuicaoAbreviadaPREspecificas[index]['modificador']}: ${AtribuicaoAbreviadaPREspecificas[index]['valor']};`,
                    "}"
                ]);

                // O Lexador não deve encontrar erros ao fazer o mapeamento
                expect(resultadoLexador.erros).toHaveLength(0);

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
                const resultadoTradutor = serializador.serializar(resultadoAvaliadorSintatico);

                // O Tradutor deve serializar de acordo
                expect(resultadoTradutor).toContain('html');
                expect(resultadoTradutor).toContain(seletor['propriedadeCss']);
                expect(resultadoTradutor).toContain(AtribuicaoAbreviadaPREspecificas[index]['traducao']);
            }
        });
    
        // TODO: Corrigir teste.
        it.skip('Seletores que recebem tanto palavras reservadas quanto valor-quantificador como atributo', () => {
            for (let index = 0; index < AtribuicaoAbreviadaVQePR.length; index += 1) {

                const seletor = new SeletorModificador(
                    AtribuicaoAbreviadaVQePR[index]['modificador'],
                    AtribuicaoAbreviadaVQePR[index]['valor']
                );

                // Lexador
                const resultadoLexador = lexador.mapear([
                    "lmht {",
                    `${AtribuicaoAbreviadaVQePR[index]['modificador']}: ${AtribuicaoAbreviadaVQePR[index]['valor']};`,
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
                const resultadoTradutor = serializador.serializar(resultadoAvaliadorSintatico);

                // O Tradutor deve serializar de acordo
                expect(resultadoTradutor).toContain('html');
                expect(resultadoTradutor).toContain(seletor['propriedadeCss']);
                expect(resultadoTradutor).toContain(AtribuicaoAbreviadaVQePR[index]['traducao']);
            }
        });

        it('Seletores que recebem atribuição de valores separados por BARRA', () => {
            for (let index = 0; index < AtribuicaoSeparadaPorBarra.length; index += 1) {

                const seletor = new SeletorModificador(
                    AtribuicaoSeparadaPorBarra[index]['modificador'],
                    AtribuicaoSeparadaPorBarra[index]['valor'],
                );

                // Lexador
                const resultadoLexador = lexador.mapear([
                    "lmht {",
                    `${AtribuicaoSeparadaPorBarra[index]['modificador']}: ${AtribuicaoSeparadaPorBarra[index]['valor']};`,
                    "}"
                ]);

                // O Lexador não deve encontrar erros
                expect(resultadoLexador.erros).toHaveLength(0);

                // O Lexador deve mapear os devidos símbolos de acordo com o seletor recebido
                if (index <= 1) {
                    expect(resultadoLexador.simbolos).toEqual(
                        expect.arrayContaining([
                            expect.objectContaining({ tipo: tiposDeSimbolos.QUALITATIVO }),
                        ])
                    );
                } else if (index > 1 && index <= 3) {
                    expect(resultadoLexador.simbolos).toEqual(
                        expect.arrayContaining([
                            expect.objectContaining({ tipo: tiposDeSimbolos.NUMERO }),
                        ])
                    );
                } else {
                    expect(resultadoLexador.simbolos).toEqual(
                        expect.arrayContaining([
                            expect.objectContaining({ tipo: tiposDeSimbolos.NUMERO }),
                            expect.objectContaining({ tipo: tiposDeSimbolos.QUANTIFICADOR }),
                        ])
                    );
                }

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
                const resultadoSerializador = serializador.serializar(resultadoAvaliadorSintatico);

                // O Tradutor deve serializar de acordo
                expect(resultadoSerializador).toContain('html');
                expect(resultadoSerializador).toContain(seletor['propriedadeCss']);
                expect(resultadoSerializador).toContain(AtribuicaoSeparadaPorBarra[index]['valor']);
            }
        });

        it('Seletores que recebem atribuição de valores separados por VÍRGULA', () => {
            for (let index = 0; index < AtribuicaoSeparadaPorVirgula.length; index += 1) {

                const seletor = new SeletorModificador(
                    AtribuicaoSeparadaPorVirgula[index]['modificador'],
                    AtribuicaoSeparadaPorVirgula[index]['valor']
                );

                // Lexador
                const resultadoLexador = lexador.mapear([
                    "lmht {",
                    `${AtribuicaoSeparadaPorVirgula[index]['modificador']}: ${AtribuicaoSeparadaPorVirgula[index]['valor']};`,
                    "}"
                ]);

                // O Lexador não deve encontrar erros
                expect(resultadoLexador.erros).toHaveLength(0);

                // O Lexador deve mapear os devidos símbolos de acordo com o seletor recebido
                if (index <= 1) {
                    expect(resultadoLexador.simbolos).toEqual(
                        expect.arrayContaining([
                            expect.objectContaining({ tipo: tiposDeSimbolos.IDENTIFICADOR }),
                        ])
                    );
                } else {
                    expect(resultadoLexador.simbolos).toEqual(
                        expect.arrayContaining([
                            expect.objectContaining({ tipo: tiposDeSimbolos.NUMERO }),
                            expect.objectContaining({ tipo: tiposDeSimbolos.QUANTIFICADOR }),
                        ])
                    );
                }

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
                const resultadoTradutor = serializador.serializar(resultadoAvaliadorSintatico);

                // O Tradutor deve serializar de acordo
                expect(resultadoTradutor).toContain('html');
                expect(resultadoTradutor).toContain(seletor['propriedadeCss']);
                expect(resultadoTradutor).toContain(AtribuicaoSeparadaPorVirgula[index]['traducao']);
            }
        });
    });
});
