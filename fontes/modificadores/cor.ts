import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorCor } from "./validacoes/cor";

export class Cor extends Modificador {
    static nomeCss: string = "color";

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super("cor", Cor.nomeCss, pragmas);

        if (!variavel) validarValorCor("cor", valores);

        this.valores = valores;
        this.variavel = variavel;
    }
}
