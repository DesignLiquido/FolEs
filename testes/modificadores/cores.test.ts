import { AvaliadorSintatico } from "../../fontes/avaliador-sintatico";
import { Importador } from "../../fontes/importador";
import { AvaliadorSintaticoInterface, ImportadorInterface, LexadorInterface } from "../../fontes/interfaces";
import { Lexador } from "../../fontes/lexador";
import { SeletorModificador } from "../../fontes/modificadores/superclasse";
import tiposDeSimbolos from "../../fontes/tipos-de-simbolos/foles";
import { Serializador } from "../../fontes/serializadores";
import { Cores, CoresNomeFolEs } from "../listas/cores";
import { BlocoDeclaracao, DeclaracaoVariavel } from "../../fontes/declaracoes";
import { cores } from "../../fontes/modificadores/atributos/cores";
import { ValorQualitativo } from "../../fontes/valores";

describe('Testando Seletores que recebem COR como atributo', () => {
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

        it('Caso de Sucesso - Cor válida', () => {
            for (let index = 0; index < Cores.length; index += 1) {
                const seletor = new SeletorModificador(
                    Cores[index], 
                    [new ValorQualitativo('castanho')]
                );

                // Lexador
                const resultadoLexador = lexador.mapear([
                    "lmht {",
                    `${Cores[index]}: castanho;`,
                    "}"
                ]);

                expect(resultadoLexador.simbolos).toHaveLength(7);
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

                // Tradutor
                const resultadoTradutor = tradutor.serializar(resultadoAvaliadorSintatico);

                expect(resultadoTradutor).toContain(seletor['propriedadeCss']);
                expect(resultadoTradutor).toContain("brown;");
            }
        });

        it('Caso de Sucesso - Código #HEX', () => {
            for (let index = 0; index < Cores.length; index += 1) {
                // Lexador
                const resultadoLexador = lexador.mapear([
                    "lmht {",
                    `${Cores[index]}: #f015ca;`,
                    "}"
                ]);

                expect(resultadoLexador.simbolos).toHaveLength(8);
                expect(resultadoLexador.simbolos).toEqual(
                    expect.arrayContaining([
                        expect.objectContaining({ tipo: tiposDeSimbolos.METODO }),
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
                expect(primeiroResultadoTipado.modificadores[0].propriedadeCss).toStrictEqual(
                    CoresNomeFolEs[Cores[index]]
                );

                // Tradutor
                const resultadoTradutor = tradutor.serializar(resultadoAvaliadorSintatico);

                expect(resultadoTradutor).toContain(CoresNomeFolEs[Cores[index]]);
                expect(resultadoTradutor).toContain("#f015ca;");
            }
        });

        it('Caso de Sucesso - Valor RGB válido', () => {
            for (let index = 0; index < Cores.length; index += 1) {
                // Lexador
                const resultadoLexador = lexador.mapear([
                    "lmht {",
                    `${Cores[index]}: rgb(34, 12, 64);`,
                    "}"
                ]);

                // O objeto terá length 14 pois cada parâmetro é identificado separadamente
                expect(resultadoLexador.simbolos).toHaveLength(14);
                expect(resultadoLexador.simbolos).toEqual(
                    expect.arrayContaining([
                        expect.objectContaining({ tipo: tiposDeSimbolos.METODO }),
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
                expect(primeiroResultadoTipado.modificadores[0].propriedadeCss).toStrictEqual(
                    CoresNomeFolEs[Cores[index]]
                );

                // Tradutor
                const resultadoTradutor = tradutor.serializar(resultadoAvaliadorSintatico);

                expect(resultadoTradutor).toContain(CoresNomeFolEs[Cores[index]]);
                expect(resultadoTradutor).toContain("rgb(34, 12, 64);");
            }
        });

        it('Caso de Falha - Valor RGBA válido', () => {
            for (let index = 0; index < Cores.length; index += 1) {
                // Lexador
                const resultadoLexador = lexador.mapear([
                    "lmht {",
                    `${Cores[index]}: rgba(34, 64, 300);`,
                    "}"
                ]);

                // O objeto terá length 14 pois cada parâmetro é identificado separadamente
                expect(resultadoLexador.simbolos).toHaveLength(14);
                expect(resultadoLexador.simbolos).toEqual(
                    expect.arrayContaining([
                        expect.objectContaining({ tipo: tiposDeSimbolos.METODO }),
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
                expect(primeiroResultadoTipado.modificadores[0].propriedadeCss).toStrictEqual(
                    CoresNomeFolEs[Cores[index]]
                );

                // Tradutor
                const resultadoTradutor = tradutor.serializar(resultadoAvaliadorSintatico);

                expect(resultadoTradutor).toContain(CoresNomeFolEs[Cores[index]]);
                expect(resultadoTradutor).toContain("rgba(34, 64, 300);");
            }
        });

        it('Caso de Falha - Seletores não existentes', () => {
            for (let index = 0; index < Cores.length; index += 1) {

                // Lexador - cor não informada
                const resultadoLexador = lexador.mapear([
                    "lmht {",
                    `${Cores[index]}: ;`,
                    "}"
                ]);

                expect(resultadoLexador.simbolos).not.toEqual(
                    expect.arrayContaining([
                        expect.objectContaining({ tipo: tiposDeSimbolos.METODO }),
                    ])
                );

                // Causar erro de digitação
                const seletorIncorreto = Cores[index].replace(Cores[index][0], '')

                const novoLexador = lexador.mapear([
                    "lmht {",
                    `${seletorIncorreto}: rgb(34, 12, 64);`,
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

        it('Caso de Sucesso - Valor HSL válido', () => {
            for (let index = 0; index < Cores.length; index += 1) {
                // Lexador
                const resultadoLexador = lexador.mapear([
                    "lmht {",
                    `${Cores[index]}: hsl(34, 50%, 120%);`,
                    "}"
                ]);

                expect(resultadoLexador.simbolos).toHaveLength(16);
                expect(resultadoLexador.simbolos).toEqual(
                    expect.arrayContaining([
                        expect.objectContaining({ tipo: tiposDeSimbolos.METODO }),
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
                expect(primeiroResultadoTipado.modificadores[0].propriedadeCss).toStrictEqual(
                    CoresNomeFolEs[Cores[index]]
                );

                // Tradutor
                const resultadoTradutor = tradutor.serializar(resultadoAvaliadorSintatico);

                expect(resultadoTradutor).toContain(CoresNomeFolEs[Cores[index]]);
                expect(resultadoTradutor).toContain("hsl(34, 50%, 120%);");
            }
        });

        it('Caso de Sucesso - Valor HSLA válido', () => {
            for (let index = 0; index < Cores.length; index += 1) {
                // Lexador
                const resultadoLexador = lexador.mapear([
                    "lmht {",
                    `${Cores[index]}: hsla(34, 50%, 120%);`,
                    "}"
                ]);

                expect(resultadoLexador.simbolos).toHaveLength(16);
                expect(resultadoLexador.simbolos).toEqual(
                    expect.arrayContaining([
                        expect.objectContaining({ tipo: tiposDeSimbolos.METODO }),
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
                expect(primeiroResultadoTipado.modificadores[0].propriedadeCss).toStrictEqual(
                    CoresNomeFolEs[Cores[index]]
                );

                // Tradutor
                const resultadoTradutor = tradutor.serializar(resultadoAvaliadorSintatico);

                expect(resultadoTradutor).toContain(CoresNomeFolEs[Cores[index]]);
                expect(resultadoTradutor).toContain("hsla(34, 50%, 120%);");
            }
        });

        // TODO: Consertar
        it.skip('Caso de Sucesso - Cores atribuídas por meio de variável', () => {
            const coresFolEs = Object.keys(cores);
            const coresCss = Object.values(cores);
 
            for (let index = 0; index < coresFolEs.length; index += 1) {
                // Lexador
                const resultadoLexador = lexador.mapear([
                    `$cor-padrao: ${coresFolEs[index]};`,
                    "lmht {",
                        'cor-fundo: $cor-padrao;',
                    "}"
                ]);

                // O Lexador deve montar o objeto de acordo, sem retornar erros.
                expect(resultadoLexador.simbolos).toHaveLength(13);
                expect(resultadoLexador.erros).toHaveLength(0);

                // O mapeamento deve conter o tipo variável
                expect(resultadoLexador.simbolos).toEqual(
                    expect.arrayContaining([
                        expect.objectContaining({ tipo: tiposDeSimbolos.VARIAVEL }),
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
                expect(segundoResultadoTipado.modificadores[0].nomeFoles).toStrictEqual('cor-fundo');
                expect(segundoResultadoTipado.modificadores[0].propriedadeCss).toStrictEqual('background-color');
                
                // Tradutor
                const resultadoTradutor = tradutor.serializar(resultadoAvaliadorSintatico);
                expect(resultadoTradutor).toContain(coresCss[index]);
            }
        });
    });
});
