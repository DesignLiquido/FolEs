import { Valor } from "../valores";
import { posicoesBasicas } from "./atributos/posicoes";
import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";
import { validarQuantificador } from "./validacoes/quantificador";

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
        );

        // TODO: Repensar
        // if (Number(parseInt(valor))) {
        //     validarQuantificador(
        //         "posição-horizontal-fundo",
        //         quantificador,
        //         unidadesMedida,
        //     );

        //     this.quantificador = quantificador;
        // }

        this.valores = valores;
    }
}
