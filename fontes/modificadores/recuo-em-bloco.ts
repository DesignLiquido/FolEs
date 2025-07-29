import { Valor } from "../valores";
import {
    ListaDeValorPercentual,
    unidadesMedida,
} from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarAtribuicaoAbreviada } from "./validacoes/atribuicao-abreviada";
import { validarValorNumerico } from "./validacoes/numerica";
import { validarQuantificador } from "./validacoes/quantificador";

export class RecuoEmBloco extends Modificador {
    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
    ) {
        super("recuo-em-bloco", "padding-block", pragmas);

        // TODO: Repensar
        //     if (valor.includes(" ")) {
        //         validarAtribuicaoAbreviada("numérica", "recuo-em-bloco", valor);
        //     } else {
        //         validarValorNumerico("recuo-em-bloco", valor);
        //     }

        //     if (Number(parseInt(valor))) {
        //         validarQuantificador("recuo-em-bloco", quantificador, unidadesMedida);

        //         this.quantificador = quantificador;
        //     }

        this.valores = valores;
    }
}
