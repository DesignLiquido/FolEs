import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorCor } from "./validacoes/cor";

export class CorBordaEmBloco extends Modificador {
    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
    ) {
        super("cor-borda-em-bloco", "border-block-color", pragmas);

        validarValorCor("cor-borda-em-bloco", valores);

        this.valores = valores;
    }
}
