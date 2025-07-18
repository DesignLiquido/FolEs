import { validarValores } from "./validacoes/comum";
import { Modificador, PragmasModificador } from "./superclasse";
import { Valor } from "../valores";

export class AjusteCorForcado extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        nenhum: "none",
        auto: "auto",
    };

    constructor(
        valores: Valor[],
        quantificador: string,
        pragmas?: PragmasModificador,
        valorVariavel: boolean = false,
    ) {
        super(
            ["ajuste-cor-forcado", "ajuste-cor-forçado"],
            "forced-color-adjust",
            pragmas,
        );

        if (!valorVariavel)
            validarValores("ajuste-cor-forçado", valores, this.valoresAceitos);

        this.valores = valores;
    }
}
