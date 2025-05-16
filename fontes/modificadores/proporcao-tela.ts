import { Modificador, PragmasModificador } from "./superclasse";
import { validarAtribuicaoAbreviada } from "./validacoes/atribuicao-abreviada";
import { validarValorNumerico } from "./validacoes/numerica";

export class ProporcaoTela extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        auto: "auto",
    };

    constructor(
        valor: string,
        quantificador?: string,
        pragmas?: PragmasModificador,
        valorVariavel: boolean = false,
    ) {
        super(["proporcao-tela", "proporção-tela"], "aspect-ratio", pragmas);

        if (!valorVariavel) {
            if (valor.includes("/")) {
                validarAtribuicaoAbreviada("numérica", "proporção-tela", valor, this.valoresAceitos);
            } else {
                validarValorNumerico("proporção-tela", valor, this.valoresAceitos);
            }
        }

        this.valor = valor;
    }
}
