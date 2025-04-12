import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";
import { validarQuantificador } from "./validacoes/quantificador";

export class EspacamentoLinhas extends Modificador {
    constructor(
        valor: string,
        quantificador?: string,
        pragmas?: PragmasModificador,
        valorVariavel: boolean = false,
    ) {
        super(["espacamento-linhas", "espaçamento-linhas"], "row-gap", pragmas);

        if (!valorVariavel) {
            validarValorNumerico("espaçamento-linhas", valor);

            if (Number(parseInt(valor))) {
                validarQuantificador(
                    "espaçamento-linhas",
                    quantificador,
                    unidadesMedida,
                );

                this.quantificador = quantificador;
            }
        }

        this.valor = valor;
    }
}
