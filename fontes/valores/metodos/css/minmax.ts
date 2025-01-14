import { MetodoCss } from "./metodo-css";

export class MinMax extends MetodoCss {
    minimo: number | string;
    maximo: number | string;
    traducao: string;

    traducaoValores = {
        "max-content": "conteudo-máximo",
        "min-content": "conteudo-mínimo",
        "auto": "auto",
    }

    constructor(minimo: number | string, maximo: number | string) {
        super();
        this.minimo = minimo;
        this.maximo = maximo;
        this.traducao = 'minmax';
    }

    paraTexto() {
        if (this.traducaoValores[this.minimo]) {
            this.minimo = this.traducaoValores[this.minimo];
        }

        if (this.traducaoValores[this.maximo]) {
            this.maximo = this.traducaoValores[this.maximo];
        }
        
        return `minmax(${this.minimo}, ${this.maximo})`
    }
}
