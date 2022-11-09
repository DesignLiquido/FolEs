import { Modificador } from "./superclasse/modificador";

export class InicioInsercaoEmBloco extends Modificador {
    nomesFoles: string[];
    propriedadeCss: string;
    valor: string;
    quantificador: string;

    constructor(valor: string, quantificador: string) {
        super(
            ["inicio-insercao-em-bloco", "início-inserção-em-bloco"],
            "inset-block-start"
        );
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
