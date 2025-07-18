import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class Hifens extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        nenhum: "none",
        manual: "manual",
        auto: "auto",
    };

    constructor(
        valores: Valor[],
        
        pragmas?: PragmasModificador,
        valorVariavel: boolean = false,
    ) {
        super(["hifens", "hífens"], "hyphens", pragmas);

        if (!valorVariavel)
            validarValores("hífens", valores, this.valoresAceitos);

        this.valores = valores;
    }
}
