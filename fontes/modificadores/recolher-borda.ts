import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class RecolherBorda extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        recolher: "collapse",
        separar: "separate",
    };

    constructor(
        valores: Valor[],
        
        pragmas?: PragmasModificador,
        valorVariavel: boolean = false,
    ) {
        super("recolher-borda", "border-collapse", pragmas);

        if (!valorVariavel)
            validarValores("recolher-borda", valores, this.valoresAceitos);

        this.valores = valores;
    }
}
