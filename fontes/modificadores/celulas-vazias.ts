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
        valorVariavel: boolean = false,
    ) {
        super(["celulas-vazias", "células-vazias"], "empty-cells", pragmas);

        if (!valorVariavel)
            validarValores("células-vazias", valores, this.valoresAceitos);

        this.valores = valores;
    }
}
