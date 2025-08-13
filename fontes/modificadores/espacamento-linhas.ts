import { Valor } from "../valores";
import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";

export class EspacamentoLinhas extends Modificador {
    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
    ) {
        super(["espacamento-linhas", "espaçamento-linhas"], "row-gap", pragmas);

        validarValorNumerico(
            "espaçamento-linhas", 
            valores,
            null,
            null,
            unidadesMedida
        );

        this.valores = valores;
    }
}
