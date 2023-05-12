import { Estrutura } from "../estrutura";
import { PragmasEstrutura } from "../pragmas-estrutura";

export class Lmht extends Estrutura {
    constructor(pragmas?: PragmasEstrutura) {
        super("html", pragmas);
    }
}