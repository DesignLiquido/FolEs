import { Modificador } from "./superclasse/modificador";

export class FonteEspessura extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("fonte-espessura", "font-weight");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
