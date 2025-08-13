import { Valor } from "../valores";
import { ListaDeValorPercentual } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";

export class FatiarBordaMascara extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        preencher: "fill",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
    ) {
        super(
            ["fatiar-borda-mascara", "fatiar-borda-máscara"],
            "mask-border-slice",
            pragmas,
        );

        validarValorNumerico(
            "fatiar-borda-máscara",
            valores,
            this.valoresAceitos,
            null,
            ListaDeValorPercentual
        );

        this.valores = valores;
    }
}
