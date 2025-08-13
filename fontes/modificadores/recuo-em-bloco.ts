import { Valor } from "../valores";
import { unidadesMedida} from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarAtribuicaoAbreviada } from "./validacoes/atribuicao-abreviada";
import { validarValorNumerico } from "./validacoes/numerica";

export class RecuoEmBloco extends Modificador {
    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
    ) {
        super("recuo-em-bloco", "padding-block", pragmas);

        if (valores.length > 1) {
            validarAtribuicaoAbreviada(
                "numérica", 
                "recuo-em-bloco", 
                valores,
                null,
                null,
                unidadesMedida
            );
        } else {
            validarValorNumerico(
                "recuo-em-bloco", 
                valores,
                null,
                null,
                unidadesMedida
            );
        }

        this.valores = valores;
    }
}
