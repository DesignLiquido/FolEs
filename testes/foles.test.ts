import { FolEs } from "../fontes/foles";

describe('Classe FolEs', () => {
    describe('FolEs para CSS', () => {
        let foles: FolEs;

        beforeEach(() => {
            foles = new FolEs();
        });

        it('converterTextoParaCss', () => {
            const resultado = foles.converterTextoParaCss('lmht {tamanho-fonte:12px;} ');
            expect(resultado).toBeTruthy();
        });
    })
})