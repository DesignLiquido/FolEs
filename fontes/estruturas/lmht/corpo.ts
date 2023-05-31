import { Estrutura } from "../estrutura";
import { PragmasEstrutura } from "../pragmas-estrutura";

export class Corpo extends Estrutura {
    constructor(pragmas?: PragmasEstrutura) {
        super("body", pragmas);
    }
}