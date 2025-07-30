import { Valor } from "../valores";
import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";

export class EspacamentoEmGrade extends Modificador {
    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
    ) {
        super(
            ["espacamento-em-grade", "espaçamento-em-grade"],
            "grid-gap",
            pragmas,
        );

        validarValorNumerico(
            "espaçamento-em-grade", 
            valores,
            null,
            null,
            unidadesMedida
        );

        this.valores = valores;
    }
}
