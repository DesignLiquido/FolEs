import { Modificador } from "./superclasse/modificador";

export class RecortarMargemVazamento extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("recortar-margem-vazamento", "overflow-clip-margin");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
