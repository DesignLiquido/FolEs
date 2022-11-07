import { Modificador } from "./superclasse/modificador";

export class EstiloBordaInferior extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("estilo-borda-inferior", "border-bottom-style");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
