import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class Recortar extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        auto: "auto",
    };

    constructor(
        valor: string,
        quantificador?: string,
        pragmas?: PragmasModificador,
        valorVariavel: boolean = false,
    ) {
        super("recortar", "clip", pragmas);

        if (!valorVariavel)
            validarValores("recortar", valor, this.valoresAceitos);

        this.valor = valor;
    }
}
