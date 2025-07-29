import { validarValores } from "./validacoes/comum";
import { Modificador, PragmasModificador } from "./superclasse";
import { Valor } from "../valores";

export class AgruparPalavra extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        normal: "normal",
        "quebrar-tudo": "break-all",
        "manter-tudo": "keep-all",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
    ) {
        super("agrupar-palavra", "word-break", pragmas);

        validarValores("agrupar-palavra", valores, this.valoresAceitos);

        this.valores = valores;
    }
}
