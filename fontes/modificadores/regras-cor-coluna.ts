import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorCor } from "./validacoes/cor";

export class RegrasCorColuna extends Modificador {
    static nomeCss: string = "column-rule-color";

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super("regras-cor-coluna", RegrasCorColuna.nomeCss, pragmas);

        if (!variavel) validarValorCor("regras-cor-coluna", valores);

        this.valores = valores;
        this.variavel = variavel;
    }
}
