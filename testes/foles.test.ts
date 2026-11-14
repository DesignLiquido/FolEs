import { FolEs } from "../fontes/foles";

describe('Classe FolEs - Tradução de Textos', () => {
    describe('FolEs para CSS', () => {
        let foles: FolEs;

        beforeEach(() => {
            foles = new FolEs(false);
        });

        it('converterTextoParaCss - caso de sucesso', () => {
            const resultado = foles.converterTextoParaCss('lmht {tamanho-fonte: 12px;} ');
            expect(resultado).toBeTruthy();
            expect(resultado).toContain('html');
            expect(resultado).toContain('font-size');
            expect(resultado).toContain('12px');
        });

        it('converterTextoParaFolEs - caso de falha', () => {
            // Propriedade FolEs com erro de digitação deve retornar erro
            expect(() => {
                foles.converterTextoParaCss('lmht {amanho-fonte: 12px;} ');
            }).toThrow(`O seletor 'amanho-fonte' não existe.`);
        });
    });

    describe('CSS para FolEs', () => {
        let foles: FolEs;

        beforeEach(() => {
            foles = new FolEs(false);
        });

        it('converterTextoParaFolEs - caso de sucesso', () => {
            const resultado = foles.converterTextoParaFolEs('html { font-size: 12px; }');
            expect(resultado).toBeTruthy();
            expect(resultado).toContain('lmht');
            expect(resultado).toContain('tamanho-fonte');
            expect(resultado).toContain('12px');
        });

        it('converterTextoParaFolEs - caso de falha', () => {
            // Propriedade CSS com erro de digitação deve retornar erro
            expect(() => {
                foles.converterTextoParaFolEs('html { fon-size: 12px; }');
            }).toThrow(`O seletor 'fon-size' não foi encontrado.`);
        });
    });
});

describe('Classe FolEs - Tradução de Arquivos', () => {
    describe('FolEs para CSS', () => {
        let foles: FolEs;

        beforeEach(() => {
            foles = new FolEs(false);
        });

        it('converterParaCss - caso de sucesso', () => {
            const resultado = foles.converterParaCss('testes/modelos/arquivo-modelo.foles');

            expect(resultado).toBeTruthy();
            expect(resultado).toContain('q');
            expect(resultado).toContain('contain');
            expect(resultado).toContain('none');
        });
    });

    describe('CSS para FolEs', () => {
        let foles: FolEs;

        beforeEach(() => {
            foles = new FolEs(false);
        });

        it('converterParaFolEs - caso de sucesso', () => {
            const resultado = foles.converterParaFolEs('testes/modelos/arquivo-modelo.css');

            expect(resultado).toBeTruthy();
            expect(resultado).toContain('lmht');
            expect(resultado).toContain('largura-maxima');
            expect(resultado).toContain('140px');
        });
    });

    describe('Listas de seletores e propriedade color (issue #330)', () => {
        let foles: FolEs;

        beforeEach(() => {
            foles = new FolEs(false);
        });

        it('FolEs para CSS - lista de estruturas', () => {
            const resultado = foles.converterTextoParaCss('lmht, corpo { margem: 0; }');
            expect(resultado).toBe('    html, body {\n    margin: 0;\n    }\n\n');
        });

        it('FolEs para CSS - lista de classes', () => {
            const resultado = foles.converterTextoParaCss('.x, .y { margem: 0; }');
            expect(resultado).toBe('    .x, .y {\n    margin: 0;\n    }\n\n');
        });

        it('FolEs para CSS - lista com seletor descendente e id', () => {
            const resultado = foles.converterTextoParaCss('.a paragrafo, #b { margem: 0; }');
            expect(resultado).toBe('    .a p, #b {\n    margin: 0;\n    }\n\n');
        });

        it('FolEs para CSS - vírgula sem seletor seguinte gera erro', () => {
            expect(() => foles.converterTextoParaCss('lmht, { margem: 0; }'))
                .toThrow("Esperado seletor após ','.");
        });

        it('CSS para FolEs - lista de estruturas', () => {
            const resultado = foles.converterTextoParaFolEs('p, div { margin: 0; }');
            expect(resultado).toBe('    paragrafo, divisao {\n    margem: 0;\n    }\n\n');
        });

        it('CSS para FolEs - lista com seletor descendente e id', () => {
            const resultado = foles.converterTextoParaFolEs('.a p, #b { margin: 0; }');
            expect(resultado).toBe('    .a paragrafo, #b {\n    margem: 0;\n    }\n\n');
        });

        it('CSS para FolEs - vírgula sem seletor seguinte gera erro', () => {
            expect(() => foles.converterTextoParaFolEs('p, { margin: 0; }'))
                .toThrow("Esperado seletor após ','.");
        });

        it('CSS para FolEs - bloco sem chave de fechamento gera erro', () => {
            expect(() => foles.converterTextoParaFolEs('p { margin: 0;'))
                .toThrow("Esperado '}' ao final do bloco.");
        });

        it('CSS para FolEs - propriedade color', () => {
            const resultado = foles.converterTextoParaFolEs('p { color: red; font-size: 12px; }');
            expect(resultado).toBe('    paragrafo {\n    cor: vermelho;\n    tamanho-fonte: 12px;\n    }\n\n');
        });

        it('Ida e volta - CSS gerado com color pode ser traduzido de volta', () => {
            const css = foles.converterTextoParaCss('paragrafo { cor: vermelho; tamanho-fonte: 12px; }');
            const resultado = foles.converterTextoParaFolEs(css);
            expect(resultado).toBe('    paragrafo {\n    cor: vermelho;\n    tamanho-fonte: 12px;\n    }\n\n');
        });
    });

    describe('Cores hexadecimais, seletores descendentes e pseudoclasses', () => {
        let foles: FolEs;

        beforeEach(() => {
            foles = new FolEs(false);
        });

        it.each([
            ['p { color: #ff0000; }', 'cor: #ff0000;'],
            ['p { color: #fff; }', 'cor: #fff;'],
            ['p { color: #00ff00; }', 'cor: #00ff00;'],
            ['p { background-color: #1e3aff; }', 'cor-fundo: #1e3aff;'],
            ['p { color: #12ab34cd; }', 'cor: #12ab34cd;'],
            ['p { border: 1px solid #fff; }', 'borda: 1px sólido #fff;'],
        ])('CSS para FolEs - hexadecimal em %s', (css, esperado) => {
            expect(foles.converterTextoParaFolEs(css)).toContain(esperado);
        });

        it('CSS para FolEs - cerquilha sem código hexadecimal gera erro', () => {
            expect(() => foles.converterTextoParaFolEs('p { color: #; }'))
                .toThrow("Esperado código hexadecimal válido após '#'.");
        });

        it('CSS para FolEs - hexadecimal com tamanho inválido gera erro', () => {
            expect(() => foles.converterTextoParaFolEs('p { color: #ff00; }'))
                .toThrow('hexadecimal inválido');
        });

        it('FolEs para CSS - seletores descendentes de classe e id', () => {
            expect(foles.converterTextoParaCss('.a .b { margem: 0; }'))
                .toBe('    .a .b {\n    margin: 0;\n    }\n\n');
            expect(foles.converterTextoParaCss('#x .b { margem: 0; }'))
                .toBe('    #x .b {\n    margin: 0;\n    }\n\n');
            expect(foles.converterTextoParaCss('.a #b { margem: 0; }'))
                .toBe('    .a #b {\n    margin: 0;\n    }\n\n');
        });

        it('CSS para FolEs - seletores descendentes de classe e id', () => {
            expect(foles.converterTextoParaFolEs('.a .b { margin: 0; }'))
                .toBe('    .a .b {\n    margem: 0;\n    }\n\n');
            expect(foles.converterTextoParaFolEs('#x .b, div p { margin: 0; }'))
                .toBe('    #x .b, divisao paragrafo {\n    margem: 0;\n    }\n\n');
        });

        it('CSS para FolEs - pseudoclasses', () => {
            expect(foles.converterTextoParaFolEs('p:hover { margin: 0; }'))
                .toBe('    paragrafo:sobre {\n    margem: 0;\n    }\n\n');
            expect(foles.converterTextoParaFolEs('.a:hover .b, #x:focus { margin: 0; }'))
                .toBe('    .a:sobre .b, #x:foco {\n    margem: 0;\n    }\n\n');
        });

        it('CSS para FolEs - pseudoclasse desconhecida gera erro', () => {
            expect(() => foles.converterTextoParaFolEs('p:bogus { margin: 0; }'))
                .toThrow("A pseudoclasse 'bogus' não é suportada.");
        });

        it('Ida e volta - lista, descendentes, pseudoclasses e hexadecimal', () => {
            const css = foles.converterTextoParaCss(
                '.a:sobre .b, paragrafo:foco, #x { cor: #1e3aff; cor-fundo: vermelho; }',
            );
            expect(css).toBe('    .a:hover .b, p:focus, #x {\n    color: #1e3aff;\n    background-color: red;\n    }\n\n');

            const folEs = foles.converterTextoParaFolEs(css);
            expect(folEs).toBe('    .a:sobre .b, paragrafo:foco, #x {\n    cor: #1e3aff;\n    cor-fundo: vermelho;\n    }\n\n');
            expect(foles.converterTextoParaCss(folEs)).toBe(css);
        });
    });
})
