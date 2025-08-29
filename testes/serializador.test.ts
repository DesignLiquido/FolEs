import { AvaliadorSintatico } from "../fontes/avaliador-sintatico"
import { Lexador } from "../fontes/lexador"
import { SeletorModificador } from "../fontes/modificadores/superclasse"
import { Resolvedor } from "../fontes/resolvedores";
import { ValoresQuantificadores } from "./listas/valores-quantificadores"

import { AvaliadorSintaticoInterface, ImportadorInterface, LexadorInterface } from "../fontes/interfaces";
import { Importador } from "../fontes/importador";
import { ValorNumerico } from "../fontes/valores";

import estruturasHtml from "../fontes/tradutores/estruturas-html";

describe('Serializador', () => {
    let lexador: LexadorInterface;
    let importador: ImportadorInterface;
    let avaliador: AvaliadorSintaticoInterface;
    let serializador: Resolvedor;

    beforeEach(() => {
        lexador = new Lexador();
        importador = new Importador(lexador);
        avaliador = new AvaliadorSintatico(importador);
        serializador = new Resolvedor();
    });

    describe('Casos de Sucesso', () => {
        it('Testando tradução das estruturas HTML', () => {
            for (let index = 0; index < Object.keys(estruturasHtml).length; index += 1) {
                // Lexador recebe as estruturas FolEs
                const resultadoLexador = lexador.mapear([
                    `${Object.keys(estruturasHtml)[index]} {`,
                    "   tamanho-fonte: 60px;",
                    "}"
                ])

                // Avaliador Sintático
                const resultadoAvaliadorSintatico = avaliador.analisar(resultadoLexador.simbolos);
                
                // Tradutor deve retornar a estrutura HTML correspondente
                const resultadoTradutor = serializador.resolver(resultadoAvaliadorSintatico);
                expect(resultadoTradutor).toContain(Object.values(estruturasHtml)[index]);
            }
        });
    
        it('Casos de sucesso - traduzindo seletores valor-quantificador', () => {
            for (let index = 0; index < ValoresQuantificadores.length; index += 1) {
                const seletor = new SeletorModificador(
                    ValoresQuantificadores[index], 
                    [new ValorNumerico(ValoresQuantificadores[index], 40, 'px')]
                );
    
                // Lexador
                const resultadoLexador = lexador.mapear([
                    "lmht {",
                    `${ValoresQuantificadores[index]}: 40px;`,
                    "}"
                ]);
    
                // Avaliador Sintático
                const resultadoAvaliadorSintatico = avaliador.analisar(resultadoLexador.simbolos);
    
                // Tradutor deve funcionar de acordo
                const resultadoTradutor = serializador.resolver(resultadoAvaliadorSintatico);
    
                expect(resultadoTradutor).toBeTruthy();
                expect(resultadoTradutor).toContain("html");
                expect(resultadoTradutor).toContain(seletor['propriedadeCss']);
                expect(resultadoTradutor).toContain('40px;');
            }
        });

        it('Qualificador', () => {
            // Lexador
            const resultadoLexador = lexador.mapear([
                "lmht {",
                "   estilo-contorno: pontilhado;",
                "}"
            ]);

            // Avaliador Sintático
            const resultadoAvaliadorSintatico = avaliador.analisar(resultadoLexador.simbolos);

            // Serializador deve funcionar de acordo
            const resultadoSerializador = serializador.resolver(resultadoAvaliadorSintatico);

            expect(resultadoSerializador).toBeTruthy();
            expect(resultadoSerializador).toContain("html");
            expect(resultadoSerializador).toContain("outline-style");
            expect(resultadoSerializador).toContain('dotted');
        });

        describe.skip('Exemplos mais elaborados', () => {
            it('Exemplo 1', () => {
                const resultadoLexador = lexador.mapear([
                    '.minha-classe {',
                    '    alinhar-conteudo: inseguro;',
                    '    estilo-contorno: herdar;',
                    '    cor-destaque: hsl(12, 13%, 24%);',
                    '    cor: #f100ff;',
                    '    cor-fundo: vermelho;',
                    '    tamanho-fonte: 16px;',
                    '    largura-maxima: 20cm;',
                    '}',
                    '.minha-classe:sobre {',
                    '    cor-fundo: azul;',
                    '}',
                    '#elemento-caixa {',
                    '    altura: 40px;',
                    '}',
                    '.minha-segunda-classe {',
                    '    margem-superior: 13mm;',
                    '}',
                    '#meu-segundo-id {',
                    '    largura: 400mm;',
                    '}',
                    '%campos {',
                    '    margem-inferior: 50px;',
                    '}',
                    'lmht {',
                    '    cor-fundo: hsl(50, 80%, 80%);',
                    '}',
                ]);

                const resultadoAvaliadorSintatico = avaliador.analisar(resultadoLexador.simbolos);
                const resultadoSerializador = serializador.resolver(resultadoAvaliadorSintatico);

                expect(resultadoSerializador).toBeTruthy();
                expect(resultadoSerializador).toContain('.minha-classe {');
                expect(resultadoSerializador).toContain('align-content: unsafe;');
                expect(resultadoSerializador).toContain('outline-style: inherit;');
                expect(resultadoSerializador).toContain('accent-color: hsl(12, 13%, 24%);');
                expect(resultadoSerializador).toContain('color: #f100ff;');
                expect(resultadoSerializador).toContain('background-color: red;');
                expect(resultadoSerializador).toContain('font-size: 16px;');
                expect(resultadoSerializador).toContain('max-width: 20cm;');
                expect(resultadoSerializador).toContain('.minha-classe:hover {');
                expect(resultadoSerializador).toContain('background-color: blue;');
                expect(resultadoSerializador).toContain('#elemento-caixa {');
                expect(resultadoSerializador).toContain('height: 40px;');
                expect(resultadoSerializador).toContain('.minha-segunda-classe {');
                expect(resultadoSerializador).toContain('margin-top: 13mm;');
                expect(resultadoSerializador).toContain('#meu-segundo-id {');
                expect(resultadoSerializador).toContain('width: 400mm;');
                expect(resultadoSerializador).toContain('html {');
                expect(resultadoSerializador).toContain('background-color: hsl(50, 80%, 80%);');
            });

            it('Exemplo 2', () => {
                const resultadoLexador = lexador.mapear([
                    '/** Valores específicos */',
                    'lmht {',
                    '    recuo: 10px 10px 100px 20px;',
                    '    borda-direita: 2px pontilhado;',
                    '}',
                    'lmht {',
                    '    recursos-fonte: "c2sc", "hist";',
                    '}',
                    'lmht {',
                    '    coluna-em-grade: auto / auto;',
                    '}',
                    'lmht {',
                    '    animação: 3s alternar 1s deslizar;',
                    '}',
                    'lmht {',
                    '    ajustar-tamanho-fonte: altura-cap 0.5;',
                    '}',
                    'lmht {',
                    '    propriedade-transicao: todas, test1;',
                    '}',
                    'lmht {',
                    '    definir-contador: meu-contador 5 contador2 0;',
                    '    ao-mudar: left, top;',
                    '    coluna-em-grade: 3 span;',
                    '    estilo-lista: dentro meu-estilo;',
                    '    fim-linha-em-grade: span 3;',
                    '    fim-coluna-em-grade: span 3;',
                    '    incrementar-contador: meu-contador -4;',
                    '    início-linha-em-grade: span 2;',
                    '    inicio-coluna-em-grade: span 2;',
                    '    linha-em-grade: span some-grid-area;',
                    '    nome-animacao: test_05;',
                    '    propriedade-transicao: test1, animation4;',
                    '    tamanho-grade: span 2;',
                    '}'
                ]);

                const resultadoAvaliadorSintatico = avaliador.analisar(resultadoLexador.simbolos);
                const resultadoSerializador = serializador.resolver(resultadoAvaliadorSintatico);

                expect(resultadoSerializador).toBeTruthy();
            });
        });
    });

    describe('Casos de Falha', () => {
        it('Casos de Falha - seletores valor-quantificador', () => {
            for (let index = 0; index < Object.keys(ValoresQuantificadores).length; index += 1) {
    
                // Lexador - valor e quantificador não informados
                const resultadoLexador = lexador.mapear([
                    "lmht {",
                    `${ValoresQuantificadores[index]}: ;`,
                    "}"
                ]);
    
                // Tradutor - Não deve ser executado, dado o erro gerado no Avaliador Sintático
                expect(() => {
                    serializador.resolver(avaliador.analisar(resultadoLexador.simbolos));
                }).not.toBeTruthy;
    
                expect(() => {
                    serializador.resolver(avaliador.analisar(resultadoLexador.simbolos));
                }).toHaveLength(0);
            }
        });
    });
});
