import { Estrutura } from "../estrutura";
import { PragmasEstrutura } from "../pragmas-estrutura";

export class Preformatado extends Estrutura {
    constructor(pragmas?: PragmasEstrutura) {
        super("pre", pragmas);
    }
}