import { Valor } from "../valores";
import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";

export class RaioDireitoBordaInferior extends Modificador {
    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
    ) {
        super(
            "raio-direito-borda-inferior",
            "border-bottom-right-radius",
            pragmas,
        );

        validarValorNumerico(
            "raio-direito-borda-inferior", 
            valores,
            null,
            null,
            unidadesMedida
        );

        this.valores = valores;
    }
}
