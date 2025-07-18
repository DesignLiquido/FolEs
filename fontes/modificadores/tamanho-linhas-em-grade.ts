import { Valor } from "../valores";
import { unidadesMedida, valoresFlex } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";
import { validarQuantificador } from "./validacoes/quantificador";

export class TamanhoLinhasEmGrade extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "conteudo-maximo": "max-content",
        "conteúdo-máximo": "max-content",
        "conteudo-minimo": "min-content",
        "conteúdo-mínimo": "min-content",
        auto: "auto",
    };

    constructor(
        valores: Valor[],
        
        pragmas?: PragmasModificador,
        valorVariavel: boolean = false,
    ) {
        super("tamanho-linhas-em-grade", "grid-auto-rows", pragmas);

        const valoresExtra = ["minmax", "fit-content"];

        if (!valorVariavel) {
            validarValorNumerico(
                "tamanho-linhas-em-grade",
                valores,
                this.valoresAceitos,
                valoresExtra,
            );

            // Além dos quantificadores de Comprimento e Percentual, também pode receber a unidade 'fr', do tipo Flex.
            // if (Number(parseInt(valor))) {
            //     validarQuantificador(
            //         "tamanho-linhas-em-grade",
            //         quantificador,
            //         unidadesMedida,
            //         valoresFlex,
            //     );

            //     this.quantificador = quantificador;
            // }
        }

        this.valores = valores;
    }
}
