import { Estrutura } from "../estrutura";
import { PragmasEstrutura } from "../pragmas-estrutura";

export class TextoPequeno extends Estrutura {
    constructor(pragmas?: PragmasEstrutura) {
        super("small", pragmas);
    }
}