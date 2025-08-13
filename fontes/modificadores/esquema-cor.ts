import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class EsquemaCor extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        normal: "normal",
        claro: "light",
        escuro: "dark",
        apenas: "only",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
    ) {
        super("esquema-cor", "color-scheme", pragmas);

        validarValores("esquema-cor", valores, this.valoresAceitos);

        this.valores = valores;
    }
}
