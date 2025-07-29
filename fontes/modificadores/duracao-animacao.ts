import { Valor } from "../valores";
import { valoresTemporais } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarAtribuicaoAbreviada } from "./validacoes/atribuicao-abreviada";
import { validarValorNumerico } from "./validacoes/numerica";
import { validarQuantificador } from "./validacoes/quantificador";

export class DuracaoAnimacao extends Modificador {
    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
    ) {
        super(
            ["duracao-animacao", "duração-animação"],
            "animation-duration",
            pragmas,
        );

        // TODO: Repensar
        //     if (valor.includes(",")) {
        //         validarAtribuicaoAbreviada("numérica", "duração-animação", valor);
        //     } else {
        //         validarValorNumerico("duração-animação", valor);
        //     }

        //     if (Number(parseInt(valor))) {
        //         validarQuantificador(
        //             "duração-animação",
        //             quantificador,
        //             valoresTemporais,
        //         );

        //         this.quantificador = quantificador;
        //     }

        this.valores = valores;
    }
}
