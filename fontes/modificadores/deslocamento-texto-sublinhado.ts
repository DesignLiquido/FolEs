import { Valor } from "../valores";
import { valoresGlobais } from "./atributos/globais";
import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";
import { validarQuantificador } from "./validacoes/quantificador";

export class DeslocamentoTextoSublinhado extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        auto: "auto",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
    ) {
        super(
            "deslocamento-texto-sublinhado",
            "text-underline-offset",
            pragmas,
        );

        // TODO: Repensar
        validarValorNumerico(
            "deslocamento-texto-sublinhado",
            valores,
            this.valoresAceitos,
        );

        //     if (Number(parseInt(valor))) {
        //         validarQuantificador(
        //             "deslocamento-texto-sublinhado",
        //             quantificador,
        //             unidadesMedida,
        //         );

        //         this.quantificador = quantificador;
        //     }

        this.valores = valores;
    }
}
