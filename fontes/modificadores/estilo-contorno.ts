import { Modificador } from "./superclasse/modificador";

export class EstiloContorno extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("estilo-contorno", "outline-style");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
