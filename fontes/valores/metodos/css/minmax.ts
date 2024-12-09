import { MetodoCss } from "./metodo-css";

export class MinMax extends MetodoCss {
    minimo: number | string;
    maximo: number | string;
    traducao: string;

    traducaoValores = {
        "max-content": "conteudo-maximo",
        "min-content": "conteudo-minimo",
        "auto": "auto",
    }

    constructor(minimo: number | string, maximo: number | string) {
        super();
        this.traducaoValores[minimo] === undefined ? this.minimo = minimo : this.minimo = this.traducaoValores[minimo];
        this.traducaoValores[maximo] === undefined ? this.maximo = maximo : this.maximo = this.traducaoValores[maximo];
        this.traducao = 'minmax';
    }

    paraTexto() {
        return `minmax(${this.minimo}, ${this.maximo})`
    }
}
