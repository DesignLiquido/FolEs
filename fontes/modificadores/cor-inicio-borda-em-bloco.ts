import { Modificador } from "./superclasse/modificador";

export class CorInicioBordaEmBloco extends Modificador {
    nomesFoles: string[];
    propriedadeCss: string;
    valor: string;
    quantificador: string;

    constructor(valor: string, quantificador: string) {
        super(
            ["cor-inicio-borda-em-bloco", "cor-início-borda-em-bloco"], 
            "border-block-start-color"
        );
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
