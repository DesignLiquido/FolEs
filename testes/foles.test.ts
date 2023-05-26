import { FolEs } from "../fontes/foles";

describe('Classe FolEs', () => {
    describe('FolEs para CSS', () => {
        let foles: FolEs;

        beforeEach(() => {
            foles = new FolEs();
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
            foles = new FolEs();
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
