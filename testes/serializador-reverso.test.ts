import { AvaliadorSintaticoReverso } from "../fontes/avaliador-sintatico/avaliador-sintatico-reverso";
import { LexadorReverso } from "../fontes/lexador/lexador-reverso";
import { SerializadorReverso } from "../fontes/serializadores/serializador-reverso";

import estruturasLmht from "../fontes/tradutores/estruturas-lmht";
import { AvaliadorSintaticoInterface, ImportadorInterface, LexadorInterface } from "../fontes/interfaces";
import { Importador } from "../fontes/importador";

describe('Serializador Reverso', () => {
    let lexadorReverso: LexadorInterface;
    let importador: ImportadorInterface;
    let avaliadorReverso: AvaliadorSintaticoInterface;
    let serializadorReverso: SerializadorReverso;

    beforeEach(() => {
        lexadorReverso = new LexadorReverso();
        importador = new Importador(lexadorReverso);
        avaliadorReverso = new AvaliadorSintaticoReverso(importador);
        serializadorReverso = new SerializadorReverso();
    });

    // TODO: Finalizar a lógica em `declaracaoPorSeletor()` (avaliador sintático reverso)
    it('Testando tradução das estruturas HTML', () => {
        for (let index = 0; index < Object.keys(estruturasLmht).length; index += 1) {

            // Lexador recebe as estruturas FolEs
            const resultadoLexador = lexadorReverso.mapear([
                `${Object.keys(estruturasLmht)[index]} {`,
                "   font-size: 60px;",
                "}"
            ])

            // Lexador deve montar um objeto de 8 símbolos sem retornar erros
            expect(resultadoLexador.simbolos).toHaveLength(8);
            expect(resultadoLexador.erros).toHaveLength(0);
            
            // Avaliador Sintático
            const resultadoAvaliadorSintatico = avaliadorReverso.analisar(resultadoLexador.simbolos);

            // Tradutor deve retornar a estrutura HTML correspondente
            const resultadoSerializador = serializadorReverso.serializar(resultadoAvaliadorSintatico);
            
            if (Object.values(estruturasLmht)[index].length > 1) {
                const estruturaLmhtString = Object.values(estruturasLmht)[index][0].toString();
                expect(resultadoSerializador).toContain(estruturaLmhtString);
            } else {
                const estruturaLmhtString = Object.values(estruturasLmht)[index].toString();
                expect(resultadoSerializador).toContain(estruturaLmhtString);
            }
        }
    });
});