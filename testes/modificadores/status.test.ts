import { AvaliadorSintatico } from "../../fontes/avaliador-sintatico";
import { Lexador } from "../../fontes/lexador";
import { SeletorModificador } from "../../fontes/modificadores/superclasse";
import tiposDeSimbolos from "../../fontes/tipos-de-simbolos/foles";
import { Tradutor } from "../../fontes/tradutor";
import { Status } from "../listas/status";

describe('Testando Seletores com STATUS como atributo', () => {
    const atributosCss = [
        'auto', 'none', 'always', 'avoid',
        'all', 'both', 'left', 'right'
    ];

    const atributosFolEs = [
        ['automatico', 'automático'], 'nenhum', 'sempre', 'evitar',
        'tudo', 'ambos', 'esquerda', 'direita'
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

        it('Casos de sucesso - Lexador, Avaliador e Tradutor', () => {
            for (let index = 0; index < Object.keys(Status).length; index += 1) {
                const seletor = new SeletorModificador(Status[index], 'sempre', null);

                // LEXADOR
                const resultadoLexador = lexador.mapear([
                    "corpo {",
                    `${Status[index]}: ${seletor['valor']};`,
                    "}"
                ]);

                expect(resultadoLexador).toBeTruthy();
                expect(resultadoLexador.simbolos).toHaveLength(7);
                expect(resultadoLexador.simbolos).toEqual(
                    expect.arrayContaining([
                        expect.objectContaining({ tipo: tiposDeSimbolos.ESTRUTURA }),
                        expect.objectContaining({ tipo: tiposDeSimbolos.CHAVE_ESQUERDA }),
                        expect.objectContaining({ tipo: tiposDeSimbolos.IDENTIFICADOR }),
                        expect.objectContaining({ tipo: tiposDeSimbolos.DOIS_PONTOS }),
                        // expect.objectContaining({ tipo: tiposDeSimbolos.ATRIBUTO_STATUS }),
                        expect.objectContaining({ tipo: tiposDeSimbolos.PONTO_E_VIRGULA }),
                        expect.objectContaining({ tipo: tiposDeSimbolos.CHAVE_DIREITA }),
                    ])
                );

                expect(resultadoLexador.simbolos).not.toEqual(
                    expect.arrayContaining([
                        expect.objectContaining({ tipo: tiposDeSimbolos.QUANTIFICADOR }),
                        expect.objectContaining({ tipo: tiposDeSimbolos.NUMERO }),
                    ])
                );


                // AVALIADOR SINTÁTICO
                const resultadoAvaliadorSintatico = avaliador.analisar(resultadoLexador.simbolos);

                expect(resultadoAvaliadorSintatico).toBeTruthy();
                expect(resultadoAvaliadorSintatico).toHaveLength(1);
                expect(resultadoAvaliadorSintatico[0].seletor).toBe('corpo');
                expect(resultadoAvaliadorSintatico[0].modificadores[0].nomeFoles).toStrictEqual(
                    seletor['nomeFoles']
                );
                expect(resultadoAvaliadorSintatico[0].modificadores[0].propriedadeCss).toStrictEqual(
                    seletor['propriedadeCss']
                );
                expect(resultadoAvaliadorSintatico[0].modificadores[0].valor).toStrictEqual(
                    'sempre'
                );


                // TRADUTOR
                const resultadoTradutor = tradutor.traduzir(resultadoAvaliadorSintatico);

                expect(resultadoTradutor).toBeTruthy();
                expect(resultadoTradutor).toContain("body");
                expect(resultadoTradutor).toContain(seletor['propriedadeCss']);
                expect(resultadoTradutor).toContain('always;');
            }
        });

        it('Casos de Falha - Lexador, Avaliador e Tradutor', () => {
            for (let index = 0; index < Object.keys(Status).length; index += 1) {

                // LEXADOR - Status não informado
                const resultadoLexador = lexador.mapear([
                    "lmht {",
                    `${Status[index]}: ;`,
                    "}"
                ]);

                expect(resultadoLexador.simbolos).not.toHaveLength(7);
                expect(resultadoLexador.simbolos).not.toEqual(
                    expect.arrayContaining([
                        // expect.objectContaining({ tipo: tiposDeSimbolos.ATRIBUTO_STATUS }),
                    ])
                );

                // Causar erro de digitação
                const seletorIncorreto = Status[index].replace(Status[index][0], '')

                const novoLexador = lexador.mapear([
                    "lmht {",
                    `${seletorIncorreto}: automatico;`,
                    "}"
                ]);

                // AVALIADOR SINTÁTICO - Erro esperado como retorno
                expect(() => {
                    avaliador.analisar(novoLexador.simbolos);
                }).toThrow(`O seletor '${seletorIncorreto}' não foi encontrado.`);


                // TRADUTOR - Não deve traduzir devido ao erro do Avaliador Sintático
                expect(() => {
                    tradutor.traduzir(avaliador.analisar(novoLexador.simbolos));
                }).toHaveLength(0);
            }
        });
    });
});
