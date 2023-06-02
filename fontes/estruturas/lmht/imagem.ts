import { Estrutura } from "../estrutura";
import { PragmasEstrutura } from "../pragmas-estrutura";

export class Imagem extends Estrutura {
    constructor(pragmas?: PragmasEstrutura) {
        super("img", pragmas);
    }
}