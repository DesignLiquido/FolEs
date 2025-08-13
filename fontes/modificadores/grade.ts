import { Valor } from "../valores";
import { MetodoCss } from "../valores/metodos/css/metodo-css";
import { Metodo } from "../valores/metodos/foles/metodo";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarAtribuicaoAbreviada } from "./validacoes/atribuicao-abreviada";
import { validarValores } from "./validacoes/comum";

export class Grade extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "conteudo-maximo": "max-content",
        "conteúdo-máximo": "max-content",
        "conteudo-minimo": "min-content",
        "conteúdo-mínimo": "min-content",
        auto: "auto",
        linha: "row",
        coluna: "column",
        denso: "dense",
        nenhum: "none",
        "conteudo-mínimo": "min-content",
        "sub-grade": "subgrid",
        alvenaria: "masonry",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
    ) {
        super("grade", "grid", pragmas);

        const valoresExtra = ["minmax"];

        // TODO: Adaptar para receber também número-quantificador
        if (valores.length > 1) {
            validarAtribuicaoAbreviada(
                "comum", 
                "grade", 
                valores, 
                this.valoresAceitos, 
                valoresExtra
            );
        } else {
            validarValores(
                "grade", 
                valores, 
                this.valoresAceitos, 
                valoresExtra
            );
        }

        this.valores = valores;
    }
}
