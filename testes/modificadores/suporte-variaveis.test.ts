import { AvaliadorSintatico } from "../../fontes/avaliador-sintatico";
import { Importador } from "../../fontes/importador";
import { AvaliadorSintaticoInterface, ImportadorInterface, LexadorInterface } from "../../fontes/interfaces";
import { Lexador } from "../../fontes/lexador";
import tiposDeSimbolos from "../../fontes/tipos-de-simbolos/foles";
import { Serializador } from "../../fontes/serializadores";
import { Posição } from "../listas/posição";
import { BlocoDeclaracao, DeclaracaoVariavel } from "../../fontes/declaracoes";

describe('Testando Suporte a VARIÁVEIS', () => {
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

        it('Casos de sucesso - Atribuição de variável com valor QUALITATIVO', () => {
            // Lexador
            const resultadoLexador = lexador.mapear([
                "$cor-secundaria: branco;",
                "corpo {",
                    "cor-barra-rolagem: $cor-secundaria;",
                "}"
            ]);

            // O Lexador deve montar um objeto de comprimento 13 sem retornar nenhum erro
            expect(resultadoLexador.simbolos).toHaveLength(13);
            expect(resultadoLexador.erros).toHaveLength(0);

            // O Lexador deve reconhecer a variável declarada
            expect(resultadoLexador.simbolos).toEqual(
                expect.arrayContaining([
                    expect.objectContaining({ tipo: tiposDeSimbolos.VARIAVEL }),
                ])
            );

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
            expect(resultadoAvaliadorSintatico.length).toBeGreaterThanOrEqual(1);

            // O primeiro item do Avaliador deve ser a declaração de variável
            const primeiroResultado = resultadoAvaliadorSintatico[0];
            expect(primeiroResultado).toBeInstanceOf(DeclaracaoVariavel);
            
            const primeiroResultadoTipado = primeiroResultado as DeclaracaoVariavel;
            expect(primeiroResultadoTipado.nome).toBe('cor-secundaria');

            // O segundo item do Avaliador deve ser o bloco de declaração com os modificadores
            const segundoResultado = resultadoAvaliadorSintatico[1];
            expect(segundoResultado).toBeInstanceOf(BlocoDeclaracao);

            const segundoResultadoTipado = segundoResultado as BlocoDeclaracao;
            expect(segundoResultadoTipado.modificadores.length).toBeGreaterThanOrEqual(1);

            // Serializador deve traduzir de acordo o valor qualitativo
            const resultadoSerializador = tradutor.serializar(resultadoAvaliadorSintatico);
            expect(resultadoSerializador).toContain('body');
            expect(resultadoSerializador).toContain('scrollbar-color');
            expect(resultadoSerializador).toContain('white;');
        });

        it('Casos de sucesso - Atribuição de variável com valor NUMÉRICO', () => {
            // Lexador
            const resultadoLexador = lexador.mapear([
                "$valor-indice: 0;",
                "corpo {",
                    "indice-z: $valor-indice;",
                "}"
            ]);

            // O Lexador deve montar um objeto de comprimento 13 sem retornar nenhum erro
            expect(resultadoLexador.simbolos).toHaveLength(13);
            expect(resultadoLexador.erros).toHaveLength(0);

            // O Lexador deve reconhecer a variável declarada
            expect(resultadoLexador.simbolos).toEqual(
                expect.arrayContaining([
                    expect.objectContaining({ tipo: tiposDeSimbolos.VARIAVEL }),
                ])
            );

            // O Lexador não deve encontrar qualitativos na operação
            expect(resultadoLexador.simbolos).not.toEqual(
                expect.arrayContaining([
                    expect.objectContaining({ tipo: tiposDeSimbolos.QUALITATIVO }),
                ])
            );

            // O Lexador deve classificar o valor recebido como NUMERO
            expect(resultadoLexador.simbolos).toEqual(
                expect.arrayContaining([
                    expect.objectContaining({ tipo: tiposDeSimbolos.NUMERO }),
                ])
            );

            // Avaliador Sintático
            const resultadoAvaliadorSintatico = avaliador.analisar(resultadoLexador.simbolos);
            expect(resultadoAvaliadorSintatico.length).toBeGreaterThanOrEqual(1);

            // O primeiro item do Avaliador deve ser a declaração de variável
            const primeiroResultado = resultadoAvaliadorSintatico[0];
            expect(primeiroResultado).toBeInstanceOf(DeclaracaoVariavel);
            
            const primeiroResultadoTipado = primeiroResultado as DeclaracaoVariavel;
            expect(primeiroResultadoTipado.nome).toBe('valor-indice');

            // O segundo item do Avaliador deve ser o bloco de declaração com os modificadores
            const segundoResultado = resultadoAvaliadorSintatico[1];
            expect(segundoResultado).toBeInstanceOf(BlocoDeclaracao);

            const segundoResultadoTipado = segundoResultado as BlocoDeclaracao;
            expect(segundoResultadoTipado.modificadores.length).toBeGreaterThanOrEqual(1);

            // Serializador deve traduzir de acordo
            const resultadoSerializador = tradutor.serializar(resultadoAvaliadorSintatico);
            expect(resultadoSerializador).toContain('body');
            expect(resultadoSerializador).toContain('z-index');
            expect(resultadoSerializador).toContain('0;');
        });

        it('Casos de sucesso - Atribuição de variável com valor numérico COM QUANTIFICADOR', () => {
            // Lexador
            const resultadoLexador = lexador.mapear([
                "$valor-recuo: 12px;",
                "corpo {",
                    "recuo-direito: $valor-recuo;",
                "}"
            ]);

            // O Lexador deve montar um objeto de comprimento 14 sem retornar nenhum erro
            expect(resultadoLexador.simbolos).toHaveLength(14);
            expect(resultadoLexador.erros).toHaveLength(0);

            // O Lexador deve reconhecer a variável declarada
            expect(resultadoLexador.simbolos).toEqual(
                expect.arrayContaining([
                    expect.objectContaining({ tipo: tiposDeSimbolos.VARIAVEL }),
                ])
            );

            // O Lexador não deve encontrar qualitativos na operação
            expect(resultadoLexador.simbolos).not.toEqual(
                expect.arrayContaining([
                    expect.objectContaining({ tipo: tiposDeSimbolos.QUALITATIVO }),
                ])
            );

            // O Lexador deve classificar o valor recebido como NUMERO e QUANTIFICADOR
            expect(resultadoLexador.simbolos).toEqual(
                expect.arrayContaining([
                    expect.objectContaining({ tipo: tiposDeSimbolos.NUMERO }),
                    expect.objectContaining({ tipo: tiposDeSimbolos.QUANTIFICADOR }),
                ])
            );

            // Avaliador Sintático
            const resultadoAvaliadorSintatico = avaliador.analisar(resultadoLexador.simbolos);
            expect(resultadoAvaliadorSintatico.length).toBeGreaterThanOrEqual(1);

            // O primeiro item do Avaliador deve ser a declaração de variável
            const primeiroResultado = resultadoAvaliadorSintatico[0];
            expect(primeiroResultado).toBeInstanceOf(DeclaracaoVariavel);
            
            const primeiroResultadoTipado = primeiroResultado as DeclaracaoVariavel;
            expect(primeiroResultadoTipado.nome).toBe('valor-recuo');

            // O segundo item do Avaliador deve ser o bloco de declaração com os modificadores
            const segundoResultado = resultadoAvaliadorSintatico[1];
            expect(segundoResultado).toBeInstanceOf(BlocoDeclaracao);

            const segundoResultadoTipado = segundoResultado as BlocoDeclaracao;
            expect(segundoResultadoTipado.modificadores.length).toBeGreaterThanOrEqual(1);

            // Serializador deve traduzir de acordo
            const resultadoSerializador = tradutor.serializar(resultadoAvaliadorSintatico);
            expect(resultadoSerializador).toContain('body');
            expect(resultadoSerializador).toContain('padding-right');
            expect(resultadoSerializador).toContain('12px;');
        });
    });
});
