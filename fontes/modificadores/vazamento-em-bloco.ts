import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class VazamentoEmBloco extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        visivel: "visible",
        visível: "visible",
        escondido: "hidden",
        recortar: "clip",
        "barra-rolagem": "scroll",
        auto: "auto",
    };

    constructor(
        valores: Valor[],
        
        pragmas?: PragmasModificador,
        valorVariavel: boolean = false,
    ) {
        super("vazamento-em-bloco", "overflow-block", pragmas);

        if (!valorVariavel)
            validarValores("vazamento-em-bloco", valores, this.valoresAceitos);

        this.valores = valores;
    }
}
