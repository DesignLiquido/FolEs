import {
    ListaDeValorPercentual,
    unidadesMedida,
} from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";
import { validarQuantificador } from "./validacoes/quantificador";

export class Margem extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        auto: "auto",
    };

    constructor(
        valor: string,
        quantificador?: string,
        pragmas?: PragmasModificador,
        valorVariavel: boolean = false,
    ) {
        super("margem", "margin", pragmas);

        if (!valorVariavel) {
            validarValorNumerico("margem", valor, this.valoresAceitos);

            if (Number(parseInt(valor))) {
                validarQuantificador("margem", quantificador, unidadesMedida);

                this.quantificador = quantificador;
            }
        }

        this.valor = valor;
    }
}
