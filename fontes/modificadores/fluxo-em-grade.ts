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
        valorVariavel: boolean = false,
    ) {
        super("fluxo-em-grade", "grid-auto-flow", pragmas);

        if (!valorVariavel)
            validarValores("fluxo-em-grade", valores, this.valoresAceitos);

        this.valores = valores;
    }
}
