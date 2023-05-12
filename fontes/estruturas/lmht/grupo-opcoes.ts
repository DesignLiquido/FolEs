import { Estrutura } from "../estrutura";
import { PragmasEstrutura } from "../pragmas-estrutura";

export class GrupoOpcoes extends Estrutura {
    constructor(pragmas?: PragmasEstrutura) {
        super("", pragmas);
    }
}