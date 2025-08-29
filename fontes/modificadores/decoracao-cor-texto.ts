import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorCor } from "./validacoes/cor";

export class DecoracaoCorTexto extends Modificador {
    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(
            ["decoracao-cor-texto", "decoração-cor-texto"],
            "text-decoration-color",
            pragmas,
        );

        if (!variavel) validarValorCor("decoração-cor-texto", valores);

        this.valores = valores;
        this.variavel = variavel;
    }
}
