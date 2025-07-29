import { Valor } from "../valores";
import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarAtribuicaoAbreviada } from "./validacoes/atribuicao-abreviada";
import { validarValorNumerico } from "./validacoes/numerica";
import { validarQuantificador } from "./validacoes/quantificador";

export class RecuoEmLinha extends Modificador {
    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
    ) {
        super("recuo-em-linha", "padding-inline", pragmas);

        // TODO: Repensar
        //     if (valor.includes(" ")) {
        //         validarAtribuicaoAbreviada("numérica", "recuo-em-linha", valor);
        //     } else {
        //         validarValorNumerico("recuo-em-linha", valor);
        //     }

        //     if (Number(parseInt(valor))) {
        //         validarQuantificador("recuo-em-linha", quantificador, unidadesMedida);

        //         this.quantificador = quantificador;
        //     }

        this.valores = valores;
    }
}
