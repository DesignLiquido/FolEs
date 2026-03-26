import { Declaracao } from "../declaracoes";
import { ErroAvaliadorSintatico } from "../avaliador-sintatico";
import { Simbolo } from "../lexador";

export interface AvaliadorSintaticoInterface {
    erros: ErroAvaliadorSintatico[];
    analisar(simbolos: Simbolo[]): Declaracao[];
}
