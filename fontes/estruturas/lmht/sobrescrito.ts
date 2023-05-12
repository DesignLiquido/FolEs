import { Estrutura } from "../estrutura";
import { PragmasEstrutura } from "../pragmas-estrutura";

export class Sobrescrito extends Estrutura {
    constructor(pragmas?: PragmasEstrutura) {
        super("", pragmas);
    }
}