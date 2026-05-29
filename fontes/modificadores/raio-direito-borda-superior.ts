import { Valor } from "../valores";
import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";

export class RaioDireitoBordaSuperior extends Modificador {
    static nomeCss: string = "border-top-right-radius";

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(
            "raio-direito-borda-superior",
            RaioDireitoBordaSuperior.nomeCss,
            pragmas,
        );

        if (!variavel) {
            validarValorNumerico(
                "raio-direito-borda-superior",
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
