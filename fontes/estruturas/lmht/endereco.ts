import { Estrutura } from "../estrutura";
import { PragmasEstrutura } from "../pragmas-estrutura";

export class Endereco extends Estrutura {
    constructor(pragmas?: PragmasEstrutura) {
        super("address", pragmas);
    }
}