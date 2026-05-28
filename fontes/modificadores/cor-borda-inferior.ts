import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorCor } from "./validacoes/cor";

export class CorBordaInferior extends Modificador {
    static nomeCss: string = "border-bottom-color";

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super("cor-borda-inferior", CorBordaInferior.nomeCss, pragmas);

        if (!variavel) validarValorCor("cor-borda-inferior", valores);

        this.valores = valores;
        this.variavel = variavel;
    }
}
