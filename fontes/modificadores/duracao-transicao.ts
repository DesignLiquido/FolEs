import { Valor } from "../valores";
import { valoresTemporais } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";
import { validarQuantificador } from "./validacoes/quantificador";

export class DuracaoTransicao extends Modificador {
    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
    ) {
        super(
            ["duracao-transicao", "duração-transição"],
            "transition-duration",
            pragmas,
        );

        validarValorNumerico("duração-transição", valores);

        //     if (Number(parseInt(valor))) {
        //         validarQuantificador(
        //             "duração-transição",
        //             quantificador,
        //             valoresTemporais,
        //         );

        //         this.quantificador = quantificador;
        //     }

        this.valores = valores;
    }
}
