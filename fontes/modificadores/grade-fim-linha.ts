import { Modificador } from "./superclasse/modificador";

export class GradeFimLinha extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("grade-fim-linha", "grid-row-end");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
