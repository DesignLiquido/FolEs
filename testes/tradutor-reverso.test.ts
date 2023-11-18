import { AvaliadorSintaticoReverso } from "../fontes/avaliador-sintatico/avaliador-sintatico-reverso";
import { Importador } from "../fontes/importador";
import { AvaliadorSintaticoInterface, ImportadorInterface, LexadorInterface } from "../fontes/interfaces";
import { LexadorReverso } from "../fontes/lexador/lexador-reverso";
import { TradutorReverso } from "../fontes/tradutores/tradutor-reverso";

describe('Tradutor Reverso', () => {
    let lexador: LexadorInterface;
    let importador: ImportadorInterface;
    let avaliador: AvaliadorSintaticoInterface;
    let tradutorReverso: TradutorReverso;

    beforeEach(() => {
        lexador = new LexadorReverso();
        importador = new Importador(lexador);
        avaliador = new AvaliadorSintaticoReverso(importador);
        tradutorReverso = new TradutorReverso();
    });

    describe('Casos de Sucesso', () => {
        it('Trivial', () => {
            const resultadoLexador = lexador.mapear([
                'html {',
                '    padding-left: 130mm;',
                '}'
            ]);

            const resultadoAvaliadorSintatico = avaliador.analisar(resultadoLexador.simbolos);
            const resultado = tradutorReverso.traduzir(resultadoAvaliadorSintatico);

            expect(resultado).toBeTruthy();
        });
    });
});
