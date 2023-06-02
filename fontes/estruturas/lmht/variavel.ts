import { Estrutura } from "../estrutura";
import { PragmasEstrutura } from "../pragmas-estrutura";

export class Variavel extends Estrutura {
    constructor(pragmas?: PragmasEstrutura) {
        super("var", pragmas);
    }
}