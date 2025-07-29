import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class EstenderColuna extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        nenhuma: "none",
        todas: "all",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
    ) {
        super("estender-coluna", "column-span", pragmas);

        validarValores("estender-coluna", valores, this.valoresAceitos);

        this.valores = valores;
    }
}
