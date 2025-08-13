import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class VisibilidadeFundo extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        visivel: "visible",
        visível: "visible",
        escondido: "hidden",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
    ) {
        super("visibilidade-fundo", "backface-visibility", pragmas);

        validarValores("visibilidade-fundo", valores, this.valoresAceitos);

        this.valores = valores;
    }
}
