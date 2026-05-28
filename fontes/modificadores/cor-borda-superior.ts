import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorCor } from "./validacoes/cor";

export class CorBordaSuperior extends Modificador {
    static nomeCss: string = "border-top-color";

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super("cor-borda-superior", CorBordaSuperior.nomeCss, pragmas);

        if (!variavel) validarValorCor("cor-borda-superior", valores);

        this.valores = valores;
        this.variavel = variavel;
    }
}
