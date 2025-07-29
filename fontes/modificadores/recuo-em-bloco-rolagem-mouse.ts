import { Valor } from "../valores";
import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarAtribuicaoAbreviada } from "./validacoes/atribuicao-abreviada";
import { validarValorNumerico } from "./validacoes/numerica";
import { validarQuantificador } from "./validacoes/quantificador";

export class RecuoEmBlocoRolagemMouse extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        auto: "auto",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
    ) {
        super("recuo-em-bloco-rolagem-mouse", "scroll-padding-block", pragmas);

        // TODO: Repensar
        //     if (valor.includes(" ")) {
        //         validarAtribuicaoAbreviada("numérica", "recuo-em-bloco-rolagem-mouse", valores, this.valoresAceitos);
        //     } else {
        //         validarValorNumerico("recuo-em-bloco-rolagem-mouse", valores, this.valoresAceitos);
        //     }

        //     if (Number(parseInt(valor))) {
        //         validarQuantificador("recuo-em-bloco-rolagem-mouse", quantificador, unidadesMedida);

        //         this.quantificador = quantificador;
        //     }

        this.valores = valores;
    }
}
