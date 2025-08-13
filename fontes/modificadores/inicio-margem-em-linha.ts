import { Valor } from "../valores";
import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";

export class InicioMargemEmLinha extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        auto: "auto",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
    ) {
        super(
            ["inicio-margem-em-linha", "início-margem-em-linha"],
            "margin-inline-start",
            pragmas,
        );

        validarValorNumerico(
            "início-margem-em-linha",
            valores,
            this.valoresAceitos,
            null,
            unidadesMedida
        );

        this.valores = valores;
    }
}
