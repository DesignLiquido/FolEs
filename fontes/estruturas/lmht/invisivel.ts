import { Estrutura } from "../estrutura";
import { PragmasEstrutura } from "../pragmas-estrutura";

export class Invisivel extends Estrutura {
    constructor(pragmas?: PragmasEstrutura) {
        super("ins", pragmas);
    }
}