import { Valor } from "../valores";
import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";

export class DistanciaDeslocamento extends Modificador {
    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
    ) {
        super(
            ["distancia-deslocamento", "distância-deslocamento"],
            "offset-distance",
            pragmas,
        );

        validarValorNumerico(
            "distância-deslocamento", 
            valores,
            null,
            null,
            unidadesMedida
        );

        this.valores = valores;
    }
}
