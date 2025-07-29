import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorCor } from "./validacoes/cor";

export class CorBordaEsquerda extends Modificador {
    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
    ) {
        super("cor-borda-esquerda", "border-left-color", pragmas);

        validarValorCor("cor-borda-esquerda", valores);

        this.valores = valores;
    }
}
