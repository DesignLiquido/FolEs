import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorCor } from "./validacoes/cor";

export class Cor extends Modificador {
    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
    ) {
        super("cor", "color", pragmas);

        validarValorCor("cor", valores);

        this.valores = valores;
    }
}
