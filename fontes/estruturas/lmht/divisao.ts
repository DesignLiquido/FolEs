import { Estrutura } from "../estrutura";
import { PragmasEstrutura } from "../pragmas-estrutura";

export class Divisao extends Estrutura {
    constructor(pragmas?: PragmasEstrutura) {
        super("div", pragmas);
    }
}