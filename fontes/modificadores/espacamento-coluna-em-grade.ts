import { Valor } from "../valores";
import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";

export class EspacamentoColunaEmGrade extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        normal: "normal",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
    ) {
        super(
            ["espacamento-coluna-em-grade", "espaçamento-coluna-em-grade"],
            "grid-column-gap",
            pragmas,
        );

        validarValorNumerico(
            "espaçamento-coluna-em-grade",
            valores,
            this.valoresAceitos,
            null,
            unidadesMedida
        );

        this.valores = valores;
    }
}
