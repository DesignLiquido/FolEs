import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarAtribuicaoAbreviada } from "./validacoes/atribuicao-abreviada";
import { validarValores } from "./validacoes/comum";

export class Vazamento extends Modificador {
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
    ) {
        super("vazamento", "overflow", pragmas);

        if (valores.length > 1) {
            validarAtribuicaoAbreviada(
                "comum", 
                "vazamento", 
                valores, 
                this.valoresAceitos
            );
        } else {
            validarValores(
                "vazamento", 
                valores, 
                this.valoresAceitos
            );
        }

        this.valores = valores;
    }
}
