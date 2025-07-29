import { Valor } from "../valores";
import { posicoesBasicas } from "./atributos/posicoes";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";
import { validarQuantificador } from "./validacoes/quantificador";

export class PosicaoFundo extends Modificador {
    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
    ) {
        super(
            ["posicao-fundo", "posição-fundo"],
            "background-position",
            pragmas,
        );

        validarValorNumerico("posição-fundo", valores, posicoesBasicas);

        // TODO: Repensar
        // if (Number(parseInt(valor))) {
        //     const quantificadoresAceitos = {
        //         px: "px",
        //         "%": "%",
        //         rem: "rem",
        //         vmin: "vmin",
        //         vmax: "vmax",
        //     };

        //     validarQuantificador(
        //         "posição-fundo",
        //         quantificador,
        //         quantificadoresAceitos,
        //     );

        //     this.quantificador = quantificador;
        // }

        this.valores = valores;
    }
}
