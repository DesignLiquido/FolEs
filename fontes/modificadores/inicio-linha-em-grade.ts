import { Modificador } from "./superclasse/modificador";

export class InicioLinhaEmGrade extends Modificador {
    constructor(valor: string, quantificador: string) {
        super(
            ["inicio-linha-em-grade", "início-linha-em-grade"], 
            "grid-row-start"
        );
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
