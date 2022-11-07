import { Modificador } from "./superclasse/modificador";

export class FiltroFundo extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("filtro-fundo", "backdrop-filter");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
