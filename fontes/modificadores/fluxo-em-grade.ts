import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class FluxoEmGrade extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        linha: "row",
        coluna: "column",
        denso: "dense",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super("fluxo-em-grade", "grid-auto-flow", pragmas);

        if (!variavel) validarValores("fluxo-em-grade", valores, this.valoresAceitos);

        this.valores = valores;
        this.variavel = variavel;
    }
}
