import { Modificador } from "./superclasse/modificador";

export class VisibilidadeFundo extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("visibilidade-fundo", "backface-visibility");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
