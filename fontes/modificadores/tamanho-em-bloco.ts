import { Modificador, PragmasModificador } from "./superclasse";
import { unidadesMedida } from "./atributos/quantificadores";
import { validarValorNumerico } from "./validacoes/numerica";
import { Valor } from "../valores";

export class TamanhoEmBloco extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "conteudo-maximo": "max-content",
        "conteúdo-máximo": "max-content",
        "conteudo-minimo": "min-content",
        "conteúdo-mínimo": "min-content",
        auto: "auto",
    };

    static nomeCss: string = "block-size";

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super("tamanho-em-bloco", TamanhoEmBloco.nomeCss, pragmas);

        if (!variavel) {
            validarValorNumerico(
                "tamanho-em-bloco",
                valores,
                this.valoresAceitos,
                null,
                unidadesMedida
            );
        }

        this.valores = valores;
        this.variavel = variavel;
    }
}
