import { Estrutura } from "../estrutura";
import { PragmasEstrutura } from "../pragmas-estrutura";

export class Sublinhado extends Estrutura {
    constructor(pragmas?: PragmasEstrutura) {
        super("u", pragmas);
    }
}