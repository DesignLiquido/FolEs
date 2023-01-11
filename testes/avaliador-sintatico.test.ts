import { AvaliadorSintatico } from "../fontes/avaliador-sintatico"
import { Lexador } from "../fontes/lexador"
import { SeletorModificador } from "../fontes/modificadores/superclasse"
import { Tradutor } from "../fontes/tradutor";
import { ValorComprimento } from "./listas/valor-quantificador"

describe('Avaliador Sintático', () => {
    let lexador: Lexador;
    let avaliador: AvaliadorSintatico;
    let tradutor: Tradutor;

    beforeEach(() => {
        lexador = new Lexador();
        avaliador = new AvaliadorSintatico();
        tradutor = new Tradutor();
    });


        it.skip('Casos de sucesso - testando seletores valor-quantificador', () => {
            // TODO @Vitor: Notar aqui que `atraso-animacao` já não funciona bem neste teste.
            for (let index = 2; index < Object.keys(ValorComprimento).length; index++) {
                const seletor = new SeletorModificador(ValorComprimento[index], '25', 'px');

            // Lexador
            const resultadoLexador = lexador.mapear([
                "lmht {",
                `${ValorComprimento[index]}: ${seletor['valor']}${seletor['quantificador']};`,
                "}"
            ]);

            // Avaliador Sintático
            const resultadoAvaliadorSintatico = avaliador.analisar(resultadoLexador.simbolos);

            expect(resultadoAvaliadorSintatico).toBeTruthy();
            expect(resultadoAvaliadorSintatico).toHaveLength(1);
            expect(resultadoAvaliadorSintatico[0].seletor).toBe('lmht');
            expect(resultadoAvaliadorSintatico[0].modificadores[0].nomeFoles).toStrictEqual(
                seletor['nomeFoles']
            );
            expect(resultadoAvaliadorSintatico[0].modificadores[0].propriedadeCss).toStrictEqual(
                seletor['propriedadeCss']
            );
            expect(resultadoAvaliadorSintatico[0].modificadores[0].valor).toStrictEqual(
                '25'
            );
            expect(resultadoAvaliadorSintatico[0].modificadores[0].quantificador).toStrictEqual(
                'px'
            );

            // O resultado do Avaliador deve ser recebido corretamente pelo Tradutor
            const resultadoTradutor = tradutor.traduzir(resultadoAvaliadorSintatico);

            expect(resultadoTradutor).toBeTruthy();
        }
    });

    it.skip('Casos de Falha - mensagens de erro esperadas como retorno', () => {
        for (let index = 0; index < Object.keys(ValorComprimento).length; index += 1) {

            // Lexador - valor e quantificador não informados
            const resultadoLexador = lexador.mapear([
                "lmht {",
                `${ValorComprimento[index]}: ;`,
                "}"
            ]);

            // Avaliador Sintático deve retornar erro
            expect(() => {
                avaliador.analisar(resultadoLexador.simbolos);
            }).toThrow(`Esperado ';' após declaração de valor de modificador '${ValorComprimento[index]}'.`);

            // Causar erro de digitação
            const seletorIncorreto = ValorComprimento[index].replace(ValorComprimento[index][0], '')

            const novoLexador = lexador.mapear([
                "lmht {",
                `${seletorIncorreto}: 12px;`,
                "}"
            ]);

            // Erro esperado como retorno - seletor não encontrado
            expect(() => {
                avaliador.analisar(novoLexador.simbolos);
            }).toThrow(`O seletor '${seletorIncorreto}' não foi encontrado.`);
        }
    });
});
