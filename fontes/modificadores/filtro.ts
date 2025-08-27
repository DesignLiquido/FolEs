import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class Filtro extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        url: "url",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super("filtro", "filter", pragmas);

        const valoresExtra = ["url", "blur", "brightness", "contrast"];

        if (!variavel) validarValores("filtro", valores, this.valoresAceitos, valoresExtra);

        this.valores = valores;
        this.variavel = variavel;
    }
}
