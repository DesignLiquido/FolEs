import { Estrutura } from "../estrutura";
import { PragmasEstrutura } from "../pragmas-estrutura";

export class ListaPesquisavel extends Estrutura {
    constructor(pragmas?: PragmasEstrutura) {
        super("datalist", pragmas);
    }
}