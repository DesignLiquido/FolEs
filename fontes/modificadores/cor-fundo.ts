import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorCor } from "./validacoes/cor";

export class CorFundo extends Modificador {
    static nomeCss: string = "background-color";

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super("cor-fundo", CorFundo.nomeCss, pragmas);

        if (!variavel) validarValorCor("cor-fundo", valores);

        this.valores = valores;
        this.variavel = variavel;
    }
}
