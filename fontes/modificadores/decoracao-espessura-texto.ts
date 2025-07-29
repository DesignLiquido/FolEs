import { Valor } from "../valores";
import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";
import { validarQuantificador } from "./validacoes/quantificador";

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

        // TODO: Repensar
        validarValorNumerico(
            "decoração-espessura-texto",
            valores,
            this.valoresAceitos,
        );

        //     if (Number(parseInt(valor))) {
        //         validarQuantificador(
        //             "decoração-espessura-texto",
        //             quantificador,
        //             unidadesMedida,
        //         );

        //         this.quantificador = quantificador;
        //     }

        this.valores = valores;
    }
}
