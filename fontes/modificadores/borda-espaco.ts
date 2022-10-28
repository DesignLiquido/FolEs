import { Modificador } from "./superclasse/modificador";

export class BordaEspaco extends Modificador {
    nomesFoles: string[];
    propriedadeCss: string;
    valor: string;
    quantificador: string;

    constructor(valor: string, quantificador: string) {
        super(["borda-espaco", "borda-espaço"], "border-spacing");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
