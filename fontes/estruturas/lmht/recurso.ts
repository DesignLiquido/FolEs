import { Estrutura } from "../estrutura";
import { PragmasEstrutura } from "../pragmas-estrutura";

export class Recurso extends Estrutura {
    constructor(pragmas?: PragmasEstrutura) {
        super("link", pragmas);
    }
}