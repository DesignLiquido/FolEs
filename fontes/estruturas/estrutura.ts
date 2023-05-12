import { PragmasEstrutura } from "./pragmas-estrutura";

export class Estrutura {
    pragmas?: PragmasEstrutura;

    constructor(pragmas?: PragmasEstrutura) {
        this.pragmas = pragmas;
    }
}