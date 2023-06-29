import { Simbolo } from "../../lexador";
import { Metodo } from "./metodo";

export class Steps extends Metodo {
    numero: number;
    salto: string;

    constructor(numero: Simbolo, salto: string) {
        super();
        this.numero = Number(numero.lexema);
        this.salto = salto;
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