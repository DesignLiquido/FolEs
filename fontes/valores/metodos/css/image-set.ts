import { Simbolo } from "../../../lexador";
import { MetodoCss } from "./metodo-css";

export class ImageSet extends MetodoCss {
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
        return `definir-imagem(${this.link} ${this.proporcao})`;
    }
}
