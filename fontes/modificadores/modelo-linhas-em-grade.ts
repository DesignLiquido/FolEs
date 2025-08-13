import { Valor } from "../valores";
import { unidadesMedida, valoresFlex } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";

export class ModeloLinhasEmGrade extends Modificador {
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
        super("modelo-linhas-em-grade", "grid-template-rows", pragmas);

        // OBS.: Também aceita receber o valor do tipo [linename]
        const valoresExtra = ["minmax", "fit-content"];

        validarValorNumerico(
            "modelo-linhas-em-grade",
            valores,
            this.valoresAceitos,
            valoresExtra,
            unidadesMedida,
            valoresFlex,
        );

        this.valores = valores;
    }
}
