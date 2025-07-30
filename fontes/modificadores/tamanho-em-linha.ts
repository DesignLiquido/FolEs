import { Valor } from "../valores";
import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";

export class TamanhoEmLinha extends Modificador {
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
        super("tamanho-em-linha", "inline-size", pragmas);

        const valoresExtra = ["fit-content"];

        validarValorNumerico(
            "tamanho-em-linha",
            valores,
            this.valoresAceitos,
            valoresExtra,
            unidadesMedida
        );

        this.valores = valores;
    }
}
