import { Valor } from "../valores";
import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";
import { validarQuantificador } from "./validacoes/quantificador";

export class RaioDireitoBordaSuperior extends Modificador {
    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
    ) {
        super(
            "raio-direito-borda-superior",
            "border-top-right-radius",
            pragmas,
        );

        validarValorNumerico("raio-direito-borda-superior", valores);

        // TODO: Repensar
        // if (Number(parseInt(valor))) {
        //     validarQuantificador(
        //         "raio-direito-borda-superior",
        //         quantificador,
        //         unidadesMedida,
        //     );

        //     this.quantificador = quantificador;
        // }

        this.valores = valores;
    }
}
