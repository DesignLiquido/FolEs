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

    static nomeCss: string = "inline-size";

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super("tamanho-em-linha", TamanhoEmLinha.nomeCss, pragmas);

        const valoresExtra = ["fit-content"];

        if (!variavel) {
            validarValorNumerico(
                "tamanho-em-linha",
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
