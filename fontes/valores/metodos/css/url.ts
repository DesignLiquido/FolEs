import { MetodoCss } from "./metodo-css";

export class Url extends MetodoCss {
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