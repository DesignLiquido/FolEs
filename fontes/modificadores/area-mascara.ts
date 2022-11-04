import { Modificador } from "./superclasse/modificador";

export class AreaMascara extends Modificador {
    nomesFoles: string[];
    propriedadeCss: string;
    valor: string;
    quantificador: string;
    
    constructor(valor: string, quantificador: string) {
        super(["area-mascara", "área-máscara"], "mask-clip");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
