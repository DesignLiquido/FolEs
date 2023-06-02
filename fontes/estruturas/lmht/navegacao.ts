import { Estrutura } from "../estrutura";
import { PragmasEstrutura } from "../pragmas-estrutura";

export class Navegacao extends Estrutura {
    constructor(pragmas?: PragmasEstrutura) {
        super("nav", pragmas);
    }
}