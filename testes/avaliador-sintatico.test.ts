import { AvaliadorSintatico } from "../fontes/avaliador-sintatico"
import { Importador } from "../fontes/importador";
import { AvaliadorSintaticoInterface, ImportadorInterface, LexadorInterface, ResultadoLexadorInterface } from "../fontes/interfaces";
import { Lexador } from "../fontes/lexador"
import { SeletorModificador } from "../fontes/modificadores/superclasse"
import { Serializador } from "../fontes/serializadores";
import { ValorQuantificador } from "./listas/valor-quantificador"

describe('Avaliador Sintático', () => {
    let lexador: LexadorInterface;
    let importador: ImportadorInterface;
    let avaliadorSintatico: AvaliadorSintaticoInterface;
    let tradutor: Serializador;

    beforeEach(() => {
        lexador = new Lexador();
        importador = new Importador(lexador);
        avaliadorSintatico = new AvaliadorSintatico(importador);
        tradutor = new Serializador();
    });


    it('Casos de sucesso - testando seletores valor-quantificador', () => {
        for (let index = 0; index < ValorQuantificador.length; index += 1) {
            const seletor: Object = new SeletorModificador(ValorQuantificador[index], '25', 'px');

            // Lexador
            const resultadoLexador: ResultadoLexadorInterface = lexador.mapear([
                "lmht {",
                `${ValorQuantificador[index]}: ${seletor['valor']}${seletor['quantificador']};`,
                "}"
            ]);
            
            // Avaliador Sintático
            const resultadoAvaliadorSintatico = avaliadorSintatico.analisar(resultadoLexador.simbolos);

            expect(resultadoAvaliadorSintatico).toBeTruthy();
            expect(resultadoAvaliadorSintatico).toHaveLength(1);

            expect(resultadoAvaliadorSintatico[0].seletores[0]['estrutura'].tagHtml).toBe('html');
            expect(resultadoAvaliadorSintatico[0].seletores[0]['pseudoclasse']).toBe(undefined);

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
            const resultadoTradutor = tradutor.serializar(resultadoAvaliadorSintatico);

            expect(resultadoTradutor).toBeTruthy();
        }
    });

    it('Casos de Falha - mensagens de erro esperadas como retorno', () => {
        for (let index = 0; index < Object.keys(ValorQuantificador).length; index += 1) {

            // Lexador - valor e quantificador não informados
            let resultadoLexador: ResultadoLexadorInterface = lexador.mapear([
                "lmht {",
                `${ValorQuantificador[index]}: ;`,
                "}"
            ]);

            // Avaliador Sintático deve retornar erro
            expect(() => {
                avaliadorSintatico.analisar(resultadoLexador.simbolos);
            }).toThrow(`Cannot read properties of undefined (reading 'hasOwnProperty')`);

            // Causar erro de digitação
            const seletorIncorreto = ValorQuantificador[index].replace(ValorQuantificador[index][0], '')

            resultadoLexador = lexador.mapear([
                "lmht {",
                `${seletorIncorreto}: 12px;`,
                "}"
            ]);

            // Erro esperado como retorno - seletor não encontrado
            expect(() => {
                avaliadorSintatico.analisar(resultadoLexador.simbolos);
            }).toThrow(`O seletor '${seletorIncorreto}' não existe.`);
        }
    });
});
