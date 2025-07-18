import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class ImpressaoAjusteCor extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        economizar: "economy",
        exata: "exact",
    };

    constructor(
        valores: Valor[],
        
        pragmas?: PragmasModificador,
        valorVariavel: boolean = false,
    ) {
        super(
            ["impressao-ajuste-cor", "impressão-ajuste-cor"],
            "print-color-adjust",
            pragmas,
        );

        if (!valorVariavel)
            validarValores("impressão-ajuste-cor", valores, this.valoresAceitos);

        this.valores = valores;
    }
}
