import {
    ListaDeValorPercentual,
    unidadesMedida,
} from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";
import { validarQuantificador } from "./validacoes/quantificador";

export class MargemEmLinha extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        auto: "auto",
    };

    constructor(
        valor: string,
        quantificador?: string,
        pragmas?: PragmasModificador,
        valorVariavel: boolean = false,
    ) {
        super("margem-em-linha", "margin-inline", pragmas);

        if (!valorVariavel) {
            validarValorNumerico("margem-em-linha", valor, this.valoresAceitos);

            if (Number(parseInt(valor))) {
                validarQuantificador(
                    "margem-em-linha",
                    quantificador,
                    unidadesMedida,
                );

                this.quantificador = quantificador;
            }
        }

        this.valor = valor;
    }
}
