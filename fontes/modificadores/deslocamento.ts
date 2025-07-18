import { Valor } from "../valores";
import { angulos, unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarAtribuicaoAbreviada } from "./validacoes/atribuicao-abreviada";
import { validarValorNumerico } from "./validacoes/numerica";
import { validarQuantificador } from "./validacoes/quantificador";

export class Deslocamento extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        auto: "auto",
        nenhum: "none",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        valorVariavel: boolean = false,
    ) {
        super("deslocamento", "offset", pragmas);

        // Também aceita receber a função path()
        const valoresExtra = ["url", "ray"];

        // TODO: Repensar
        // if (!valorVariavel) {
        //     if (typeof valor === 'string' && valor.includes(" ")) {
        //         validarAtribuicaoAbreviada(
        //             "numérica",
        //             "deslocamento",
        //             valor,
        //             this.valoresAceitos,
        //             valoresExtra,
        //         );
        //     } else {
        //         validarValorNumerico(
        //             "deslocamento",
        //             valor,
        //             this.valoresAceitos,
        //             valoresExtra,
        //         );
        //     }

        //     if (quantificador) {
        //         validarQuantificador(
        //             "deslocamento",
        //             quantificador,
        //             unidadesMedida,
        //             angulos,
        //         );
        //     }

        //     this.quantificador = quantificador;
        // }

        this.valores = valores;
    }
}
