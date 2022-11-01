import { Modificador } from "./superclasse/modificador";

export class MascaraModo extends Modificador {
    nomesFoles: string[];
    propriedadeCss: string;
    valor: string;
    quantificador: string;
    
    constructor(valor: string, quantificador: string) {
        super(["mascara-modo", "máscara-modo"], "mask-mode");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
