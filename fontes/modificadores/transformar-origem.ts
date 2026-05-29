import { Valor } from "../valores";
import { posicoesBasicas } from "./atributos/posicoes";
import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";

export class TransformarOrigem extends Modificador {
    static nomeCss: string = "transform-origin";

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super("transformar-origem", TransformarOrigem.nomeCss, pragmas);

        if (!variavel) {
            validarValorNumerico(
                "transformar-origem",
                valores,
                posicoesBasicas,
                null,
                unidadesMedida
            );
        }

        this.valores = valores;
        this.variavel = variavel;
    }
}
