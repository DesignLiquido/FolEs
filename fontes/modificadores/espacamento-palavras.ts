import { Valor } from "../valores";
import { comprimentos } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";
import { validarQuantificador } from "./validacoes/quantificador";

export class EspacamentoPalavras extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        normal: "normal",
    };

    constructor(
        valores: Valor[],
        
        pragmas?: PragmasModificador,
        valorVariavel: boolean = false,
    ) {
        super(
            ["espacamento-palavras", "espaçamento-palavras"],
            "word-spacing",
            pragmas,
        );

        // TODO: Repensar
        // if (!valorVariavel) {
        //     validarValorNumerico(
        //         "espaçamento-palavras",
        //         valor,
        //         this.valoresAceitos,
        //     );

        //     if (Number(parseInt(valor))) {
        //         validarQuantificador(
        //             "espaçamento-palavras",
        //             quantificador,
        //             comprimentos,
        //         );

        //         this.quantificador = quantificador;
        //     }
        // }

        this.valores = valores;
    }
}
