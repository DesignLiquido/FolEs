import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class Isolamento extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        auto: "auto",
        isolar: "isolate",
    };

    constructor(
        valor: string,
        quantificador?: string,
        pragmas?: PragmasModificador,
        valorVariavel: boolean = false,
    ) {
        super("isolamento", "isolation", pragmas);

        if (!valorVariavel)
            validarValores("isolamento", valor, this.valoresAceitos);

        this.valor = valor;
    }
}
