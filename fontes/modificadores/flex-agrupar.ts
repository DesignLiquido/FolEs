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

    static nomeCss: string = "flex-wrap";

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super("flex-agrupar", FlexAgrupar.nomeCss, pragmas);

        if (!variavel) validarValores("flex-agrupar", valores, this.valoresAceitos);

        this.valores = valores;
        this.variavel = variavel;
    }
}
