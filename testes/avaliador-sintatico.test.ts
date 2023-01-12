import { AvaliadorSintatico } from "../fontes/avaliador-sintatico"
import { Lexador } from "../fontes/lexador"
import { SeletorModificador } from "../fontes/modificadores/superclasse"
import { Tradutor } from "../fontes/tradutor";
import { ValorQuantificador } from "./listas/valor-quantificador"

describe('Avaliador Sintático', () => {
    let lexador: Lexador;
    let avaliador: AvaliadorSintatico;
    let tradutor: Tradutor;

    beforeEach(() => {
        lexador = new Lexador();
        avaliador = new AvaliadorSintatico();
        tradutor = new Tradutor();
    });


    it('Casos de sucesso - testando seletores valor-quantificador', () => {
        for (let index = 0; index < ValorQuantificador.length; index += 1) {
            const seletor = new SeletorModificador(ValorQuantificador[index], '25', 'px');

            // Lexador
            const resultadoLexador = lexador.mapear([
                "lmht {",
                `${ValorQuantificador[index]}: ${seletor['valor']}${seletor['quantificador']};`,
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

    it('Casos de Falha - mensagens de erro esperadas como retorno', () => {
        for (let index = 0; index < Object.keys(ValorQuantificador).length; index += 1) {

            // Lexador - valor e quantificador não informados
            const resultadoLexador = lexador.mapear([
                "lmht {",
                `${ValorQuantificador[index]}: ;`,
                "}"
            ]);

            // Avaliador Sintático deve retornar erro
            expect(() => {
                avaliador.analisar(resultadoLexador.simbolos);
            }).toThrow(`Esperado ';' após declaração de valor de modificador '${ValorQuantificador[index]}'.`);

            // Causar erro de digitação
            const seletorIncorreto = ValorQuantificador[index].replace(ValorQuantificador[index][0], '')

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
