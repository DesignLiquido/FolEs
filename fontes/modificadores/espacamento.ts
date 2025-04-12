import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";
import { validarQuantificador } from "./validacoes/quantificador";

export class Espacamento extends Modificador {
    constructor(
        valor: string,
        quantificador?: string,
        pragmas?: PragmasModificador,
        valorVariavel: boolean = false,
    ) {
        super(["espacamento", "espaçamento"], "gap", pragmas);

        const valoresExtra = ["calc"];

        if (!valorVariavel) {
            validarValorNumerico("espaçamento", valor, undefined, valoresExtra);

            if (Number(parseInt(valor))) {
                validarQuantificador(
                    "espaçamento",
                    quantificador,
                    unidadesMedida,
                );

                this.quantificador = quantificador;
            }
        }

        this.valor = valor;
    }
}
