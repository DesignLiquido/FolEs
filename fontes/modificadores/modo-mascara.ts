import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class ModoMascara extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        alfa: "alpha",
        luminancia: "luminance",
        luminância: "luminance",
        "fonte-correspondente": "match-source",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
    ) {
        super(["modo-mascara", "modo-máscara"], "mask-mode", pragmas);

        validarValores("modo-máscara", valores, this.valoresAceitos);

        this.valores = valores;
    }
}
