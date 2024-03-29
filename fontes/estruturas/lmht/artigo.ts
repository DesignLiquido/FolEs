import { Estrutura } from "../estrutura";
import { PragmasEstrutura } from "../pragmas-estrutura";

export class Artigo extends Estrutura {
    constructor(pragmas?: PragmasEstrutura) {
        super("article", pragmas);
    }
}