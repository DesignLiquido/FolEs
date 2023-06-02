import { Estrutura } from "../estrutura";
import { PragmasEstrutura } from "../pragmas-estrutura";

export class GrupoColunas extends Estrutura {
    constructor(pragmas?: PragmasEstrutura) {
        super("colgroup", pragmas);
    }
}