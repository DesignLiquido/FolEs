import { Metodo } from "./metodo";

export class Url extends Metodo {
    link: string;

    constructor(link: string) {
        super();
        this.link = link;
    }

    paraTexto() {
        return `url('${this.link}')`
    }
}