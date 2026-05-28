import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarAtribuicaoAbreviada } from "./validacoes/atribuicao-abreviada";
import { validarValorNumerico } from "./validacoes/numerica";

export class DefinirContador extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        nenhum: "none",
    };

    static nomeCss: string = "counter-set";

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super("definir-contador", DefinirContador.nomeCss, pragmas);

        if (!variavel) {
            if (valores.length > 1) {
                validarAtribuicaoAbreviada(
                    "numérica",
                    "definir-contador",
                    valores,
                    this.valoresAceitos,
                    null,
                    null,
                    false,
                    true
                );
            } else {
                validarValorNumerico(
                    "definir-contador",
                    valores,
                    this.valoresAceitos
                );
            }
        }

        this.valores = valores;
        this.variavel = variavel;
    }
}
