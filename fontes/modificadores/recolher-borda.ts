import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class RecolherBorda extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        recolher: "collapse",
        separar: "separate",
    };

    constructor(
        valor: string,
        quantificador?: string,
        pragmas?: PragmasModificador,
        valorVariavel: boolean = false,
    ) {
        super("recolher-borda", "border-collapse", pragmas);

        if (!valorVariavel)
            validarValores("recolher-borda", valor, this.valoresAceitos);

        this.valor = valor;
    }
}
