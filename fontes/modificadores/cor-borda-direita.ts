import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorCor } from "./validacoes/cor";

export class CorBordaDireita extends Modificador {
    static nomeCss: string = "border-right-color";

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super("cor-borda-direita", CorBordaDireita.nomeCss, pragmas);

        if (!variavel) validarValorCor("cor-borda-direita", valores);

        this.valores = valores;
        this.variavel = variavel;
    }
}
