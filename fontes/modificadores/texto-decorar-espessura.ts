import { Modificador } from "./superclasse/modificador";

export class TextoDecorarEspessura extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("texto-decorar-espessura", "text-decoration-thickness");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
