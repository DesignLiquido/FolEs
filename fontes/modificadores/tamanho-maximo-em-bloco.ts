import { Valor } from "../valores";
import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";

export class TamanhoMaximoEmBloco extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "conteudo-maximo": "max-content",
        "conteúdo-máximo": "max-content",
        "conteudo-minimo": "min-content",
        "conteúdo-mínimo": "min-content",
        nenhum: "none",
    };

    static nomeCss: string = "max-block-size";

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(
            ["tamanho-maximo-em-bloco", "tamanho-máximo-em-bloco"],
            TamanhoMaximoEmBloco.nomeCss,
            pragmas,
        );

        const valoresExtra = ["fit-content"];

        if (!variavel) {
            validarValorNumerico(
                "tamanho-máximo-em-bloco",
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
