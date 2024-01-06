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

        it.skip('converterTextoParaFolEs - caso de sucesso', () => {
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
            // console.log(resultado);
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

        it.skip('converterParaFolEs - caso de sucesso', () => {
            const resultado = foles.converterParaFolEs('testes/modelos/arquivo-modelo.css');
            // console.log(resultado);
            expect(resultado).toBeTruthy();
            expect(resultado).toContain('lmht');
            expect(resultado).toContain('largura-maxima');
            expect(resultado).toContain('140px');
        });
    });
})
