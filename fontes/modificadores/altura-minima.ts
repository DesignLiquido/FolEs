import { Valor } from "../valores";
import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";
import { validarQuantificador } from "./validacoes/quantificador";

export class AlturaMinima extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "conteudo-maximo": "max-content",
        "conteúdo-máximo": "max-content",
        "conteudo-minimo": "min-content",
        "conteúdo-mínimo": "min-content",
        auto: "auto",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
    ) {
        super(["altura-minima", "altura-mínima"], "min-height", pragmas);

        const valoresExtra = ["fit-content"];

        validarValorNumerico(
            "altura-mínima",
            valores,
            this.valoresAceitos,
            valoresExtra,
        );

        //     // TODO: Repensar
        //     if (Number(parseInt(valor))) {
        //         validarQuantificador(
        //             "altura-mínima",
        //             quantificador,
        //             unidadesMedida,
        //         );

        //         this.quantificador = quantificador;
        //     }

        this.valores = valores;
    }
}
