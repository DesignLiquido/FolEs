import { Modificador } from "./superclasse/modificador";

export class LarguraInicioBordaBloco extends Modificador {
    nomesFoles: string[];
    propriedadeCss: string;
    valor: string;
    quantificador: string;

    constructor(valor: string, quantificador: string) {
        super(
            ["largura-inicio-borda-bloco", "largura-início-borda-bloco"], 
            "border-block-start-width"
        );
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
