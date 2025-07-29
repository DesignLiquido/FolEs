import { Valor } from "../valores";
import { angulos } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";
import { validarQuantificador } from "./validacoes/quantificador";

export class RotacaoDeslocamento extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        auto: "auto",
        inverter: "revert",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
    ) {
        super(
            ["rotacao-deslocamento", "rotação-deslocamento"],
            "offset-rotate",
            pragmas,
        );

        validarValorNumerico(
            "rotação-deslocamento",
            valores,
            this.valoresAceitos,
        );

        // Quantificador deve ser do tipo ângulo (<angle>)
        // TODO: Repensar
        // if (Number(parseInt(valor))) {
        //     validarQuantificador(
        //         "rotação-deslocamento",
        //         quantificador,
        //         angulos,
        //     );

        //     this.quantificador = quantificador;
        // }

        this.valores = valores;
    }
}
