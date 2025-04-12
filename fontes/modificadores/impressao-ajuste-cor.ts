import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class ImpressaoAjusteCor extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        economizar: "economy",
        exata: "exact",
    };

    constructor(
        valor: string,
        quantificador?: string,
        pragmas?: PragmasModificador,
        valorVariavel: boolean = false,
    ) {
        super(
            ["impressao-ajuste-cor", "impressão-ajuste-cor"],
            "print-color-adjust",
            pragmas,
        );

        if (!valorVariavel)
            validarValores("impressão-ajuste-cor", valor, this.valoresAceitos);

        this.valor = valor;
    }
}
