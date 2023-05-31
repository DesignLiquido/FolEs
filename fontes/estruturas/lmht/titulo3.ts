import { Estrutura } from "../estrutura";
import { PragmasEstrutura } from "../pragmas-estrutura";

export class Titulo3 extends Estrutura {
    constructor(pragmas?: PragmasEstrutura) {
        super("h3", pragmas);
    }
}