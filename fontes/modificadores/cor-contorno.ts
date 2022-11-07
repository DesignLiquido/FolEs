import { Modificador } from "./superclasse/modificador";

export class CorContorno extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("cor-contorno", "outline-color");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
