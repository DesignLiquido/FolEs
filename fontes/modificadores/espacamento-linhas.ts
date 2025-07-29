import { Valor } from "../valores";
import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";
import { validarQuantificador } from "./validacoes/quantificador";

export class EspacamentoLinhas extends Modificador {
    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
    ) {
        super(["espacamento-linhas", "espaçamento-linhas"], "row-gap", pragmas);

        validarValorNumerico("espaçamento-linhas", valores);

        // TODO: Repensar
        // if (Number(parseInt(valor))) {
        //     validarQuantificador(
        //         "espaçamento-linhas",
        //         quantificador,
        //         unidadesMedida,
        //     );

        //     this.quantificador = quantificador;
        // }

        this.valores = valores;
    }
}
