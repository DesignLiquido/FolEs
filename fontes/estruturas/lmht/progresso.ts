import { Estrutura } from "../estrutura";
import { PragmasEstrutura } from "../pragmas-estrutura";

export class Progresso extends Estrutura {
    constructor(pragmas?: PragmasEstrutura) {
        super("progress", pragmas);
    }
}