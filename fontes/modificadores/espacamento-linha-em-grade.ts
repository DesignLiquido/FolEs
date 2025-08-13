import { Valor } from "../valores";
import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";

export class EspacamentoLinhaEmGrade extends Modificador {
    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
    ) {
        super(
            ["espacamento-linha-em-grade", "espaçamento-linha-em-grade"],
            "grid-row-gap",
            pragmas,
        );

        validarValorNumerico(
            "espaçamento-linha-em-grade", 
            valores,
            null,
            null,
            unidadesMedida
        );

        this.valores = valores;
    }
}
