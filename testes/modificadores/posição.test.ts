import { AvaliadorSintatico } from "../../fontes/avaliador-sintatico";
import { Lexador } from "../../fontes/lexador";
import { SeletorModificador } from "../../fontes/modificadores/superclasse";
import tiposDeSimbolos from "../../fontes/tipos-de-simbolos/foles";
import { Tradutor } from "../../fontes/tradutor";
import { Posição } from "../listas/posição";

describe('Testando Seletores de POSIÇÃO', () => {
    const atributosCss = [
        'start', 'end', 'normal', 'stretch', 'center', 'baseline',
        'flex-start', 'flex-end', 'top', 'bottom', 'right', 'left'
    ];

    const atributosFolEs = [
        ['inicio', 'início'], 'fim', 'normal', 'esticar', 'centro', 'linha-de-base',
        ['flex-inicio', 'flex-início'], 'flex-fim', 'superior', 'inferior', 'direita', 'esquerda'
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
            for (let index = 0; index < Object.keys(Posição).length; index += 1) {
                const seletor = new SeletorModificador(Posição[index], 'centro', null);

                // Lexador
                const resultadoLexador = lexador.mapear([
                    "corpo {",
                    `${Posição[index]}: ${seletor['valor']};`,
                    "}"
                ]);

                expect(resultadoLexador.simbolos).toHaveLength(7);
                expect(resultadoLexador.simbolos).toEqual(
                    expect.arrayContaining([
                        // expect.objectContaining({ tipo: tiposDeSimbolos.ATRIBUTO_POSICAO }),
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
                expect(resultadoTradutor).toContain('center;');
            }
        });

        it.skip('Casos de Falha - Lexador, Avaliador e Tradutor', () => {
            for (let index = 0; index < Object.keys(Posição).length; index += 1) {

                // Lexador - Posição não informada
                const resultadoLexador = lexador.mapear([
                    "lmht {",
                    `${Posição[index]}: ;`,
                    "}"
                ]);

                expect(resultadoLexador.simbolos).not.toEqual(
                    expect.arrayContaining([
                        // expect.objectContaining({ tipo: tiposDeSimbolos.ATRIBUTO_POSICAO }),
                    ])
                );

                // Causar erro de digitação
                const seletorIncorreto = Posição[index].replace(Posição[index][0], '')

                const novoLexador = lexador.mapear([
                    "lmht {",
                    `${seletorIncorreto}: inicio;`,
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
