import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";
import { proibirQuantificador } from "./validacoes/proibir-quantificador";

export class LinhasInferiores extends Modificador {
    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        valorVariavel: boolean = false,
    ) {
        super("linhas-inferiores", "orphans", pragmas);

        if (!valorVariavel) {
            validarValorNumerico("linhas-inferiores", valores);

            // TODO: Repensar.
            // proibirQuantificador("linhas-inferiores", quantificador);
        }

        this.valores = valores;
    }
}
