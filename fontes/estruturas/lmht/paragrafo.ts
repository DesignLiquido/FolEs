import { Estrutura } from "../estrutura";
import { PragmasEstrutura } from "../pragmas-estrutura";

export class Paragrafo extends Estrutura {
    constructor(pragmas?: PragmasEstrutura) {
        super("p", pragmas);
    }
}