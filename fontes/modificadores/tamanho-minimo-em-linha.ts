import { Valor } from "../valores";
import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";
import { validarQuantificador } from "./validacoes/quantificador";

export class TamanhoMinimoEmLinha extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "conteudo-maximo": "max-content",
        "conteúdo-máximo": "max-content",
        "conteudo-minimo": "min-content",
        "conteúdo-mínimo": "min-content",
        nenhum: "none",
    };

    constructor(
        valores: Valor[],
        
        pragmas?: PragmasModificador,
        valorVariavel: boolean = false,
    ) {
        super(
            ["tamanho-minimo-em-linha", "tamanho-mínimo-em-linha"],
            "min-inline-size",
            pragmas,
        );

        const valoresExtra = ["fit-content"];

        // TODO: Repensar
        // if (!valorVariavel) {
        //     validarValorNumerico(
        //         "tamanho-mínimo-em-linha",
        //         valor,
        //         this.valoresAceitos,
        //         valoresExtra,
        //     );

        //     if (Number(parseInt(valor))) {
        //         validarQuantificador(
        //             "tamanho-mínimo-em-linha",
        //             quantificador,
        //             unidadesMedida,
        //         );

        //         this.quantificador = quantificador;
        //     }
        // }

        this.valores = valores;
    }
}
