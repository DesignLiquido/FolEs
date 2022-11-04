import { Modificador } from "./superclasse/modificador";

export class RepetirMascara extends Modificador {
    nomesFoles: string[];
    propriedadeCss: string;
    valor: string;
    quantificador: string;
    
    constructor(valor: string, quantificador: string) {
        super(["repetir-mascara", "repetir-máscara"], "mask-repeat");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
