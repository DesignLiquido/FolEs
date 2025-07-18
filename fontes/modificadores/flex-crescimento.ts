import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";
import { proibirQuantificador } from "./validacoes/proibir-quantificador";

export class FlexCrescimento extends Modificador {
    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        valorVariavel: boolean = false,
    ) {
        super("flex-crescimento", "flex-grow", pragmas);

        if (!valorVariavel) {
            validarValorNumerico("flex-crescimento", valores);

            // TODO: Repensar
            // proibirQuantificador("flex-crescimento", quantificador);
        }

        this.valores = valores;
    }
}
