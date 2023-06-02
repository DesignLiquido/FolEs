import { Estrutura } from "../estrutura";
import { PragmasEstrutura } from "../pragmas-estrutura";

export class EnvelopeTexto extends Estrutura {
    constructor(pragmas?: PragmasEstrutura) {
        super("span", pragmas);
    }
}