import { validarValores } from "./validacoes/comum";
import { Modificador, PragmasModificador } from "./superclasse";
import { Valor } from "../valores";

export class AgruparVazamento extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        normal: "normal",
        "quebrar-palavras": "break-word",
        "qualquer-lugar": "anywhere",
    };

    static nomeCss: string = "overflow-wrap";

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super("agrupar-vazamento", AgruparVazamento.nomeCss, pragmas);

        if (!variavel) validarValores("agrupar-vazamento", valores, this.valoresAceitos);

        this.valores = valores;
        this.variavel = variavel;
    }
}
