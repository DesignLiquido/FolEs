import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorCor } from "./validacoes/cor";

export class CorFundo extends Modificador {
    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super("cor-fundo", "background-color", pragmas);

        if (!variavel) validarValorCor("cor-fundo", valores);

        this.valores = valores;
        this.variavel = variavel;
    }
}
