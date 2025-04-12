import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class Visibilidade extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        visivel: "visible",
        visível: "visible",
        escondido: "hidden",
        recolher: "collapse",
    };

    constructor(
        valor: string,
        quantificador?: string,
        pragmas?: PragmasModificador,
        valorVariavel: boolean = false,
    ) {
        super("visibilidade", "visibility", pragmas);

        if (!valorVariavel)
            validarValores("visibilidade", valor, this.valoresAceitos);

        this.valor = valor;
    }
}
