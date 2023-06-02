import { Estrutura } from "../estrutura";
import { PragmasEstrutura } from "../pragmas-estrutura";

export class Linha extends Estrutura {
    constructor(pragmas?: PragmasEstrutura) {
        super("tr", pragmas);
    }
}