import { PragmasEstrutura } from "./pragmas-estrutura";

export class Estrutura {
    tagHtml: string;
    pragmas?: PragmasEstrutura;

    constructor(tagHtml: string, pragmas?: PragmasEstrutura) {
        this.tagHtml = tagHtml;
        this.pragmas = pragmas;
    }
}