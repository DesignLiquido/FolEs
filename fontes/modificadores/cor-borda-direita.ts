import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorCor } from "./validacoes/cor";

export class CorBordaDireita extends Modificador {
    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
    ) {
        super("cor-borda-direita", "border-right-color", pragmas);

        validarValorCor("cor-borda-direita", valores);

        this.valores = valores;
    }
}
