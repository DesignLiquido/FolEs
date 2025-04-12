import { Modificador, PragmasModificador } from "./superclasse";

export class EstiloListaTipo extends Modificador {
    constructor(
        valor: string,
        quantificador?: string,
        pragmas?: PragmasModificador,
        valorVariavel: boolean = false,
    ) {
        super("estilo-lista-tipo", "list-style-type", pragmas);

        this.valor = valor;
        this.quantificador = quantificador;
    }
}
