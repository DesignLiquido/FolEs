import { Estrutura } from "../estrutura";
import { PragmasEstrutura } from "../pragmas-estrutura";

export class Termo extends Estrutura {
    constructor(pragmas?: PragmasEstrutura) {
        super("dt", pragmas);
    }
}