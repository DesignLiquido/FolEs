import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarAtribuicaoAbreviada } from "./validacoes/atribuicao-abreviada";
import { validarValorNumerico } from "./validacoes/numerica";

export class ProporcaoTela extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        auto: "auto",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
    ) {
        super(["proporcao-tela", "proporção-tela"], "aspect-ratio", pragmas);

        if (valores.length > 1) {
            validarAtribuicaoAbreviada(
                "numérica",
                "proporção-tela",
                valores,
                this.valoresAceitos
            );
        } else {
            validarValorNumerico(
                "proporção-tela",
                valores,
                this.valoresAceitos
            );
        }

        this.valores = valores;
    }
}
