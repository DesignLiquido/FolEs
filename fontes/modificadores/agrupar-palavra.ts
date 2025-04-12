import { validarValores } from "./validacoes/comum";
import { Modificador, PragmasModificador } from "./superclasse";

export class AgruparPalavra extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        normal: "normal",
        "quebrar-tudo": "break-all",
        "manter-tudo": "keep-all",
    };

    constructor(
        valor: string,
        quantificador: string = null,
        pragmas?: PragmasModificador,
        valorVariavel: boolean = false,
    ) {
        super("agrupar-palavra", "word-break", pragmas);

        if (!valorVariavel)
            validarValores("agrupar-palavra", valor, this.valoresAceitos);

        this.valor = valor;
    }
}
