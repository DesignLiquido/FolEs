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
        variavel?: boolean
    ) {
        super("agrupar-palavra", "word-break", pragmas);

        if (!variavel) validarValores("agrupar-palavra", valores, this.valoresAceitos);

        this.valores = valores;
        this.variavel = variavel;
    }
}
