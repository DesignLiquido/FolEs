import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarAtribuicaoAbreviada } from "./validacoes/atribuicao-abreviada";
import { validarValores } from "./validacoes/comum";

export class SintetizarFonte extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        nenhuma: "none",
        negrito: "weight",
        italico: "style",
        itálico: "style",
        "maiusculas-pequenas": "small-caps",
        "maiúsculas-pequenas": "small-caps",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
    ) {
        super("sintetizar-fonte", "font-synthesis", pragmas);

        // TODO: Repensar
        //     if (valor.includes(" ")) {
        //         validarAtribuicaoAbreviada("comum", "sintetizar-fonte", valores, this.valoresAceitos);
        //     } 

        validarValores("sintetizar-fonte", valores, this.valoresAceitos);

        this.valores = valores;
    }
}
