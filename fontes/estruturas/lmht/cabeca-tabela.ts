import { Estrutura } from "../estrutura";
import { PragmasEstrutura } from "../pragmas-estrutura";

export class CabecaTabela extends Estrutura {
    constructor(pragmas?: PragmasEstrutura) {
        super("thead", pragmas);
    }
}