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

    static nomeCss: string = "word-break";

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super("quebrar-palavra", QuebrarPalavra.nomeCss, pragmas);

        if (!variavel) validarValores("quebrar-palavra", valores, this.valoresAceitos);

        this.valores = valores;
        this.variavel = variavel;
    }
}
