import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class Citacoes extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        auto: "auto",
        nenhum: "none",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean

    ) {
        super(["citacoes", "citações"], "quotes", pragmas);

        // TODO: Aceita valores string

        if (!variavel) validarValores("citações", valores, this.valoresAceitos);

        this.valores = valores;
        this.variavel = variavel;
    }
}
