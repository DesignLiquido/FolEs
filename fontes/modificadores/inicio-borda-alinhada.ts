import { Modificador } from "./superclasse/modificador";

export class InicioBordaAlinhada extends Modificador {
    nomesFoles: string[];
    propriedadeCss: string;
    valor: string;
    quantificador: string;

    constructor(valor: string, quantificador: string) {
        super(
            ["inicio-borda-alinhada", "início-borda-alinhada"], 
            "border-inline-start"
        );
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
