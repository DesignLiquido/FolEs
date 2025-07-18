import { Valor } from "../valores";
import { ListaDeValorPercentual } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";
import { validarQuantificador } from "./validacoes/quantificador";

export class FatiarBordaMascara extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        preencher: "fill",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        valorVariavel: boolean = false,
    ) {
        super(
            ["fatiar-borda-mascara", "fatiar-borda-máscara"],
            "mask-border-slice",
            pragmas,
        );

        if (!valorVariavel) {
            validarValorNumerico(
                "fatiar-borda-máscara",
                valores,
                this.valoresAceitos,
            );

            // TODO: Repensar
            // if (quantificador !== undefined) {
            //     validarQuantificador(
            //         "fatiar-borda-máscara",
            //         quantificador,
            //         ListaDeValorPercentual,
            //     );
            // }
        }

        this.valores = valores;
    }
}
