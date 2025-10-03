import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class ModoBordaMascara extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        luminancia: "luminance",
        luminância: "luminance",
        alfa: "alpha",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(
            ["modo-borda-mascara", "modo-borda-máscara"],
            "mask-border-mode",
            pragmas,
        );

        if (!variavel) validarValores("modo-borda-máscara", valores, this.valoresAceitos);

        this.valores = valores;
        this.variavel = variavel;
    }
}
