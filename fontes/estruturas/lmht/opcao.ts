import { Estrutura } from "../estrutura";
import { PragmasEstrutura } from "../pragmas-estrutura";

export class Opcao extends Estrutura {
    constructor(pragmas?: PragmasEstrutura) {
        super("", pragmas);
    }
}