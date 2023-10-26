import { Metodo } from "./metodo";

export class HexadecimalCor extends Metodo {
    codigo: string;

    constructor(codigo: string) {
        super();
        this.codigo = codigo;
    }

    paraTexto() {
        return `#${this.codigo}`;
    }
}