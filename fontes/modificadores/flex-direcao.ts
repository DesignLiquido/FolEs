import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class FlexDirecao extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        linha: "row",
        "inverter-linha": "row-reverse",
        coluna: "column",
        "inverter-coluna": "column-reverse",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
    ) {
        super(["flex-direcao", "flex-direção"], "flex-direction", pragmas);

        validarValores("flex-direção", valores, this.valoresAceitos);

        this.valores = valores;
    }
}
