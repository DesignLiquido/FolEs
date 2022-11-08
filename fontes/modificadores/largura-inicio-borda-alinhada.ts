import { Modificador } from "./superclasse/modificador";

export class LarguraInicioBordaAlinhada extends Modificador {
    nomesFoles: string[];
    propriedadeCss: string;
    valor: string;
    quantificador: string;

    constructor(valor: string, quantificador: string) {
        super(
            ["largura-inicio-borda-alinhada", "largura-início-borda-alinhada"], 
            "border-inline-start-width"
        );
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
