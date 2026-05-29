import { Valor } from "../valores";
import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";

export class RaioDireitoBordaInferior extends Modificador {
    static nomeCss: string = "border-bottom-right-radius";

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(
            "raio-direito-borda-inferior",
            RaioDireitoBordaInferior.nomeCss,
            pragmas,
        );

        if (!variavel) {
            validarValorNumerico(
                "raio-direito-borda-inferior",
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
