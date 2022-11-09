import { Modificador } from "./superclasse/modificador";

export class InicioInsercaoEmLinha extends Modificador {
    nomesFoles: string[];
    propriedadeCss: string;
    valor: string;
    quantificador: string;

    constructor(valor: string, quantificador: string) {
        super(
            ["inicio-insercao-em-linha", "início-inserção-em-linha"],
            "inset-inline-start"
        );
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
