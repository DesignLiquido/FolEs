import { Estrutura } from "../estrutura";
import { PragmasEstrutura } from "../pragmas-estrutura";

export class Botao extends Estrutura {
    constructor(pragmas?: PragmasEstrutura) {
        super("button", pragmas);
    }
}