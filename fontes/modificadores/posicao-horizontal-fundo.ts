import { posicoesBasicas } from "./atributos/posicoes";
import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";
import { validarQuantificador } from "./validacoes/quantificador";

export class PosicaoHorizontalFundo extends Modificador {
    constructor(
        valor: string,
        quantificador?: string,
        pragmas?: PragmasModificador,
        valorVariavel: boolean = false,
    ) {
        super(
            ["posicao-horizontal-fundo", "posição-horizontal-fundo"],
            "background-position-x",
            pragmas,
        );

        if (!valorVariavel) {
            validarValorNumerico(
                "posição-horizontal-fundo",
                valor,
                posicoesBasicas,
            );

            if (Number(parseInt(valor))) {
                validarQuantificador(
                    "posição-horizontal-fundo",
                    quantificador,
                    unidadesMedida,
                );

                this.quantificador = quantificador;
            }
        }

        this.valor = valor;
    }
}
