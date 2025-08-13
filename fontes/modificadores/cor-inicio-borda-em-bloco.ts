import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorCor } from "./validacoes/cor";

export class CorInicioBordaEmBloco extends Modificador {
    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
    ) {
        super(
            ["cor-inicio-borda-em-bloco", "cor-início-borda-em-bloco"],
            "border-block-start-color",
            pragmas,
        );

        validarValorCor("cor-início-borda-em-bloco", valores);

        this.valores = valores;
    }
}
