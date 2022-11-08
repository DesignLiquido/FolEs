import { Modificador } from "./superclasse/modificador";

export class InicioBordaBloco extends Modificador {
    nomesFoles: string[];
    propriedadeCss: string;
    valor: string;
    quantificador: string;

    constructor(valor: string, quantificador: string) {
        super(
            ["inicio-borda-bloco", "início-borda-bloco"], 
            "border-block-start"
        );
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
