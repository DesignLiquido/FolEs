import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorCor } from "./validacoes/cor";

export class CorEnfaseTexto extends Modificador {
    static nomeCss: string = "text-emphasis-color";

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(
            ["cor-enfase-texto", "cor-ênfase-texto"],
            CorEnfaseTexto.nomeCss,
            pragmas,
        );

        if (!variavel) validarValorCor("cor-ênfase-texto", valores);

        this.valores = valores;
        this.variavel = variavel;
    }
}
