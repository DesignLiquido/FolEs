import { Modificador } from "./superclasse/modificador";

export class InsercaoEmLinhaFim extends Modificador {
    constructor(valor: string, quantificador: string) {
        super(
            ["insercao-em-linha-fim", "inserção-em-linha-fim"], 
            "inset-inline-end"
        );
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
