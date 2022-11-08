import { Modificador } from "./superclasse/modificador";

export class RaioInicialBordaFinal extends Modificador {
    nomesFoles: string[];
    propriedadeCss: string;
    valor: string;
    quantificador: string;

    constructor(valor: string, quantificador: string) {
        super("raio-inicial-borda-final", "border-end-start-radius");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
