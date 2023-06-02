import { Estrutura } from "../estrutura";
import { PragmasEstrutura } from "../pragmas-estrutura";

export class Abreviacao extends Estrutura {
    constructor(pragmas?: PragmasEstrutura) {
        super("abbr", pragmas);
    }
}