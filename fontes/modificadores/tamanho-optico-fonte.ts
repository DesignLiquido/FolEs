import { Modificador } from "./superclasse/modificador";

export class TamanhoOpticoFonte extends Modificador {
    nomesFoles: string[];
    propriedadeCss: string;
    valor: string;
    quantificador: string;
    
    constructor(valor: string, quantificador: string) {
        super(
            ["tamanho-optico-fonte", "tamanho-óptico-fonte"], 
            "font-optical-sizing"
        );
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
