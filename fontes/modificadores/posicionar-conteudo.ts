import { Modificador } from "./superclasse/modificador";

export class PosicionarConteudo extends Modificador {
    constructor(valor: string, quantificador: string) {
        super(
            ["posicionar-conteudo", "posicionar-conteúdo"], 
            "place-content"
        );
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
