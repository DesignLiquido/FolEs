import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class CelulasVazias extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        exibir: "show",
        ocultar: "hide",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(["celulas-vazias", "células-vazias"], "empty-cells", pragmas);

        if (!variavel) validarValores("células-vazias", valores, this.valoresAceitos);

        this.valores = valores;
        this.variavel = variavel;
    }
}
