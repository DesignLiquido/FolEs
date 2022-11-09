import { Modificador } from "./superclasse/modificador";

export class InicioMargemEmLinha extends Modificador {
    nomesFoles: string[];
    propriedadeCss: string;
    valor: string;
    quantificador: string;

    constructor(valor: string, quantificador: string) {
        super(
            ["inicio-margem-em-linha", "início-margem-em-linha"], 
            "margin-inline-start"
        );
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
