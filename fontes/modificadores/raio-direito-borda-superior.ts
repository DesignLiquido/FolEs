import { Valor } from "../valores";
import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";

export class RaioDireitoBordaSuperior extends Modificador {
    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
    ) {
        super(
            "raio-direito-borda-superior",
            "border-top-right-radius",
            pragmas,
        );

        validarValorNumerico(
            "raio-direito-borda-superior", 
            valores,
            null,
            null,
            unidadesMedida
        );

        this.valores = valores;
    }
}
