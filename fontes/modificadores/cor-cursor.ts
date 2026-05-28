import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorCor } from "./validacoes/cor";

export class CorCursor extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        auto: "auto",
    };

    static nomeCss: string = "caret-color";

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super("cor-cursor", CorCursor.nomeCss, pragmas);

        if (!variavel) validarValorCor("cor-cursor", valores, this.valoresAceitos);

        this.valores = valores;
        this.variavel = variavel;
    }
}
