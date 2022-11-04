import { Modificador } from "./superclasse/modificador";

export class CorBordaSuperior extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("cor-borda-superior", "border-top-color");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
