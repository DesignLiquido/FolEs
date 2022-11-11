import { Modificador } from "./superclasse/modificador";

export class JustificarConteudo extends Modificador {
    constructor(valor: string, quantificador: string) {
        super(
            ["justificar-conteudo", "justificar-conteúdo"], 
            "justify-content"
        );
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
