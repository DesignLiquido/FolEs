import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class VazamentoHorizontal extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        visivel: "visible",
        visível: "visible",
        escondido: "hidden",
        recorte: "clip",
        "barra-rolagem": "scroll",
        auto: "auto",
    };

    static nomeCss: string = "overflow-x";

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super("vazamento-horizontal", VazamentoHorizontal.nomeCss, pragmas);

        if (!variavel) validarValores("vazamento-horizontal", valores, this.valoresAceitos);

        this.valores = valores;
        this.variavel = variavel;
    }
}
