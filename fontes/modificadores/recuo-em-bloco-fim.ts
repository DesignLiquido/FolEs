import { Valor } from "../valores";
import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";
import { validarQuantificador } from "./validacoes/quantificador";

export class RecuoEmBlocoFim extends Modificador {
    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
    ) {
        super("recuo-em-bloco-fim", "padding-block-end", pragmas);

        validarValorNumerico("recuo-em-bloco-fim", valores);

        // TODO: Repensar
        // if (Number(parseInt(valor))) {
        //     validarQuantificador(
        //         "recuo-em-bloco-fim",
        //         quantificador,
        //         unidadesMedida,
        //     );

        //     this.quantificador = quantificador;


        this.valores = valores;
    }
}
