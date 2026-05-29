import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class VisibilidadeFundo extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        visivel: "visible",
        visível: "visible",
        escondido: "hidden",
    };

    static nomeCss: string = "backface-visibility";

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super("visibilidade-fundo", VisibilidadeFundo.nomeCss, pragmas);

        if (!variavel) validarValores("visibilidade-fundo", valores, this.valoresAceitos);

        this.valores = valores;
        this.variavel = variavel;
    }
}
