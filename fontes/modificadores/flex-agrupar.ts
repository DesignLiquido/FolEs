import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class FlexAgrupar extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "nao-agrupar": "nowrap",
        "não-agrupar": "nowrap",
        agrupar: "wrap",
        "inverter-agrupamento": "wrap-reverse",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
    ) {
        super("flex-agrupar", "flex-wrap", pragmas);

        validarValores("flex-agrupar", valores, this.valoresAceitos);

        this.valores = valores;
    }
}
