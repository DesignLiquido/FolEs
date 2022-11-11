import { Modificador } from "./superclasse/modificador";

export class RecortarMargemVazada extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("recortar-margem-vazada", "overflow-clip-margin");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
