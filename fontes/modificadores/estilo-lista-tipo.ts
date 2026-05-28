import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";

export class EstiloListaTipo extends Modificador {
    static nomeCss: string = "list-style-type";

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        // variavel?: boolean
    ) {
        super("estilo-lista-tipo", EstiloListaTipo.nomeCss, pragmas);

        this.valores = valores;
        // this.variavel = variavel;
    }
}
