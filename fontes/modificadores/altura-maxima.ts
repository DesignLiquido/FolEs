import { Valor } from "../valores";
import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";
import { validarQuantificador } from "./validacoes/quantificador";

export class AlturaMaxima extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "conteudo-maximo": "max-content",
        "conteúdo-máximo": "max-content",
        "conteudo-minimo": "min-content",
        "conteúdo-mínimo": "min-content",
        nenhuma: "none",
    };

    constructor(
        valores: Valor[],
        
        pragmas?: PragmasModificador,
        valorVariavel: boolean = false,
    ) {
        super(["altura-maxima", "altura-máxima"], "max-height", pragmas);

        const valoresExtra = ["fit-content"];

        if (!valorVariavel) {
            validarValorNumerico(
                "altura-máxima",
                valores,
                this.valoresAceitos,
                valoresExtra,
            );

            // TODO: Repensar
            // if (Number(parseInt(valor))) {
            //     validarQuantificador(
            //         "altura-máxima",
            //         quantificador,
            //         unidadesMedida,
            //     );

            //     this.quantificador = quantificador;
            // }
        }

        this.valores = valores;
    }
}
