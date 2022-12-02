import { AvaliadorSintatico } from "../../fontes/avaliador-sintatico";
import { Lexador } from "../../fontes/lexador";
import { SeletorModificador } from "../../fontes/modificadores/superclasse";
import tiposDeSimbolos from "../../fontes/tipos-de-simbolos/foles";
import { Tradutor } from "../../fontes/tradutor";
import { PalavrasReservadas } from "../listas/palavras-reservadas";

describe('Testando Seletores que recebem PALAVRAS RESERVADAS como atributo', () => {
    describe('Testes Unitários', () => {
        let lexador: Lexador;
        let avaliador: AvaliadorSintatico;
        let tradutor: Tradutor;

        beforeEach(() => {
            lexador = new Lexador();
            avaliador = new AvaliadorSintatico();
            tradutor = new Tradutor();
        });

        it('Trivial', () => {
            expect(1).toBe(1);
        });

        // ARQUIVO DE TESTES CRIADO PARA PENSARMOS EM UMA LÓGICA DE COMO
        // TESTAR OS SELETORES QUE RECEBEM PALAVRAS ESPECÍFICAS COMO ATRIBUTO
    });
});
