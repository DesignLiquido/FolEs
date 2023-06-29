import { Metodo } from "./metodo";

export class MinMax extends Metodo {
    minimo: number | string;
    maximo: number | string;

    constructor(minimo: number | string, maximo: number | string) {
        super();
        this.minimo = minimo;
        this.maximo = maximo;
    }

    toString() {
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