import { Estrutura } from "../estrutura";
import { PragmasEstrutura } from "../pragmas-estrutura";

export class Secao extends Estrutura {
    constructor(pragmas?: PragmasEstrutura) {
        super("section", pragmas);
    }
}