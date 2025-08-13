import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorCor } from "./validacoes/cor";

export class CorBordaEmLinha extends Modificador {
    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
    ) {
        super("cor-borda-em-linha", "border-inline-color", pragmas);

        validarValorCor("cor-borda-em-linha", valores);

        this.valores = valores;
    }
}
