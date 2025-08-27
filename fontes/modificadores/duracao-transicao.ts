import { Valor } from "../valores";
import { valoresTemporais } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";

export class DuracaoTransicao extends Modificador {
    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(
            ["duracao-transicao", "duração-transição"],
            "transition-duration",
            pragmas,
        );

        if (!variavel) {
            validarValorNumerico(
                "duração-transição",
                valores,
                null,
                null,
                valoresTemporais
            );
        }

        this.valores = valores;
        this.variavel = variavel;
    }
}
