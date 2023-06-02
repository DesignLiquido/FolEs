import { Estrutura } from "../estrutura";
import { PragmasEstrutura } from "../pragmas-estrutura";

export class Coluna extends Estrutura {
    constructor(pragmas?: PragmasEstrutura) {
        super("col", pragmas);
    }
}