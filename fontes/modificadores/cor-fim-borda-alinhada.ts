import { Modificador } from "./superclasse/modificador";

export class CorFimBordaAlinhada extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("cor-fim-borda-alinhada", "border-inline-end-color");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
