import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarAtribuicaoAbreviada } from "./validacoes/atribuicao-abreviada";
import { validarValorNumerico } from "./validacoes/numerica";

export class IncrementarContador extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        nenhum: "none",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
    ) {
        super("incrementar-contador", "counter-increment", pragmas);

        if (valores.length > 1) {
            validarAtribuicaoAbreviada(
                "numérica", 
                "incrementar-contador", 
                valores, 
                this.valoresAceitos, 
                null,
                null,
                true
            );
            // TODO: Recebia validacaoPersonalizada como true
        } else {
            validarValorNumerico(
                "incrementar-contador", 
                valores, 
                this.valoresAceitos,
                null,
                null,
                true
            );
        }

        this.valores = valores;
    }
}
