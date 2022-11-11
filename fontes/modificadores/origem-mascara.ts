import { Modificador } from "./superclasse/modificador";

export class OrigemMascara extends Modificador {
    constructor(valor: string, quantificador: string) {
        super(["origem-mascara", "origem-máscara"], "mask-origin");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
