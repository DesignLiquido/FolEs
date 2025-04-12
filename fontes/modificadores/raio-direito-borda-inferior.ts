import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";
import { validarQuantificador } from "./validacoes/quantificador";

export class RaioDireitoBordaInferior extends Modificador {
    constructor(
        valor: string,
        quantificador?: string,
        pragmas?: PragmasModificador,
        valorVariavel: boolean = false,
    ) {
        super(
            "raio-direito-borda-inferior",
            "border-bottom-right-radius",
            pragmas,
        );

        if (!valorVariavel) {
            validarValorNumerico("raio-direito-borda-inferior", valor);

            if (Number(parseInt(valor))) {
                validarQuantificador(
                    "raio-direito-borda-inferior",
                    quantificador,
                    unidadesMedida,
                );

                this.quantificador = quantificador;
            }
        }

        this.valor = valor;
    }
}
