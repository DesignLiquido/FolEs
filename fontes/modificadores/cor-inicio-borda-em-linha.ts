import { Modificador } from "./superclasse/modificador";

export class CorInicioBordaEmLinha extends Modificador {
    nomesFoles: string[];
    propriedadeCss: string;
    valor: string;
    quantificador: string;

    constructor(valor: string, quantificador: string) {
        super(
            ["cor-inicio-borda-em-linha", "cor-início-borda-em-linha"], 
            "border-inline-start-color"
        );
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
