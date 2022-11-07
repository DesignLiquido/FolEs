import { Modificador } from "./superclasse/modificador";

export class DecorarEspessuraTexto extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("decorar-espessura-texto", "text-decoration-thickness");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
