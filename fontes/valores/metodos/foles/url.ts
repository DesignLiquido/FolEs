import { Metodo } from "./metodo";

export class Url extends Metodo {
    link: string;
    traducao: string;

    constructor(link: string) {
        super();
        this.link = link;
        this.traducao = 'url';
    }

    paraTexto() {
        return `url('${this.link}')`
    }
}