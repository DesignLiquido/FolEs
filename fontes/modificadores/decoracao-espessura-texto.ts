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
        variavel?: boolean
    ) {
        super(
            ["decoracao-espessura-texto", "decoração-espessura-texto"],
            "text-decoration-thickness",
            pragmas,
        );

        if (!variavel) {
            validarValorNumerico(
                "decoração-espessura-texto",
                valores,
                this.valoresAceitos,
                null,
                unidadesMedida,
            );
        }

        this.valores = valores;
        this.variavel = variavel;
    }
}
