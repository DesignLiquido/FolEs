import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";
import { proibirQuantificador } from "./validacoes/proibir-quantificador";

export class FlexCrescimento extends Modificador {
    constructor(
        valor: string,
        quantificador?: string,
        pragmas?: PragmasModificador,
        valorVariavel: boolean = false,
    ) {
        super("flex-crescimento", "flex-grow", pragmas);

        if (!valorVariavel) {
            validarValorNumerico("flex-crescimento", valor);

            proibirQuantificador("flex-crescimento", quantificador);
        }

        this.valor = valor;
    }
}
