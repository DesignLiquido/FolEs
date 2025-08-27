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
        variavel?: boolean
    ) {
        super("calha-barra-rolagem", "scrollbar-gutter", pragmas);

        if (!variavel) validarValores("calha-barra-rolagem", valores, this.valoresAceitos);

        this.valores = valores;
        this.variavel = variavel;
    }
}
