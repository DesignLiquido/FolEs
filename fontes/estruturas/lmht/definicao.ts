import { Estrutura } from "../estrutura";
import { PragmasEstrutura } from "../pragmas-estrutura";

export class Definicao extends Estrutura {
    constructor(pragmas?: PragmasEstrutura) {
        super("dfn", pragmas);
    }
}