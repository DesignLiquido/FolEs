import { Declaracao } from "../declaracoes";
import { Simbolo } from "../lexador";

export interface AvaliadorSintaticoInterface {
    analisar(simbolos: Simbolo[]): Declaracao[];
}
