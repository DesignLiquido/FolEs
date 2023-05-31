import { Estrutura } from "../estrutura";
import { PragmasEstrutura } from "../pragmas-estrutura";

export class Citacao extends Estrutura {
    constructor(pragmas?: PragmasEstrutura) {
        super("blockquote", pragmas);
    }
}