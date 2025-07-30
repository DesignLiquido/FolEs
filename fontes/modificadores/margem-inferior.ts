import { Valor } from "../valores";
import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";

export class MargemInferior extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        auto: "auto",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
    ) {
        super("margem-inferior", "margin-bottom", pragmas);

        validarValorNumerico(
            "margem-inferior", 
            valores, 
            this.valoresAceitos,
            null,
            unidadesMedida
        );

        this.valores = valores;
    }
}
