import { Valor } from "../valores";
import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";
import { validarQuantificador } from "./validacoes/quantificador";

export class SombraTexto extends Modificador {
    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
    ) {
        super("sombra-texto", "text-shadow", pragmas);

        validarValorNumerico("sombra-texto", valores);

        // TODO: Repensar
        // if (quantificador !== undefined) {
        //     validarQuantificador(
        //         "sombra-texto",
        //         quantificador,
        //         unidadesMedida,
        //     );
        //     this.quantificador = quantificador;
        // }

        this.valores = valores;
    }
}
