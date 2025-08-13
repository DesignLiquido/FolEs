import { Valor } from "../valores";
import { posicoesBasicas } from "./atributos/posicoes";
import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";

export class PosicaoHorizontalFundo extends Modificador {
    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
    ) {
        super(
            ["posicao-horizontal-fundo", "posição-horizontal-fundo"],
            "background-position-x",
            pragmas,
        );

        validarValorNumerico(
            "posição-horizontal-fundo",
            valores,
            posicoesBasicas,
            null,
            unidadesMedida
        );

        this.valores = valores;
    }
}
