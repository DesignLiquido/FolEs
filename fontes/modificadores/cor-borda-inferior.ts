import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorCor } from "./validacoes/cor";

export class CorBordaInferior extends Modificador {
    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
    ) {
        super("cor-borda-inferior", "border-bottom-color", pragmas);

        validarValorCor("cor-borda-inferior", valores);

        this.valores = valores;
    }
}
