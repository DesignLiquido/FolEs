import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class VazamentoVertical extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        visivel: "visible",
        visível: "visible",
        escondido: "hidden",
        recorte: "clip",
        "barra-rolagem": "scroll",
        auto: "auto",
    };

    static nomeCss: string = "overflow-y";

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super("vazamento-vertical", VazamentoVertical.nomeCss, pragmas);

        if (!variavel) validarValores("vazamento-vertical", valores, this.valoresAceitos);

        this.valores = valores;
        this.variavel = variavel;
    }
}
