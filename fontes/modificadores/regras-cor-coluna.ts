import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorCor } from "./validacoes/cor";

export class RegrasCorColuna extends Modificador {
    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
    ) {
        super("regras-cor-coluna", "column-rule-color", pragmas);

        validarValorCor("regras-cor-coluna", valores);

        this.valores = valores;
    }
}
