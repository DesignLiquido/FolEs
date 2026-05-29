import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class PreencherColuna extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        auto: "auto",
        equilibrar: "balance",
        "equilibrar-tudo": "balance-all",
    };

    static nomeCss: string = "column-fill";

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super("preencher-coluna", PreencherColuna.nomeCss, pragmas);

        if (!variavel) validarValores("preencher-coluna", valores, this.valoresAceitos);

        this.valores = valores;
        this.variavel = variavel;
    }
}
