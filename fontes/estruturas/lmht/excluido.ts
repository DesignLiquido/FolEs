import { Estrutura } from "../estrutura";
import { PragmasEstrutura } from "../pragmas-estrutura";

export class Excluido extends Estrutura {
    constructor(pragmas?: PragmasEstrutura) {
        super("del", pragmas);
    }
}