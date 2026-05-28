import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorCor } from "./validacoes/cor";

export class CorDestaque extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        auto: "auto",
    };

    static nomeCss: string = "accent-color";

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super("cor-destaque", CorDestaque.nomeCss, pragmas);

        if (!variavel) validarValorCor("cor-destaque", valores, this.valoresAceitos);

        this.valores = valores;
        this.variavel = variavel;
    }
}
