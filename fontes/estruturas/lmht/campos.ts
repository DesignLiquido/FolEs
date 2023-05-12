import { Estrutura } from "../estrutura";
import { PragmasEstrutura } from "../pragmas-estrutura";

export class Campos extends Estrutura {
    constructor(pragmas?: PragmasEstrutura) {
        super("", pragmas);
    }
}