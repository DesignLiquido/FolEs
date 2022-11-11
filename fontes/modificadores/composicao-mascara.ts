import { Modificador } from "./superclasse/modificador";

export class ComposicaoMascara extends Modificador {
    constructor(valor: string, quantificador: string) {
        super(["composicao-mascara", "composição-máscara"], "mask-composite");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
