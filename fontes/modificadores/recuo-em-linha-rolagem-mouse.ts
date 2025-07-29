import { Valor } from "../valores";
import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarAtribuicaoAbreviada } from "./validacoes/atribuicao-abreviada";
import { validarValorNumerico } from "./validacoes/numerica";
import { validarQuantificador } from "./validacoes/quantificador";

export class RecuoEmLinhaRolagemMouse extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        auto: "auto",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
    ) {
        super("recuo-em-linha-rolagem-mouse", "scroll-padding-inline", pragmas);

        // TODO: Repensar
        //     if (valor.includes(" ")) {
        //         validarAtribuicaoAbreviada("numérica", "recuo-em-linha-rolagem-mouse", valores, this.valoresAceitos);
        //     } else {
        //         validarValorNumerico("recuo-em-linha-rolagem-mouse", valores, this.valoresAceitos);
        //     }

        //     if (Number(parseInt(valor))) {
        //         validarQuantificador("recuo-em-linha-rolagem-mouse", quantificador, unidadesMedida);

        //         this.quantificador = quantificador;
        //     }

        this.valores = valores;
    }
}
