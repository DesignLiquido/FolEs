import { Metodo } from "./metodo";

export class Hex extends Metodo {
    codigo: string;

    constructor(codigo: string) {
        super();
        this.codigo = codigo;
    }

    paraTexto() {
        return `#${this.codigo}`;
    }
}