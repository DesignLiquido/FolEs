import { Modificador } from "./modificador";

export class BordaSuperiorCor extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("borda-superior-cor", "border-top-color");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
