import { Estrutura } from "../estrutura";
import { PragmasEstrutura } from "../pragmas-estrutura";

export class Italico extends Estrutura {
    constructor(pragmas?: PragmasEstrutura) {
        super("em", pragmas);
    }
}