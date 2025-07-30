import { Valor } from "../valores";
import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";

export class DecoracaoEspessuraTexto extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        auto: "auto",
        "de-frente": "from-font",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
    ) {
        super(
            ["decoracao-espessura-texto", "decoração-espessura-texto"],
            "text-decoration-thickness",
            pragmas,
        );

        validarValorNumerico(
            "decoração-espessura-texto",
            valores,
            this.valoresAceitos,
            null,
            unidadesMedida,
        );

        this.valores = valores;
    }
}
