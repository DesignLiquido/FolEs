import { Modificador } from "./superclasse/modificador";

export class CorInicioBordaBloco extends Modificador {
    nomesFoles: string[];
    propriedadeCss: string;
    valor: string;
    quantificador: string;

    constructor(valor: string, quantificador: string) {
        super(
            ["cor-inicio-borda-bloco", "cor-início-borda-bloco"], 
            "border-block-start-color"
        );
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
