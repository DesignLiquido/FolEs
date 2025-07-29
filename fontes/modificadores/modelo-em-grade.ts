import { Valor } from "../valores";
import { unidadesMedida, valoresFlex } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarAtribuicaoAbreviada } from "./validacoes/atribuicao-abreviada";
import { validarValorNumerico } from "./validacoes/numerica";
import { validarQuantificador } from "./validacoes/quantificador";

export class ModeloEmGrade extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        nenhum: "none",
        auto: "auto",
        "conteudo-maximo": "max-content",
        "conteudo-máximo": "max-content",
        "conteudo-minimo": "min-content",
        "conteudo-mínimo": "min-content",
        "sub-grade": "subgrid",
        alvenaria: "masonry",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
    ) {
        super("modelo-em-grade", "grid-template", pragmas);

        // TODO: Também aceita receber o valor do tipo matriz
        // Ex.: grid-template:
        //      "a a a" 20%
        //      "b b b" auto;

        const valoresExtra = ["fit-content"];
        // TODO: Repensar
        //     if (typeof valor === 'string' && valor.includes(" ")) {
        //         validarAtribuicaoAbreviada("numérica", "modelo-em-grade", valores, this.valoresAceitos, valoresExtra);
        //     } else {
        //         validarValorNumerico("modelo-em-grade", valores, this.valoresAceitos, valoresExtra);
        //     }

        //     if (quantificador !== undefined) {
        //         validarQuantificador("modelo-em-grade", quantificador, unidadesMedida, valoresFlex);
        //         this.quantificador = quantificador;
        //     }

        this.valores = valores;
    }
}
