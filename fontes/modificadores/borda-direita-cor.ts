import { Modificador } from "./modificador";

export class BordaDireitaCor extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("borda-direita-cor", "border-right-color");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
