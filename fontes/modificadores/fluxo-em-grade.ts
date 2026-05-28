import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class FluxoEmGrade extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        linha: "row",
        coluna: "column",
        denso: "dense",
    };

    static nomeCss: string = "grid-auto-flow";

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super("fluxo-em-grade", FluxoEmGrade.nomeCss, pragmas);

        if (!variavel) validarValores("fluxo-em-grade", valores, this.valoresAceitos);

        this.valores = valores;
        this.variavel = variavel;
    }
}
