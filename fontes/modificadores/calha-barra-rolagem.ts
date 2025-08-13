import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class CalhaBarraRolagem extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        auto: "auto",
        estavel: "stable",
        estável: "stable",
        "ambas-bordas": "both-edges",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
    ) {
        super("calha-barra-rolagem", "scrollbar-gutter", pragmas);

        validarValores("calha-barra-rolagem", valores, this.valoresAceitos);

        this.valores = valores;
    }
}
