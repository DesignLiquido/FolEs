import { Valor } from "../valores";
import { unidadesMedida, valoresFlex } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";

export class TamanhoLinhasEmGrade extends Modificador {
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
        super("tamanho-linhas-em-grade", "grid-auto-rows", pragmas);

        const valoresExtra = ["minmax", "fit-content"];

        validarValorNumerico(
            "tamanho-linhas-em-grade",
            valores,
            this.valoresAceitos,
            valoresExtra,
            unidadesMedida,
            valoresFlex,
        );

        this.valores = valores;
    }
}
