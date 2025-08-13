import { Valor } from "../valores";
import { comprimentos } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";

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

        validarValorNumerico(
            "início-borda-máscara", 
            valores,
            null,
            null,
            comprimentos
        );

        this.valores = valores;
    }
}
