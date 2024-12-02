import { Metodo } from "./metodo";

export class MinMax extends Metodo {
    minimo: number | string;
    maximo: number | string;
    traducao: string;

    traducaoValores = {
        "conteudo-maximo": "max-content",
        "conteúdo-máximo": "max-content",
        "conteudo-minimo": "min-content",
        "conteúdo-mínimo": "min-content",
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

/*
ARGUMENTOS VÁLIDOS:
- Número + Quantificador (de comprimento, percentual ou flex);
- max-content;
- min-content;
- auto;
*/