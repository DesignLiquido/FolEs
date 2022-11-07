import { Modificador } from "./superclasse/modificador";

export class CorBordaInferior extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("cor-borda-inferior", "border-bottom-color");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
