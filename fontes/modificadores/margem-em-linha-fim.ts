import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";
import { validarQuantificador } from "./validacoes/quantificador";

export class MargemEmLinhaFim extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        auto: "auto",
    };

    constructor(
        valor: string,
        quantificador?: string,
        pragmas?: PragmasModificador,
        valorVariavel: boolean = false,
    ) {
        super("margem-em-linha-fim", "margin-inline-end", pragmas);

        if (!valorVariavel) {
            validarValorNumerico(
                "margem-em-linha-fim",
                valor,
                this.valoresAceitos,
            );

            if (Number(parseInt(valor))) {
                validarQuantificador(
                    "margem-em-linha-fim",
                    quantificador,
                    unidadesMedida,
                );

                this.quantificador = quantificador;
            }
        }

        this.valor = valor;
    }
}
