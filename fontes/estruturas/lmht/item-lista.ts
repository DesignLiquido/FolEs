import { Estrutura } from "../estrutura";
import { PragmasEstrutura } from "../pragmas-estrutura";

export class ItemLista extends Estrutura {
    constructor(pragmas?: PragmasEstrutura) {
        super("li", pragmas);
    }
}