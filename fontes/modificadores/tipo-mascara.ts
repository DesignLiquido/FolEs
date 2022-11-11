import { Modificador } from "./superclasse/modificador";

export class TipoMascara extends Modificador {
    constructor(valor: string, quantificador: string) {
        super(["tipo-mascara", "tipo-máscara"], "mask-type");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
