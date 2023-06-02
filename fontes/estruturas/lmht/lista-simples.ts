import { Estrutura } from "../estrutura";
import { PragmasEstrutura } from "../pragmas-estrutura";

export class ListaSimples extends Estrutura {
    constructor(pragmas?: PragmasEstrutura) {
        super("ul", pragmas);
    }
}