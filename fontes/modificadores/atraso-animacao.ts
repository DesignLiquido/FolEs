import { Valor } from "../valores";
import { valoresTemporais } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";

export class AtrasoAnimacao extends Modificador {
    static nomeCss: string = "animation-delay";
    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(
            ["atraso-animacao", "atraso-animação"],
            AtrasoAnimacao.nomeCss,
            pragmas,
        );

        if (!variavel) {
            validarValorNumerico(
                "atraso-animação",
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
