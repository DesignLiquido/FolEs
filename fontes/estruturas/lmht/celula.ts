import { Estrutura } from "../estrutura";
import { PragmasEstrutura } from "../pragmas-estrutura";

export class Celula extends Estrutura {
    constructor(pragmas?: PragmasEstrutura) {
        super("td", pragmas);
    }
}