import { Estrutura } from "../estrutura";
import { PragmasEstrutura } from "../pragmas-estrutura";

export class Audio extends Estrutura {
    constructor(pragmas?: PragmasEstrutura) {
        super("audio", pragmas);
    }
}