import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class Visibilidade extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        visivel: "visible",
        visível: "visible",
        escondido: "hidden",
        recolher: "collapse",
    };

    static nomeCss: string = "visibility";

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super("visibilidade", Visibilidade.nomeCss, pragmas);

        if (!variavel) validarValores("visibilidade", valores, this.valoresAceitos);

        this.valores = valores;
        this.variavel = variavel;
    }
}
