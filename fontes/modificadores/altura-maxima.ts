import { Valor } from "../valores";
import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";

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
    ) {
        super(["altura-maxima", "altura-máxima"], "max-height", pragmas);

        const valoresExtra = ["fit-content"];

        validarValorNumerico(
            "altura-máxima",
            valores,
            this.valoresAceitos,
            valoresExtra,
            unidadesMedida
        );

        this.valores = valores;
    }
}
