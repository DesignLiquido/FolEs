import { Modificador } from "./superclasse/modificador";

export class InicioBordaEmLinha extends Modificador {
    nomesFoles: string[];
    propriedadeCss: string;
    valor: string;
    quantificador: string;

    constructor(valor: string, quantificador: string) {
        super(
            ["inicio-borda-em-linha", "início-borda-em-linha"], 
            "border-inline-start"
        );
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
