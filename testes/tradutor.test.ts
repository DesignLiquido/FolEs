import { AvaliadorSintatico } from "../fontes/avaliador-sintatico";
import { Importador } from "../fontes/importador";
import { AvaliadorSintaticoInterface, ImportadorInterface, LexadorInterface } from "../fontes/interfaces";
import { Lexador } from "../fontes/lexador";
import { Tradutor } from "../fontes/tradutores/tradutor";

describe('Tradutor', () => {
    let lexador: LexadorInterface;
    let importador: ImportadorInterface;
    let avaliador: AvaliadorSintaticoInterface;
    let tradutor: Tradutor;

    beforeEach(() => {
        lexador = new Lexador();
        importador = new Importador(lexador);
        avaliador = new AvaliadorSintatico(importador);
        tradutor = new Tradutor();
    });

    describe('Casos de Sucesso', () => {
        it('Trivial', () => {
            const resultadoLexador = lexador.mapear([
                'lmht {',
                '    largura-borda-direita: 130mm;',
                '}'
            ]);

            const resultadoAvaliadorSintatico = avaliador.analisar(resultadoLexador.simbolos);
            const resultado = tradutor.traduzir(resultadoAvaliadorSintatico);

            expect(resultado).toBeTruthy();
        });
    });
});
