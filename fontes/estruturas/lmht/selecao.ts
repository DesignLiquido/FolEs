import { Estrutura } from "../estrutura";
import { PragmasEstrutura } from "../pragmas-estrutura";

export class Selecao extends Estrutura {
    constructor(pragmas?: PragmasEstrutura) {
        super("select", pragmas);
    }
}