import { Modificador } from "./superclasse/modificador";

export class MascaraComposicao extends Modificador {
    nomesFoles: string[];
    propriedadeCss: string;
    valor: string;
    quantificador: string;
    
    constructor(valor: string, quantificador: string) {
        super(["mascara-composicao", "máscara-composição"], "mask-composite");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
