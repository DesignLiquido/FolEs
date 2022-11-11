import { Modificador } from "./superclasse/modificador";

export class CalhaBarraRolagem extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("calha-barra-rolagem", "scrollbar-gutter");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
