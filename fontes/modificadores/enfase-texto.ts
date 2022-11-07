import { Modificador } from "./superclasse/modificador";

export class EnfaseTexto extends Modificador {
    nomesFoles: string[];
    propriedadeCss: string;
    valor: string;
    quantificador: string;

    constructor(valor: string, quantificador: string) {
        super(["enfase-texto", "ênfase-texto"], "text-emphasis");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
