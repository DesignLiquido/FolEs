import { Estrutura } from "../estrutura";
import { PragmasEstrutura } from "../pragmas-estrutura";

export class Area extends Estrutura {
    constructor(pragmas?: PragmasEstrutura) {
        super("area", pragmas);
    }
}