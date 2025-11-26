import { Simbolo } from "../../../lexador";
import { MetodoCss } from "./metodo-css";

export class ImageSet extends MetodoCss {
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
        return `definir-imagem(${this.link} ${this.tamanho}${this.proporcao})`;
    }
}

/**
 * Faltam os casos:
 * image-set(url("image1.jpg") 1x);
 * image-set(linear-gradient(blue, white) 1x);
 * image-set(url("image1.avif") type("image/avif"));
 */