import { AvaliadorSintatico } from "../../fontes/avaliador-sintatico";
import { Importador } from "../../fontes/importador";
import { AvaliadorSintaticoInterface, ImportadorInterface, LexadorInterface } from "../../fontes/interfaces";
import { Lexador } from "../../fontes/lexador";
import { Tradutor } from "../../fontes/tradutor";

describe.skip('Testando Seletores AtribuiçãoAbreviada (de atribuição abreviada), que recebem dois ou mais atributos', () => {
    describe('Testes Unitários', () => {
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

        it('Trivial', () => {
            expect(1).toBe(1);
        });

        // ARQUIVO DE TESTES CRIADO PARA PENSARMOS EM UMA LÓGICA DE COMO
        // TESTAR OS SELETORES DE ATRIBUIÇÃO ABREVIADA, TENDO EM VISTA QUE CADA SELETOR
        // RECEBE UM DETERMINADO NÚMERO DE PARÂMETROS.
        
        // A QUANTIDADE DE PARÂMETROS QUE CADA SELETOR SHORTHAND RECEBE 
        // ESTÁ LISTADA NO FINAL DO ARQUIVO DE LISTA.
    });
});
