import { validarValores } from "./validacoes/comum";
import { Modificador, PragmasModificador } from "./superclasse";
import { Valor } from "../valores";

export class AgruparVazamento extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        normal: "normal",
        "quebrar-palavras": "break-word",
        "qualquer-lugar": "anywhere",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
    ) {
        super("agrupar-vazamento", "overflow-wrap", pragmas);

        validarValores("agrupar-vazamento", valores, this.valoresAceitos);

        this.valores = valores;
    }
}
