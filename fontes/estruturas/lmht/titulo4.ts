import { Estrutura } from "../estrutura";
import { PragmasEstrutura } from "../pragmas-estrutura";

export class Titulo4 extends Estrutura {
    constructor(pragmas?: PragmasEstrutura) {
        super("h4", pragmas);
    }
}