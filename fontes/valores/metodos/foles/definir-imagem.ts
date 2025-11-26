import { Simbolo } from "../../../lexador";
import { Metodo } from "./metodo";

export class DefinirImagem extends Metodo {
    link: string;
    tamanho: number;
    proporcao: string;
    traducao: string;

    constructor(link: Simbolo, tamanho: Simbolo, proporcao: Simbolo) {
        super();
        this.link = link.lexema;
        this.tamanho = Number(tamanho.lexema);
        this.proporcao = proporcao.lexema;
        this.traducao = "image-set";
    }

    paraTexto() {
        return `image-set(${this.link} ${this.tamanho}${this.proporcao})`;
    }
}
