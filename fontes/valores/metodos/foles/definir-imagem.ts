import { Simbolo } from "../../../lexador";
import { Metodo } from "./metodo";

export class DefinirImagem extends Metodo {
    link: string;
    proporcao: number | string;
    traducao: string;

    constructor(link: Simbolo, proporcao: Simbolo) {
        super();
        this.link = link.lexema;
        this.proporcao = proporcao.tipo === 'NUMERO' ? Number(proporcao.lexema) : proporcao.lexema;
        this.traducao = "image-set";
    }

    paraTexto() {
        return `image-set(${this.link} ${this.proporcao})`;
    }
}
