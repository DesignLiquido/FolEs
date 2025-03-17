import { AvaliadorSintaticoReverso } from "../fontes/avaliador-sintatico/avaliador-sintatico-reverso";
import { BlocoDeclaracao } from "../fontes/declaracoes";
import { Importador } from "../fontes/importador";
import { AvaliadorSintaticoInterface, ImportadorInterface, LexadorInterface } from "../fontes/interfaces";
import { LexadorReverso } from "../fontes/lexador/lexador-reverso";
import { TradutorReverso } from "../fontes/tradutores/tradutor-reverso";

describe.skip('Tradutor Reverso', () => {
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
            expect(resultadoAvaliadorSintatico.length).toBeGreaterThanOrEqual(1);

            const primeiroResultado = resultadoAvaliadorSintatico[0];
            expect(primeiroResultado).toBeInstanceOf(BlocoDeclaracao);

            const primeiroResultadoTipado = primeiroResultado as BlocoDeclaracao;
            expect(primeiroResultadoTipado.modificadores.length).toBeGreaterThanOrEqual(1);

            const resultado = tradutorReverso.traduzir(primeiroResultadoTipado[0]);

            expect(resultado).toBeTruthy();
        });
    });
});
