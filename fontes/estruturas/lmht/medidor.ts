import { Estrutura } from "../estrutura";
import { PragmasEstrutura } from "../pragmas-estrutura";

export class Medidor extends Estrutura {
    constructor(pragmas?: PragmasEstrutura) {
        super("meter", pragmas);
    }
}