import { Valor } from "../valores";
import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";

export class TamanhoMinimoEmLinha extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "conteudo-maximo": "max-content",
        "conteúdo-máximo": "max-content",
        "conteudo-minimo": "min-content",
        "conteúdo-mínimo": "min-content",
        nenhum: "none",
    };

    static nomeCss: string = "min-inline-size";

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(
            ["tamanho-minimo-em-linha", "tamanho-mínimo-em-linha"],
            TamanhoMinimoEmLinha.nomeCss,
            pragmas,
        );

        const valoresExtra = ["fit-content"];

        if (!variavel) {
            validarValorNumerico(
                "tamanho-mínimo-em-linha",
                valores,
                this.valoresAceitos,
                valoresExtra,
                unidadesMedida
            );
        }

        this.valores = valores;
        this.variavel = variavel;
    }
}
