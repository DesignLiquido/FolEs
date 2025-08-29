import { Valor } from "../valores";
import { unidadesMedida, valoresFlex } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";

export class ModeloColunasEmGrade extends Modificador {
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
        variavel?: boolean
    ) {
        super("modelo-colunas-em-grade", "grid-template-columns", pragmas);

        const valoresExtra = ["minmax", "fit-content"];

        const quantificadoresAceitos: { [nome: string]: string } = { ...unidadesMedida, ...valoresFlex };

        if (!variavel) {
            validarValorNumerico(
                "modelo-colunas-em-grade",
                valores,
                this.valoresAceitos,
                valoresExtra,
                quantificadoresAceitos
            );
        }

        this.valores = valores;
        this.variavel = variavel;
    }
}
