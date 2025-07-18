import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class PreencherColuna extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        auto: "auto",
        equilibrar: "balance",
        "equilibrar-tudo": "balance-all",
    };

    constructor(
        valores: Valor[],
        
        pragmas?: PragmasModificador,
        valorVariavel: boolean = false,
    ) {
        super("preencher-coluna", "column-fill", pragmas);

        if (!valorVariavel)
            validarValores("preencher-coluna", valores, this.valoresAceitos);

        this.valores = valores;
    }
}
