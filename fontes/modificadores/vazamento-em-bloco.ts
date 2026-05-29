import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class VazamentoEmBloco extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        visivel: "visible",
        visível: "visible",
        escondido: "hidden",
        recorte: "clip",
        "barra-rolagem": "scroll",
        auto: "auto",
    };

    static nomeCss: string = "overflow-block";

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super("vazamento-em-bloco", VazamentoEmBloco.nomeCss, pragmas);

        if (!variavel) validarValores("vazamento-em-bloco", valores, this.valoresAceitos);

        this.valores = valores;
        this.variavel = variavel;
    }
}
