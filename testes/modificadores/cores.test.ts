import { AvaliadorSintatico } from "../../fontes/avaliador-sintatico";
import { Lexador } from "../../fontes/lexador";
import { SeletorModificador } from "../../fontes/modificadores/superclasse";
import tiposDeSimbolos from "../../fontes/tipos-de-simbolos/foles";
import { Tradutor } from "../../fontes/tradutor";
import { Cores } from "../listas/cores";

describe('Testando Seletores que recebem COR como atributo', () => {
    const atributosCss = [
        'red', 
        '#009900',
        '#f015ca',
        'rgba(34, 12, 64, 0.6)',
        'rgb(34, 12, 64, 0.6)',
        'hsl(0, 100%, 50%)',
        'transparent'
    ];

    const atributosFolEs = [
        'vermelho',
        '#009900',
        '#f015ca',
        'rgba(34, 12, 64, 0.6)',
        'rgb(34, 12, 64, 0.6)',
        'hsl(0, 100%, 50%)',
        'transparente'
    ]

    describe('Testes Unitários', () => {
        let lexador: Lexador;
        let avaliador: AvaliadorSintatico;
        let tradutor: Tradutor;

        beforeEach(() => {
            lexador = new Lexador();
            avaliador = new AvaliadorSintatico();
            tradutor = new Tradutor();
        });

        it.skip('Casos de sucesso - Lexador, Avaliador e Tradutor', () => {
            for (let index = 0; index < Cores.length; index += 1) {
                const seletor = new SeletorModificador(Cores[index], '#f015ca', '');

                // Lexador
                const resultadoLexador = lexador.mapear([
                    "lmht {",
                    `${Cores[index]}: ${seletor['valor']};`,
                    "}"
                ]);

                expect(resultadoLexador.simbolos).toHaveLength(7);
                expect(resultadoLexador.simbolos).toEqual(
                    expect.arrayContaining([
                        // expect.objectContaining({ tipo: tiposDeSimbolos.ATRIBUTO_COR }),
                    ])
                );


                // Avaliador Sintático
                const resultadoAvaliadorSintatico = avaliador.analisar(resultadoLexador.simbolos);

                expect(resultadoAvaliadorSintatico[0].modificadores[0].nomeFoles).toStrictEqual(
                    seletor['nomeFoles']
                );
                expect(resultadoAvaliadorSintatico[0].modificadores[0].propriedadeCss).toStrictEqual(
                    seletor['propriedadeCss']
                );

                // Tradutor
                const resultadoTradutor = tradutor.traduzir(resultadoAvaliadorSintatico);

                expect(resultadoTradutor).toContain(seletor['propriedadeCss']);
                expect(resultadoTradutor).toContain("#f015ca;");
            }
        });

        it.skip('Casos de Falha - Lexador, Avaliador e Tradutor', () => {
            for (let index = 0; index < Cores.length; index += 1) {

                // Lexador - cor não informada
                const resultadoLexador = lexador.mapear([
                    "lmht {",
                    `${Cores[index]}: ;`,
                    "}"
                ]);

                expect(resultadoLexador.simbolos).not.toEqual(
                    expect.arrayContaining([
                        // expect.objectContaining({ tipo: tiposDeSimbolos.ATRIBUTO_COR }),
                    ])
                );

                // Causar erro de digitação
                const seletorIncorreto = Cores[index].replace(Cores[index][0], '')

                const novoLexador = lexador.mapear([
                    "lmht {",
                    `${seletorIncorreto}: rgb(34, 12, 64, 0.6);`,
                    "}"
                ]);

                // Avaliador Sintático - Erro esperado como retorno
                expect(() => {
                    avaliador.analisar(novoLexador.simbolos);
                }).toThrow(`O seletor '${seletorIncorreto}' não foi encontrado.`);


                // Tradutor - Não deve traduzir devido ao erro do Avaliador Sintático
                expect(() => {
                    tradutor.traduzir(avaliador.analisar(novoLexador.simbolos));
                }).toHaveLength(0);
            }
        });
    });
});
