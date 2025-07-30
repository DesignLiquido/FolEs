import { Valor } from "../valores";
import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";

export class FormaMargem extends Modificador {
    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
    ) {
        super("forma-margem", "shape-margin", pragmas);

        validarValorNumerico(
            "forma-margem", 
            valores,
            null,
            null,
            unidadesMedida
        );

        this.valores = valores;
    }
}
