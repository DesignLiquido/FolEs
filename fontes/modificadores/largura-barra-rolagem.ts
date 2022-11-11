import { Modificador } from "./superclasse/modificador";

export class LarguraBarraRolagem extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("largura-barra-rolagem", "scrollbar-width");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
