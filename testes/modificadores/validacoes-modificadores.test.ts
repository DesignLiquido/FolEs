import { AvaliadorSintatico } from "../../fontes/avaliador-sintatico";
import { Importador } from "../../fontes/importador";
import { AvaliadorSintaticoInterface, ImportadorInterface, LexadorInterface } from "../../fontes/interfaces";
import { Lexador } from "../../fontes/lexador";
import tiposDeSimbolos from "../../fontes/tipos-de-simbolos/foles";
import { Serializador } from "../../fontes/serializadores";

describe('Testando Validações de Valores e Quantificadores dos Seletores', () => {
    describe('Validação comum de valores', () => {
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

        it('Caso de sucesso - Validações não retornam erros', () => {
            // Lexador
            const resultadoLexador = lexador.mapear([
                'divisão {',
                    'agrupar-palavra: normal;',
                "}"
            ]);

            // O Lexador deve montar um objeto de comprimento 7 sem retornar nenhum erro
            expect(resultadoLexador.simbolos).toHaveLength(7);
            expect(resultadoLexador.erros).toHaveLength(0);

            // O Lexador deve mapear o tipo de símbolo Qualitativo
            expect(resultadoLexador.simbolos).toEqual(
                expect.arrayContaining([
                    expect.objectContaining({ tipo: tiposDeSimbolos.QUALITATIVO }),
                ])
            );

            // Avaliador Sintático
            const resultadoAvaliadorSintatico = avaliador.analisar(resultadoLexador.simbolos);

            // Serializador
            const resultadoTradutor = tradutor.serializar(resultadoAvaliadorSintatico);

            // O Serializador deve traduzir devidamente os termos
            expect(resultadoTradutor).toContain('div');
            expect(resultadoTradutor).toContain('word-break');
            expect(resultadoTradutor).toContain('normal;');
        });

        it('Caso de falha - Validação retorna erro de valor inválido', () => {
            // Lexador
            const resultadoLexador = lexador.mapear([
                'divisão {',
                    'agrupar-palavra: nomal;',
                "}"
            ]);

            // Avaliador Sintático
            expect(() => {
                avaliador.analisar(resultadoLexador.simbolos);
            }).toThrow(`Propriedade 'agrupar-palavra' com valor nomal inválido.`);
        });

        it('Caso de falha - Validação retorna erro de valor extra inválido', () => {
            // Lexador
            const resultadoLexador = lexador.mapear([
                'divisão {',
                    'conteúdo: linear-gradiente;',
                "}"
            ]);

            // Avaliador Sintático
            expect(() => {
                avaliador.analisar(resultadoLexador.simbolos);
            }).toThrow(`Propriedade 'conteúdo' com valor linear-gradiente inválido.`);
        });
    });
});
