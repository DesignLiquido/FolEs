import { Modificador } from "./superclasse/modificador";

export class InicioInsercaoEmLinha extends Modificador {
    constructor(valor: string, quantificador: string) {
        super(
            ["inicio-insercao-em-linha", "início-inserção-em-linha"],
            "inset-inline-start"
        );
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
