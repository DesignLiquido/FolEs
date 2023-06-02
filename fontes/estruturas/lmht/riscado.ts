import { Estrutura } from "../estrutura";
import { PragmasEstrutura } from "../pragmas-estrutura";

export class Riscado extends Estrutura {
    constructor(pragmas?: PragmasEstrutura) {
        super("s", pragmas);
    }
}