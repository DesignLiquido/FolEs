import { Valor } from "../valores";
import { comprimentos } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";
import { validarQuantificador } from "./validacoes/quantificador";

export class InicioBordaMascara extends Modificador {
    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
    ) {
        super(
            ["inicio-borda-mascara", "início-borda-máscara"],
            "mask-border-outset",
            pragmas,
        );

        validarValorNumerico("início-borda-máscara", valores);

        // TODO: Repensar
        // if (Number(parseInt(valor))) {
        //     validarQuantificador(
        //         "início-borda-máscara",
        //         quantificador,
        //         comprimentos,
        //     );

        //     this.quantificador = quantificador;
        // }

        this.valores = valores;
    }
}
