import { Modificador } from "./superclasse/modificador";

export class CorInicioBordaAlinhada extends Modificador {
    nomesFoles: string[];
    propriedadeCss: string;
    valor: string;
    quantificador: string;

    constructor(valor: string, quantificador: string) {
        super(
            ["cor-inicio-borda-alinhada", "cor-início-borda-alinhada"], 
            "border-inline-start-color"
        );
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
