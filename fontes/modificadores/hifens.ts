import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class Hifens extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        nenhum: "none",
        manual: "manual",
        auto: "auto",
    };

    static nomeCss: string = "hyphens";

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(["hifens", "hífens"], Hifens.nomeCss, pragmas);

        if (!variavel) validarValores("hífens", valores, this.valoresAceitos);

        this.valores = valores;
        this.variavel = variavel;
    }
}
