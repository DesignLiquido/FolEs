import { Modificador } from "./superclasse/modificador";

export class MascaraTipo extends Modificador {
    nomesFoles: string[];
    propriedadeCss: string;
    valor: string;
    quantificador: string;
    
    constructor(valor: string, quantificador: string) {
        super(["mascara-tipo", "máscara-tipo"], "mask-type");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
