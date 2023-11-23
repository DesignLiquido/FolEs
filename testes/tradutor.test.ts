import * as vlq from 'vlq';

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

    describe('Tradução', () => {
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

    describe('Geração de mapas de fontes', () => {
        it('Trivial', () => {
            /* const fonteOriginal = [
                'lmht {',
                '    largura-borda-direita: 130mm;',
                '}'
            ]; */
            const fonteOriginal = [
                'paragrafo {',
                '    tamanho-fonte: 14px;',
                '}'
            ];
            const resultadoLexador = lexador.mapear(fonteOriginal);

            const resultadoAvaliadorSintatico = avaliador.analisar(resultadoLexador.simbolos);
            const resultadoTraducao = tradutor.traduzir(resultadoAvaliadorSintatico);
            const resultado = tradutor.gerarMapaFontes(resultadoTraducao, fonteOriginal.join('\n'));

            /* 
            for (const linha of resultado.mappings.split(';')) {
                for (const pragma of linha.split(',')) {
                    console.log(vlq.decode(pragma));
                }
            }

            console.log(resultado); */
            console.log(resultado);
            expect(resultado.version).toBe(3);
            expect(resultado.file).toBeTruthy();
            expect(resultado.sources.length).toBeGreaterThan(0);
            expect(resultado.sourcesContent).toBeTruthy();
            expect(resultado.mappings.length).toBeGreaterThan(0);
        });
    })
});
