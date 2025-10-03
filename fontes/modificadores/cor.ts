import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorCor } from "./validacoes/cor";

export class Cor extends Modificador {
    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super("cor", "color", pragmas);

        if (!variavel) validarValorCor("cor", valores);

        this.valores = valores;
        this.variavel = variavel;
    }
}
