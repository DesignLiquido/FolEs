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
        let serializador: Serializador;

        beforeEach(() => {
            lexador = new Lexador();
            importador = new Importador(lexador);
            avaliador = new AvaliadorSintatico(importador);
            serializador = new Serializador();
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
            const resultadoTradutor = serializador.serializar(resultadoAvaliadorSintatico);

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
            }).toThrow(`Modificador ou variável 'agrupar-palavra' com valor 'nomal' inválido.`);
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
            }).toThrow(`Modificador ou variável 'conteúdo' com valor 'linear-gradiente' inválido.`);
        });
    });

    describe('Validação de valores com condição extra', () => {
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

        it('Caso de sucesso - Validações não retornam erros', () => {
            // Lexador
            const resultadoLexador = lexador.mapear([
                'divisão {',
                    'alinhar-itens: seguro;',
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
            const resultadoSerializacao = serializador.serializar(resultadoAvaliadorSintatico);

            // O Serializador deve traduzir devidamente os termos
            expect(resultadoSerializacao).toContain('div');
            expect(resultadoSerializacao).toContain('align-items: safe;');
        });

        it('Caso de falha - Validação retorna erro de valor inválido', () => {
            // Lexador
            const resultadoLexador = lexador.mapear([
                'divisão {',
                    'alinhar-itens: seuro;',
                "}"
            ]);

            // Avaliador Sintático
            expect(() => {
                avaliador.analisar(resultadoLexador.simbolos);
            }).toThrow(`Modificador ou variável 'alinhar-itens' com valor 'seuro' inválido.`);
        });

        it('Caso de falha - Validação retorna erro de valor extra inválido', () => {
            // Lexador
            const resultadoLexador = lexador.mapear([
                'divisão {',
                    'estilo-borda-direita: desconhecido;',
                "}"
            ]);

            // Avaliador Sintático
            expect(() => {
                avaliador.analisar(resultadoLexador.simbolos);
            }).toThrow(`Modificador ou variável 'estilo-borda-direita' com valor 'desconhecido' inválido.`);
        });
    });

    describe('Validação de valores numéricos', () => {
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
                    'alinhar-vertical: 20px;',
                "}"
            ]);

            // O Lexador deve montar um objeto de comprimento 7 sem retornar nenhum erro
            expect(resultadoLexador.simbolos).toHaveLength(8);
            expect(resultadoLexador.erros).toHaveLength(0);

            // O Lexador deve mapear os tipos de símbolo Número e Quantificador
            expect(resultadoLexador.simbolos).toEqual(
                expect.arrayContaining([
                    expect.objectContaining({ tipo: tiposDeSimbolos.NUMERO }),
                    expect.objectContaining({ tipo: tiposDeSimbolos.QUANTIFICADOR }),
                ])
            );

            // Avaliador Sintático
            const resultadoAvaliadorSintatico = avaliador.analisar(resultadoLexador.simbolos);

            // Serializador
            const resultadoTradutor = tradutor.serializar(resultadoAvaliadorSintatico);

            // O Serializador deve traduzir devidamente os termos
            expect(resultadoTradutor).toContain('div');
            expect(resultadoTradutor).toContain('vertical-align');
            expect(resultadoTradutor).toContain('20px;');
        });

        it('Caso de falha - Validação retorna erro de valor inválido', () => {
            // Lexador
            const resultadoLexador = lexador.mapear([
                'divisão {',
                    'alinhar-vertical: desconhecido;',
                "}"
            ]);

            // Avaliador Sintático
            expect(() => {
                avaliador.analisar(resultadoLexador.simbolos);
            }).toThrow(`Modificador ou variável 'alinhar-vertical' com valor 'desconhecido' inválido.`);
        });

        it('Caso de falha - Validação retorna erro de valor extra inválido', () => {
            // Lexador
            const resultadoLexador = lexador.mapear([
                'divisão {',
                    'atraso-animação: desconhecido;',
                "}"
            ]);

            // Avaliador Sintático
            expect(() => {
                avaliador.analisar(resultadoLexador.simbolos);
            }).toThrow(`Modificador ou variável 'atraso-animação' com valor 'desconhecido' inválido.`);
        });

        it('Caso de falha - Validação retorna erro de valor aceito, mas inválido', () => {
            // Lexador
            const resultadoLexador = lexador.mapear([
                'divisão {',
                    'altura-máxima: desconhecido;',
                "}"
            ]);

            // Avaliador Sintático
            expect(() => {
                avaliador.analisar(resultadoLexador.simbolos);
            }).toThrow(`Modificador ou variável 'altura-máxima' com valor 'desconhecido' inválido.`);
        });
    });

    describe('Validação de cores e hexadecimais', () => {
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

        it('Caso de sucesso - Validações não retornam erros ao atribuir nome de cor', () => {
            // Lexador
            const resultadoLexador = lexador.mapear([
                'divisão {',
                    'cor-barra-rolagem: azul;',
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
            expect(resultadoTradutor).toContain('scrollbar-color');
            expect(resultadoTradutor).toContain('blue;');
        });

        it('Caso de sucesso - Validações não retornam erros ao atribuir código hexadecimal', () => {
            // Lexador
            const resultadoLexador = lexador.mapear([
                'divisão {',
                    'cor-barra-rolagem: #ffffff;',
                "}"
            ]);

            // O Lexador deve montar um objeto de comprimento 8 sem retornar nenhum erro
            expect(resultadoLexador.simbolos).toHaveLength(8);
            expect(resultadoLexador.erros).toHaveLength(0);

            // O Lexador deve mapear o tipo de símbolo Método
            expect(resultadoLexador.simbolos).toEqual(
                expect.arrayContaining([
                    expect.objectContaining({ tipo: tiposDeSimbolos.METODO }),
                ])
            );

            // Avaliador Sintático
            const resultadoAvaliadorSintatico = avaliador.analisar(resultadoLexador.simbolos);

            // Serializador
            const resultadoTradutor = tradutor.serializar(resultadoAvaliadorSintatico);

            // O Serializador deve traduzir devidamente os termos
            expect(resultadoTradutor).toContain('div');
            expect(resultadoTradutor).toContain('scrollbar-color');
            expect(resultadoTradutor).toContain('#ffffff;');
        });

        it('Caso de falha - Validação retorna erro de código hexadecimal inválido', () => {
            // Lexador
            const resultadoLexador = lexador.mapear([
                'divisão {',
                    'cor-barra-rolagem: #f;',
                "}"
            ]);

            // Avaliador Sintático
            expect(() => {
                avaliador.analisar(resultadoLexador.simbolos);
            }).toThrow(`Modificador ou variável 'cor-barra-rolagem' com hexadecimal inválido`);
        });

        it('Caso de falha - Validação retorna erro de método inválido', () => {
            // Lexador
            const resultadoLexador = lexador.mapear([
                'divisão {',
                    'cor-barra-rolagem: minmax(auto, 10px);',
                "}"
            ]);

            // Avaliador Sintático
            expect(() => {
                avaliador.analisar(resultadoLexador.simbolos);
            }).toThrow(`Modificador ou variável 'cor-barra-rolagem' com método 'MinMax' inválido.`);
        });

        it('Caso de falha - Validação retorna erro de valor inválido', () => {
            // Lexador
            const resultadoLexador = lexador.mapear([
                'divisão {',
                    'cor-borda-direita: desconhecido;',
                "}"
            ]);

            // Avaliador Sintático
            expect(() => {
                avaliador.analisar(resultadoLexador.simbolos);
            }).toThrow(`Modificador ou variável 'cor-borda-direita' com valor 'desconhecido' inválido.`);
        });

        it('Caso de falha - Validação retorna erro de valor aceito, mas inválido', () => {
            // Lexador
            const resultadoLexador = lexador.mapear([
                'divisão {',
                    'cor-barra-rolagem: desconhecido;',
                "}"
            ]);

            // Avaliador Sintático
            expect(() => {
                avaliador.analisar(resultadoLexador.simbolos);
            }).toThrow(`Modificador ou variável 'cor-barra-rolagem' com valor 'desconhecido' inválido.`);
        });
    });

    describe('Validação de quantificadores', () => {
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
                    'deslocamento: 90deg;',
                "}"
            ]);

            // O Lexador deve montar um objeto de comprimento 8 sem retornar nenhum erro
            expect(resultadoLexador.simbolos).toHaveLength(8);
            expect(resultadoLexador.erros).toHaveLength(0);

            // O Lexador deve mapear os tipos de símbolo Número e Quantificador
            expect(resultadoLexador.simbolos).toEqual(
                expect.arrayContaining([
                    expect.objectContaining({ tipo: tiposDeSimbolos.NUMERO }),
                    expect.objectContaining({ tipo: tiposDeSimbolos.QUANTIFICADOR }),
                ])
            );

            // Avaliador Sintático
            const resultadoAvaliadorSintatico = avaliador.analisar(resultadoLexador.simbolos);

            // Serializador
            const resultadoTradutor = tradutor.serializar(resultadoAvaliadorSintatico);

            // O Serializador deve traduzir devidamente os termos
            expect(resultadoTradutor).toContain('div');
            expect(resultadoTradutor).toContain('offset');
            expect(resultadoTradutor).toContain('90deg;');
        });

        it('Caso de falha - Validação retorna erro de quantificador inválido', () => {
            // Lexador
            const resultadoLexador = lexador.mapear([
                'divisão {',
                    'alinhar-vertical: 10ab;',
                "}"
            ]);

            // Avaliador Sintático
            expect(() => {
                avaliador.analisar(resultadoLexador.simbolos);
            }).toThrow(`Modificador ou variável 'alinhar-vertical' com valor 'ab' inválido.`);
        });

        it('Caso de falha - Validação retorna erro de quantificador extra inválido', () => {
            // Lexador
            const resultadoLexador = lexador.mapear([
                'divisão {',
                    'deslocamento: 10a;',
                "}"
            ]);

            // Avaliador Sintático
            expect(() => {
                avaliador.analisar(resultadoLexador.simbolos);
            }).toThrow(`Modificador ou variável 'deslocamento' com valor 'a' inválido.`);
        });
    });

    describe('Testando método de proibir quantificadores', () => {
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

        it('Caso de falha - Validação retorna erro de quantificador proibido', () => {
            // Lexador
            const resultadoLexador = lexador.mapear([
                'divisão {',
                    'ajustar-tamanho-fonte: 10px;',
                "}"
            ]);

            // Avaliador Sintático
            expect(() => {
                avaliador.analisar(resultadoLexador.simbolos);
            }).toThrow(`Modificador ou variável 'ajustar-tamanho-fonte' aceita somente valores numéricos. O quantificador 'px' é inválido para esta operação.`);
        });
    });
});

