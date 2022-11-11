import { Modificador } from "./superclasse/modificador";

export class InicioMargemEmLinha extends Modificador {
    constructor(valor: string, quantificador: string) {
        super(
            ["inicio-margem-em-linha", "início-margem-em-linha"], 
            "margin-inline-start"
        );
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
