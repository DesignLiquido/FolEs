import { Modificador } from "./superclasse/modificador";

export class MargemSuperior extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("margem-superior", "margin-top");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
