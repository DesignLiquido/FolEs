import { Valor } from "../valores";
import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";

export class MargemSuperior extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        auto: "auto",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
    ) {
        super("margem-superior", "margin-top", pragmas);

        validarValorNumerico(
            "margem-superior", 
            valores, 
            this.valoresAceitos,
            null,
            unidadesMedida
        );

        this.valores = valores;
    }
}
