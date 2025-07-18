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
        valorVariavel: boolean = false,
    ) {
        super(
            ["modo-borda-mascara", "modo-borda-máscara"],
            "mask-border-mode",
            pragmas,
        );

        if (!valorVariavel)
            validarValores("modo-borda-máscara", valores, this.valoresAceitos);

        this.valores = valores;
    }
}
