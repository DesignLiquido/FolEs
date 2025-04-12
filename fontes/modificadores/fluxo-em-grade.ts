import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class FluxoEmGrade extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        linha: "row",
        coluna: "column",
        denso: "dense",
    };

    constructor(
        valor: string,
        quantificador?: string,
        pragmas?: PragmasModificador,
        valorVariavel: boolean = false,
    ) {
        super("fluxo-em-grade", "grid-auto-flow", pragmas);

        if (!valorVariavel)
            validarValores("fluxo-em-grade", valor, this.valoresAceitos);

        this.valor = valor;
    }
}
