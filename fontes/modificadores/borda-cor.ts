import { Modificador } from "./modificador";

export class BordaCor extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("borda-cor", "border-color");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
