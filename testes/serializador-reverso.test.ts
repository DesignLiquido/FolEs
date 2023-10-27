import { AvaliadorSintaticoReverso } from "../fontes/avaliador-sintatico/avaliador-sintatico-reverso";
import { LexadorReverso } from "../fontes/lexador/lexador-reverso";
import { SerializadorReverso } from "../fontes/serializadores/serializador-reverso";

import estruturasLmht from "../fontes/tradutor/estruturas-lmht";
import { AvaliadorSintaticoInterface, ImportadorInterface, LexadorInterface } from "../fontes/interfaces";
import { Importador } from "../fontes/importador";

describe('Serializador Reverso', () => {
    let lexadorReverso: LexadorInterface;
    let importador: ImportadorInterface;
    let avaliadorReverso: AvaliadorSintaticoInterface;
    let tradutorReverso: SerializadorReverso;

    beforeEach(() => {
        lexadorReverso = new LexadorReverso();
        importador = new Importador(lexadorReverso);
        avaliadorReverso = new AvaliadorSintaticoReverso(importador);
        tradutorReverso = new SerializadorReverso();
    });

    // TODO: Finalizar a lógica em `declaracaoPorSeletor()` (avaliador sintático reverso)
    it.skip('Testando tradução das estruturas HTML', () => {
        for (let index = 0; index < Object.keys(estruturasLmht).length; index += 1) {

            // Lexador recebe as estruturas FolEs
            const resultadoLexador = lexadorReverso.mapear([
                `${Object.keys(estruturasLmht)[index]} {`,
                "   font-size: 60px;",
                "}"
            ])

            // Avaliador Sintático
            const resultadoAvaliadorSintatico = avaliadorReverso.analisar(resultadoLexador.simbolos);

            // Tradutor deve retornar a estrutura HTML correspondente
            const resultadoTradutor = tradutorReverso.serializar(resultadoAvaliadorSintatico);
            expect(resultadoTradutor).toContain(Object.values(estruturasLmht)[index]);
        }
    });
});