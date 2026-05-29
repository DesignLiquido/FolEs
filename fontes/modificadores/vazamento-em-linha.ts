import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class VazamentoEmLinha extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        visivel: "visible",
        visível: "visible",
        escondido: "hidden",
        recorte: "clip",
        "barra-rolagem": "scroll",
        auto: "auto",
    };

    static nomeCss: string = "overflow-inline";

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super("vazamento-em-linha", VazamentoEmLinha.nomeCss, pragmas);

        if (!variavel) validarValores("vazamento-em-linha", valores, this.valoresAceitos);

        this.valores = valores;
        this.variavel = variavel;
    }
}
