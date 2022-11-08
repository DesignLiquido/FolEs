import { Modificador } from "./superclasse/modificador";

export class VisibilidadeConteudo extends Modificador {
    nomesFoles: string[];
    propriedadeCss: string;
    valor: string;
    quantificador: string;
    
    constructor(valor: string, quantificador: string) {
        super(
            ["visibilidade-conteudo", "visibilidade-conteúdo"], 
            "content-visibility"
        );
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
