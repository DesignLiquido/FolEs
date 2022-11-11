import { Modificador } from "./superclasse/modificador";

export class Exibicao extends Modificador {
     constructor(valor: string, quantificador: string) {
        super(["exibicao", "exibição"], "display");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
