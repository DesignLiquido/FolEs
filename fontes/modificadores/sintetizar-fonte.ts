import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarAtribuicaoAbreviada } from "./validacoes/atribuicao-abreviada";
import { validarValores } from "./validacoes/comum";

export class SintetizarFonte extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        nenhuma: "none",
        "em-negrito": "weight",
        italica: "style",
        itálica: "style",
        "maiusculas-pequenas": "small-caps",
        "maiúsculas-pequenas": "small-caps",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
    ) {
        super("sintetizar-fonte", "font-synthesis", pragmas);

        if (valores.length > 1) {
            validarAtribuicaoAbreviada(
                "comum",
                "sintetizar-fonte",
                valores,
                this.valoresAceitos
            );
        } else {
            validarValores(
                "sintetizar-fonte",
                valores,
                this.valoresAceitos
            );
        }

        this.valores = valores;
    }
}
