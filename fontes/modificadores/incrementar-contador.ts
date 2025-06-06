import { Modificador, PragmasModificador } from "./superclasse";
import { validarAtribuicaoAbreviada } from "./validacoes/atribuicao-abreviada";
import { validarValorNumerico } from "./validacoes/numerica";

export class IncrementarContador extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        nenhum: "none",
    };

    constructor(
        valor: string,
        quantificador?: string,
        pragmas?: PragmasModificador,
        valorVariavel: boolean = false,
    ) {
        super("incrementar-contador", "counter-increment", pragmas);

        if (!valorVariavel) {
            if (valor.includes(" ")) {
                validarAtribuicaoAbreviada("numérica", "incrementar-contador", valor, this.valoresAceitos, undefined, false, true);
            } else {
                validarValorNumerico("incrementar-contador", valor, this.valoresAceitos);
            }
        }

        this.valor = valor;
    }
}
