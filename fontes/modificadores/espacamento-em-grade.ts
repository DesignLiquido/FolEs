import { Valor } from "../valores";
import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";
import { validarQuantificador } from "./validacoes/quantificador";

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

        validarValorNumerico("espaçamento-em-grade", valores);

        // TODO: Repensar
        // if (quantificador !== undefined) {
        //     validarQuantificador(
        //         "espaçamento-em-grade",
        //         quantificador,
        //         unidadesMedida,
        //     );
        //     this.quantificador = quantificador;
        // }

        this.valores = valores;
    }
}
