import { AvaliadorSintatico } from "../fontes/avaliador-sintatico"
import { Lexador } from "../fontes/lexador"
import { SeletorModificador } from "../fontes/modificadores/superclasse"
import { Tradutor } from "../fontes/tradutor";
import { ValorComprimento } from "./listas/valor-quantificador"
import estruturasHtml from "../fontes/tradutor/estruturas-html";

describe('Tradutor', () => {
    let lexador: Lexador;
    let avaliador: AvaliadorSintatico;
    let tradutor: Tradutor;

    beforeEach(() => {
        lexador = new Lexador();
        avaliador = new AvaliadorSintatico();
        tradutor = new Tradutor();
    });

    it('Testando tradução das estruturas HTML', () => {
        for (let index = 0; index < Object.keys(estruturasHtml).length; index += 1) {

            // Lexador recebe as estruturas FolEs
            const resultadoLexador = lexador.mapear([
                `${Object.keys(estruturasHtml)[index]} {`,
                "   tamanho-fonte: 60px;",
                "}"
            ])

            // Avaliador Sintático
            const resultadoAvaliadorSintatico = avaliador.analisar(resultadoLexador.simbolos);

            // Tradutor deve retornar a estrutura HTML correspondente
            const resultadoTradutor = tradutor.traduzir(resultadoAvaliadorSintatico);
            expect(resultadoTradutor).toContain(Object.values(estruturasHtml)[index]);
        }
    });

    it('Casos de sucesso - traduzindo seletores valor-quantificador', () => {
        for (let index = 0; index < Object.keys(ValorComprimento).length; index += 1) {
            const seletor = new SeletorModificador(ValorComprimento[index], '40', 'px');

            // Lexador
            const resultadoLexador = lexador.mapear([
                "lmht {",
                `${ValorComprimento[index]}: ${seletor['valor']}${seletor['quantificador']};`,
                "}"
            ]);

            // Avaliador Sintático
            const resultadoAvaliadorSintatico = avaliador.analisar(resultadoLexador.simbolos);

            // Tradutor deve funcionar de acordo
            const resultadoTradutor = tradutor.traduzir(resultadoAvaliadorSintatico);

            expect(resultadoTradutor).toBeTruthy();
            expect(resultadoTradutor).toContain("html");
            expect(resultadoTradutor).toContain(seletor['propriedadeCss']);
            expect(resultadoTradutor).toContain('40cm;');
        }
    });

    it('Casos de Falha - seletores valor-quantificador', () => {
        for (let index = 0; index < Object.keys(ValorComprimento).length; index += 1) {

            // Lexador - valor e quantificador não informados
            const resultadoLexador = lexador.mapear([
                "lmht {",
                `${ValorComprimento[index]}: ;`,
                "}"
            ]);

            // Tradutor - Não deve ser executado, dado o erro gerado no Avaliador Sintático
            expect(() => {
                tradutor.traduzir(avaliador.analisar(resultadoLexador.simbolos));
            }).not.toBeTruthy;

            expect(() => {
                tradutor.traduzir(avaliador.analisar(resultadoLexador.simbolos));
            }).toHaveLength(0);
        }
    });
});
