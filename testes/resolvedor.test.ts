import { AvaliadorSintatico } from "../fontes/avaliador-sintatico"
import { Lexador } from "../fontes/lexador"
import { SeletorModificador } from "../fontes/modificadores/superclasse"
import { Resolvedor } from "../fontes/resolvedores";
import { ValoresQuantificadores } from "../fontes/listas/valores-quantificadores"
import { AvaliadorSintaticoInterface, ImportadorInterface, LexadorInterface, ResultadoLexadorInterface } from "../fontes/interfaces";
import { Importador } from "../fontes/importador";
import { ValorNumerico } from "../fontes/valores";
import estruturasHtml from "../fontes/tradutores/estruturas-html";

describe('Resolvedor', () => {
    let lexador: LexadorInterface;
    let importador: ImportadorInterface;
    let avaliador: AvaliadorSintaticoInterface;
    let resolvedor: Resolvedor;

    beforeEach(() => {
        lexador = new Lexador();
        importador = new Importador(lexador);
        avaliador = new AvaliadorSintatico(importador);
        resolvedor = new Resolvedor();
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
                const resultadoTradutor = resolvedor.resolver(resultadoAvaliadorSintatico);
                expect(resultadoTradutor).toContain(Object.values(estruturasHtml)[index]);
            }
        });

        it('Casos de sucesso - traduzindo seletores valor-quantificador', () => {
            for (let index = 0; index < ValoresQuantificadores.length; index += 1) {
                const seletor = new SeletorModificador(
                    ValoresQuantificadores[index],
                    [new ValorNumerico(ValoresQuantificadores[index], 40, 'px')]
                ) as any;

                // Lexador
                const resultadoLexador = lexador.mapear([
                    "lmht {",
                    `${ValoresQuantificadores[index]}: 40px;`,
                    "}"
                ]);

                // Avaliador Sintático
                const resultadoAvaliadorSintatico = avaliador.analisar(resultadoLexador.simbolos);

                // Tradutor deve funcionar de acordo
                const resultadoTradutor = resolvedor.resolver(resultadoAvaliadorSintatico);

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

            // Resolvedor deve funcionar de acordo
            const resultadoResolvedor = resolvedor.resolver(resultadoAvaliadorSintatico);

            expect(resultadoResolvedor).toBeTruthy();
            expect(resultadoResolvedor).toContain("html");
            expect(resultadoResolvedor).toContain("outline-style");
            expect(resultadoResolvedor).toContain('dotted');
        });

        it('Caso de sucesso - traduzindo classe seguida de estrutura', () => {
            // Lexador
            const resultadoLexador = lexador.mapear([
                ".classe divisão {",
                "   estilo-contorno: pontilhado;",
                "}"
            ]);

            // Avaliador Sintático
            const resultadoAvaliadorSintatico = avaliador.analisar(resultadoLexador.simbolos);
            expect(resultadoAvaliadorSintatico).toBeTruthy();

            // Resolvedor deve traduzir corretamente a classe e a estrutura
            const resultadoResolvedor = resolvedor.resolver(resultadoAvaliadorSintatico);
            expect(resultadoResolvedor).toContain(".classe");
            expect(resultadoResolvedor).toContain("div");
        });

        describe('Exemplos mais elaborados', () => {
            it('Exemplo 1', () => {
                const resultadoLexador = lexador.mapear([
                    '.minha-classe {',
                    '    alinhar-conteudo: inseguro;',
                    '    estilo-contorno: herdar;',
                    '    cor-destaque: hsl(12 13% 24%);',
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
                    '    cor-fundo: hsl(50 80% 80%);',
                    '}',
                ]);

                const resultadoAvaliadorSintatico = avaliador.analisar(resultadoLexador.simbolos);
                const resultadoResolvedor = resolvedor.resolver(resultadoAvaliadorSintatico);

                expect(resultadoResolvedor).toBeTruthy();
                expect(resultadoResolvedor).toContain('.minha-classe {');
                expect(resultadoResolvedor).toContain('align-content: unsafe;');
                expect(resultadoResolvedor).toContain('outline-style: inherit;');
                expect(resultadoResolvedor).toContain('accent-color: hsl(12 13% 24%);');
                expect(resultadoResolvedor).toContain('color: #f100ff;');
                expect(resultadoResolvedor).toContain('background-color: red;');
                expect(resultadoResolvedor).toContain('font-size: 16px;');
                expect(resultadoResolvedor).toContain('max-width: 20cm;');
                expect(resultadoResolvedor).toContain('.minha-classe:hover {');
                expect(resultadoResolvedor).toContain('background-color: blue;');
                expect(resultadoResolvedor).toContain('#elemento-caixa {');
                expect(resultadoResolvedor).toContain('height: 40px;');
                expect(resultadoResolvedor).toContain('.minha-segunda-classe {');
                expect(resultadoResolvedor).toContain('margin-top: 13mm;');
                expect(resultadoResolvedor).toContain('#meu-segundo-id {');
                expect(resultadoResolvedor).toContain('width: 400mm;');
                expect(resultadoResolvedor).toContain('html {');
                expect(resultadoResolvedor).toContain('background-color: hsl(50 80% 80%);');
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
                    '    incrementar-contador: meu-contador 4;',
                    '    início-linha-em-grade: span 2;',
                    '    inicio-coluna-em-grade: span 2;',
                    '    linha-em-grade: span some-grid-area;',
                    '    nome-animacao: test_05;',
                    '    propriedade-transicao: test1, animation4;',
                    '    tamanho-grade: span 2;',
                    '}'
                ]);

                const resultadoAvaliadorSintatico = avaliador.analisar(resultadoLexador.simbolos);
                const resultadoResolvedor = resolvedor.resolver(resultadoAvaliadorSintatico);

                expect(resultadoResolvedor).toBeTruthy();
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
                    resolvedor.resolver(avaliador.analisar(resultadoLexador.simbolos));
                }).not.toBeTruthy;

                expect(() => {
                    resolvedor.resolver(avaliador.analisar(resultadoLexador.simbolos));
                }).toHaveLength(0);
            }
        });
    });
});
