import { Estrutura } from "../estrutura";
import { PragmasEstrutura } from "../pragmas-estrutura";

export class Cabeca extends Estrutura {
    constructor(pragmas?: PragmasEstrutura) {
        super("head", pragmas);
    }
}