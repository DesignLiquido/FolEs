import { Modificador } from "./modificador";

export class BordaSuperior extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("borda-superior", "border-top");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
