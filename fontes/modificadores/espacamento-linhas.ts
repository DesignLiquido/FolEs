import { Valor } from "../valores";
import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";

export class EspacamentoLinhas extends Modificador {
    static nomeCss: string = "row-gap";

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(["espacamento-linhas", "espaçamento-linhas"], EspacamentoLinhas.nomeCss, pragmas);

        if (!variavel) {
            validarValorNumerico(
                "espaçamento-linhas",
                valores,
                null,
                null,
                unidadesMedida
            );
        }

        this.valores = valores;
        this.variavel = variavel;
    }
}
