import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorCor } from "./validacoes/cor";

export class CorEnfaseTexto extends Modificador {
    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
    ) {
        super(
            ["cor-enfase-texto", "cor-ênfase-texto"],
            "text-emphasis-color",
            pragmas,
        );

        validarValorCor("cor-ênfase-texto", valores);

        this.valores = valores;
    }
}
