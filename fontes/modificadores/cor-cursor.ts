import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorCor } from "./validacoes/cor";

export class CorCursor extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        auto: "auto",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super("cor-cursor", "caret-color", pragmas);

        if (!variavel) validarValorCor("cor-cursor", valores, this.valoresAceitos);

        this.valores = valores;
        this.variavel = variavel;
    }
}
