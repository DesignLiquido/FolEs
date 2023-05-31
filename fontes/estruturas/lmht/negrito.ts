import { Estrutura } from "../estrutura";
import { PragmasEstrutura } from "../pragmas-estrutura";

export class Negrito extends Estrutura {
    constructor(pragmas?: PragmasEstrutura) {
        super("strong", pragmas);
    }
}