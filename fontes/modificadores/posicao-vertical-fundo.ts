import { posicoesBasicas } from "./atributos/posicoes";
import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";
import { validarQuantificador } from "./validacoes/quantificador";

export class PosicaoVerticalFundo extends Modificador {
    constructor(
        valor: string,
        quantificador?: string,
        pragmas?: PragmasModificador,
        valorVariavel: boolean = false,
    ) {
        super(
            ["posicao-vertical-fundo", "posição-vertical-fundo"],
            "background-position-y",
            pragmas,
        );

        if (!valorVariavel) {
            validarValorNumerico(
                "posição-vertical-fundo",
                valor,
                posicoesBasicas,
            );

            if (Number(parseInt(valor))) {
                validarQuantificador(
                    "posição-vertical-fundo",
                    quantificador,
                    unidadesMedida,
                );

                this.quantificador = quantificador;
            }
        }

        this.valor = valor;
    }
}
