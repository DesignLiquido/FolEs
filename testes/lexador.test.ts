import { Lexador } from "../fontes/lexador";

describe('Lexador', () => {
    describe('mapear()', () => {
        let lexador: Lexador;

        beforeEach(() => {
            lexador = new Lexador();
        });

        it('Funciona', () => {
            const resultado = lexador.mapear([
                "lmht {",
                "    tamanho-texto: 12px;",
                "}"
            ]);
            expect(resultado).toBeTruthy();
        });
    });
});
