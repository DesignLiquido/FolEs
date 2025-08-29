import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";

export class EstiloListaTipo extends Modificador {
    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        // variavel?: boolean
    ) {
        super("estilo-lista-tipo", "list-style-type", pragmas);

        this.valores = valores;
        // this.variavel = variavel;
    }
}
