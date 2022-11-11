import { Modificador } from "./superclasse/modificador";

export class InicioInsercaoEmBloco extends Modificador {
    constructor(valor: string, quantificador: string) {
        super(
            ["inicio-insercao-em-bloco", "início-inserção-em-bloco"],
            "inset-block-start"
        );
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
