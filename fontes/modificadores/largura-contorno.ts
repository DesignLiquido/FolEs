import { Modificador } from "./superclasse/modificador";

export class LarguraContorno extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("largura-contorno", "outline-width");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
