import { Valor } from "../valores";
import { valoresTemporais } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";

export class AtrasoAnimacao extends Modificador {
    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
    ) {
        super(
            ["atraso-animacao", "atraso-animação"],
            "animation-delay",
            pragmas,
        );

        validarValorNumerico(
            "atraso-animação", 
            valores,
            null,
            null,
            valoresTemporais
        );

        this.valores = valores;
    }
}
