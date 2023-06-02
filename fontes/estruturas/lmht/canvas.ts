import { Estrutura } from "../estrutura";
import { PragmasEstrutura } from "../pragmas-estrutura";

export class Canvas extends Estrutura {
    constructor(pragmas?: PragmasEstrutura) {
        super("canvas", pragmas);
    }
}