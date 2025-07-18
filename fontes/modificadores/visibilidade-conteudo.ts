import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class VisibilidadeConteudo extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        visivel: "visible",
        visível: "visible",
        escondido: "hidden",
        auto: "auto",
    };

    constructor(
        valores: Valor[],
        
        pragmas?: PragmasModificador,
        valorVariavel: boolean = false,
    ) {
        super(
            ["visibilidade-conteudo", "visibilidade-conteúdo"],
            "content-visibility",
            pragmas,
        );

        if (!valorVariavel)
            validarValores("visibilidade-conteúdo", valores, this.valoresAceitos);

        this.valores = valores;
    }
}
