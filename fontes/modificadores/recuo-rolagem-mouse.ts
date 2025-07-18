import { Valor } from "../valores";
import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarAtribuicaoAbreviada } from "./validacoes/atribuicao-abreviada";
import { validarValorNumerico } from "./validacoes/numerica";
import { validarQuantificador } from "./validacoes/quantificador";

export class RecuoRolagemMouse extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        auto: "auto",
    };

    constructor(
        valores: Valor[],
        
        pragmas?: PragmasModificador,
        valorVariavel: boolean = false,
    ) {
        super("recuo-rolagem-mouse", "scroll-padding", pragmas);

        // TODO: Repensar
        // if (!valorVariavel) {
        //     if (valor.includes(" ")) {
        //         validarAtribuicaoAbreviada("numérica", "recuo-rolagem-mouse", valores, this.valoresAceitos);
        //     } else {
        //         validarValorNumerico("recuo-rolagem-mouse", valores, this.valoresAceitos);
        //     }

        //     if (Number(parseInt(valor))) {
        //         validarQuantificador("recuo-rolagem-mouse", quantificador, unidadesMedida);

        //         this.quantificador = quantificador;
        //     }
        // }

        this.valores = valores;
    }
}
