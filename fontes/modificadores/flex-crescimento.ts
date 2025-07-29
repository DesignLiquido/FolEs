import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";
import { proibirQuantificador } from "./validacoes/proibir-quantificador";

export class FlexCrescimento extends Modificador {
    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
    ) {
        super("flex-crescimento", "flex-grow", pragmas);

        validarValorNumerico("flex-crescimento", valores);

        // TODO: Repensar
        // proibirQuantificador("flex-crescimento", quantificador);

        this.valores = valores;
    }
}
