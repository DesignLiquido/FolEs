import { Modificador } from "./superclasse/modificador";

export class ComposicaoMascara extends Modificador {
    nomesFoles: string[];
    propriedadeCss: string;
    valor: string;
    quantificador: string;
    
    constructor(valor: string, quantificador: string) {
        super(["composicao-mascara", "composição-máscara"], "mask-composite");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
