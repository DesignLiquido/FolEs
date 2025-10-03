import { Valor } from "../valores";
import { posicoesBasicas } from "./atributos/posicoes";
import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";

export class PosicaoVerticalFundo extends Modificador {
    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(
            ["posicao-vertical-fundo", "posição-vertical-fundo"],
            "background-position-y",
            pragmas,
        );

        if (!variavel) {
            validarValorNumerico(
                "posição-vertical-fundo",
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
