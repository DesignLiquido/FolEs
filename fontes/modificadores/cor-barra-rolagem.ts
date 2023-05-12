import { Modificador, PragmasModificador } from "./superclasse";

export class CorBarraRolagem extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("cor-barra-rolagem", "scrollbar-color");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
