import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class VazamentoEmLinha extends Modificador {
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
        super("vazamento-em-linha", "overflow-inline", pragmas);

        if (!valorVariavel)
            validarValores("vazamento-em-linha", valores, this.valoresAceitos);

        this.valores = valores;
    }
}
