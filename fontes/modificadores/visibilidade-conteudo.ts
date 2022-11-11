import { Modificador } from "./superclasse/modificador";

export class VisibilidadeConteudo extends Modificador {
    constructor(valor: string, quantificador: string) {
        super(
            ["visibilidade-conteudo", "visibilidade-conteúdo"], 
            "content-visibility"
        );
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
