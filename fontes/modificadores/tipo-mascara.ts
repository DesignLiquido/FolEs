import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class TipoMascara extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        alfa: "alpha",
        luminancia: "luminance",
        luminância: "luminance",
    };

    constructor(
        valores: Valor[],
        
        pragmas?: PragmasModificador,
        valorVariavel: boolean = false,
    ) {
        super(["tipo-mascara", "tipo-máscara"], "mask-type", pragmas);

        if (!valorVariavel)
            validarValores("tipo-máscara", valores, this.valoresAceitos);

        this.valores = valores;
    }
}
