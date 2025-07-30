import { Valor } from "../valores";
import { posicoesBasicas } from "./atributos/posicoes";
import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";

export class TransformarOrigem extends Modificador {
    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
    ) {
        super("transformar-origem", "transform-origin", pragmas);

        validarValorNumerico(
            "transformar-origem", 
            valores, 
            posicoesBasicas,
            null,
            unidadesMedida
        );

        this.valores = valores;
    }
}
