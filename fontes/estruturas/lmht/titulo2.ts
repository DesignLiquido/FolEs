import { Estrutura } from "../estrutura";
import { PragmasEstrutura } from "../pragmas-estrutura";

export class Titulo2 extends Estrutura {
    constructor(pragmas?: PragmasEstrutura) {
        super("h2", pragmas);
    }
}