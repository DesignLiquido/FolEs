import { Estrutura } from "../estrutura";
import { PragmasEstrutura } from "../pragmas-estrutura";

export class Tabela extends Estrutura {
    constructor(pragmas?: PragmasEstrutura) {
        super("table", pragmas);
    }
}