import { Modificador } from "./superclasse/modificador";

export class DeslocarContorno extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("deslocar-contorno", "outline-offset");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
