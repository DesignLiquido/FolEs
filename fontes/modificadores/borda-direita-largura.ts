import { Modificador } from "./modificador";

export class BordaDireitaLargura extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("borda-direita-largura", "border-right-width");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
