import { AvaliadorSintatico } from "../../fontes/avaliador-sintatico";
import { Importador } from "../../fontes/importador";
import { AvaliadorSintaticoInterface, ImportadorInterface, LexadorInterface } from "../../fontes/interfaces";
import { Lexador } from "../../fontes/lexador";
import tiposDeSimbolos from "../../fontes/tipos-de-simbolos/foles";
import { Resolvedor } from "../../fontes/resolvedores";
import { Pseudoclasses } from "../../fontes/listas/pseudoclasses";
import { BlocoDeclaracao } from "../../fontes/declaracoes";
import { SeletorPseudoclasse } from "../../fontes/pseudoclasses/seletor-pseudoclasse";

describe('Testando Seletores com PSEUDOCLASSES', () => {
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

                // O Avaliador deve montar um objeto com os devidos nomes FolEs e CSS
                expect(resultadoAvaliadorSintatico.length).toBeGreaterThanOrEqual(1);
                const primeiroResultado = resultadoAvaliadorSintatico[0];
                expect(primeiroResultado).toBeInstanceOf(BlocoDeclaracao);
                const primeiroResultadoTipado = primeiroResultado as any;
                expect(primeiroResultadoTipado.modificadores.length).toBeGreaterThanOrEqual(1);

                // Serializador
                const resultadoTradutor = tradutor.resolver(resultadoAvaliadorSintatico);

                // O Serializador deve traduzir devidamente os termos
                expect(resultadoTradutor).toContain('div');
                expect(resultadoTradutor).toContain(primeiroResultadoTipado.seletores[0].pseudoclasse.pseudoclasseCss);
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
                    tradutor.resolver(avaliador.analisar(resultadoLexador.simbolos));
                }).toHaveLength(0);
            }
        });

        it('Caso de falha - Erro ao instanciar classe SeletorPseudoclasse', () => {
            for (let index = 0; index < Pseudoclasses.length; index += 1) {
                // Causar erro de digitação
                const pseudoclasseIncorreta = Pseudoclasses[index].replace(Pseudoclasses[index][0], '');

                expect(() => {
                    new SeletorPseudoclasse(pseudoclasseIncorreta)
                }).toThrow(`A pseudoclasse \'${pseudoclasseIncorreta}\' não existe.`)
            }
        });
    });
});
