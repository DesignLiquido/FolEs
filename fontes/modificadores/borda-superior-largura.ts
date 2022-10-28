import { Modificador } from "./superclasse/modificador";

export class BordaSuperiorLargura extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("borda-superior-largura", "border-top-width");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
