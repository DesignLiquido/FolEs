import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";
import { proibirQuantificador } from "./validacoes/proibir-quantificador";

export class FlexReduzir extends Modificador {
    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        valorVariavel: boolean = false,
    ) {
        super("flex-reduzir", "flex-shrink", pragmas);

        if (!valorVariavel) {
            validarValorNumerico("flex-reduzir", valores);

            // TODO: Repensar
            // proibirQuantificador("flex-reduzir", quantificador);
        }

        this.valores = valores;
    }
}
