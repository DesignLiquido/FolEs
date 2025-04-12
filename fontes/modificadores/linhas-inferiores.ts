import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";
import { proibirQuantificador } from "./validacoes/proibir-quantificador";

export class LinhasInferiores extends Modificador {
    constructor(
        valor: string,
        quantificador?: string,
        pragmas?: PragmasModificador,
        valorVariavel: boolean = false,
    ) {
        super("linhas-inferiores", "orphans", pragmas);

        if (!valorVariavel) {
            validarValorNumerico("linhas-inferiores", valor);

            proibirQuantificador("linhas-inferiores", quantificador);
        }

        this.valor = valor;
    }
}
