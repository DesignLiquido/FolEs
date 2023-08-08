import { ResultadoLexadorInterface } from "./resultado-lexador-interface";
import { SimboloInterface } from "./simbolo-interface";

export interface LexadorInterface {
    simbolos: Array<SimboloInterface>;
    mapear(codigo: string[]): ResultadoLexadorInterface;
}
