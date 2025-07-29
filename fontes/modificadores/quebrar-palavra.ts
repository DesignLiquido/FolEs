import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class QuebrarPalavra extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        normal: "normal",
        "quebrar-tudo": "break-all",
        "manter-tudo": "keep-all",
        quebrar: "break-word",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
    ) {
        super("quebrar-palavra", "word-break", pragmas);

        validarValores("quebrar-palavra", valores, this.valoresAceitos);

        this.valores = valores;
    }
}
