import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorCor } from "./validacoes/cor";

export class CorFundo extends Modificador {
    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
    ) {
        super("cor-fundo", "background-color", pragmas);

        validarValorCor("cor-fundo", valores);

        this.valores = valores;
    }
}
