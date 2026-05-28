import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorCor } from "./validacoes/cor";

export class CorInicioBordaEmLinha extends Modificador {
    static nomeCss: string = "border-inline-start-color";

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(
            ["cor-inicio-borda-em-linha", "cor-início-borda-em-linha"],
            CorInicioBordaEmLinha.nomeCss,
            pragmas,
        );

        if (!variavel) validarValorCor("cor-início-borda-em-linha", valores);

        this.valores = valores;
        this.variavel = variavel;
    }
}
