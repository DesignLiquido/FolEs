import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorCor } from "./validacoes/cor";

export class DecoracaoCorTexto extends Modificador {
    static nomeCss: string = "text-decoration-color";

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(
            ["decoracao-cor-texto", "decoração-cor-texto"],
            DecoracaoCorTexto.nomeCss,
            pragmas,
        );

        if (!variavel) validarValorCor("decoração-cor-texto", valores);

        this.valores = valores;
        this.variavel = variavel;
    }
}
