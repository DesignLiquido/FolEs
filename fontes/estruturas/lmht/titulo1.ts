import { Estrutura } from "../estrutura";
import { PragmasEstrutura } from "../pragmas-estrutura";

export class Titulo1 extends Estrutura {
    constructor(pragmas?: PragmasEstrutura) {
        super("h1", pragmas);
    }
}