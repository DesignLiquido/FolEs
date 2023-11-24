import { Modificador, PragmasModificador } from "./superclasse";

export class EstiloListaTipo extends Modificador {
    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador) {
        super("estilo-lista-tipo", "list-style-type", pragmas);

        this.valor = valor;
        this.quantificador = quantificador;
    }
}
