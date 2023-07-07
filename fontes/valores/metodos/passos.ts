import { Simbolo } from "../../lexador";
import { Metodo } from "./metodo";

export class Passos extends Metodo {
    numero: number;
    salto: string;

    saltos = {
        "salto-inicial": "jump-start",
        "salto-final": "jump-end",
        "salto-nenhum": "jump-none",
        "salto-conjunto": "jump-both",
        "inicial": "start",
        "final": "end",
    }

    constructor(numero: Simbolo, salto: string) {
        super();
        this.numero = Number(numero.lexema);
        this.salto = this.saltos[salto['lexema']];
    }

    toString() {
        return `steps(${this.numero}, ${this.salto})`
    }
}

/*
TERMOS DE SALTO:

jump-start;
jump-end;
jump-none;
jump-both;
start; (equivale a jump-start)
end; (equivale a jump-end)
*/