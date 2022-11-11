import { Modificador } from "./superclasse/modificador";

export class AreaMascara extends Modificador { 
    constructor(valor: string, quantificador: string) {
        super(["area-mascara", "área-máscara"], "mask-clip");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
