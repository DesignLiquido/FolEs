import { Modificador } from "./superclasse/modificador";

export class QuebrarDentro extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("quebrar-dentro", "break-inside");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
