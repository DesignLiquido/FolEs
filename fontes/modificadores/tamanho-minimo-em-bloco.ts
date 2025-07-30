import { Valor } from "../valores";
import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";

export class TamanhoMinimoEmBloco extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "conteudo-maximo": "max-content",
        "conteúdo-máximo": "max-content",
        "conteudo-minimo": "min-content",
        "conteúdo-mínimo": "min-content",
        nenhum: "none",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
    ) {
        super(
            ["tamanho-minimo-em-bloco", "tamanho-mínimo-em-bloco"],
            "min-block-size",
            pragmas,
        );

        const valoresExtra = ["fit-content"];

        validarValorNumerico(
            "tamanho-mínimo-em-bloco",
            valores,
            this.valoresAceitos,
            valoresExtra,
            unidadesMedida
        );

        this.valores = valores;
    }
}
