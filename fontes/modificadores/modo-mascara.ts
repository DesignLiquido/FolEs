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
        variavel?: boolean
    ) {
        super(["modo-mascara", "modo-máscara"], "mask-mode", pragmas);

        if (!variavel) validarValores("modo-máscara", valores, this.valoresAceitos);

        this.valores = valores;
        this.variavel = variavel;
    }
}
