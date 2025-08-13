import { Valor } from "../valores";
import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";

export class InicioMargemEmBloco extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        auto: "auto",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
    ) {
        super(
            ["inicio-margem-em-bloco", "início-margem-em-bloco"],
            "margin-block-start",
            pragmas,
        );

        validarValorNumerico(
            "início-margem-em-bloco",
            valores,
            this.valoresAceitos,
            null,
            unidadesMedida
        );

        this.valores = valores;
    }
}
