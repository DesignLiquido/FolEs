import { Valor } from "../valores";
import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";

export class FormaMargem extends Modificador {
    static nomeCss: string = "shape-margin";

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super("forma-margem", FormaMargem.nomeCss, pragmas);

        if (!variavel) {
            validarValorNumerico(
                "forma-margem",
                valores,
                null,
                null,
                unidadesMedida
            );
        }

        this.valores = valores;
        this.variavel = variavel;
    }
}
