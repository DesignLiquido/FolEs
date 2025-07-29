import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";
import { proibirQuantificador } from "./validacoes/proibir-quantificador";

export class LinhasInferiores extends Modificador {
    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
    ) {
        super("linhas-inferiores", "orphans", pragmas);

        validarValorNumerico("linhas-inferiores", valores);

        // TODO: Repensar.
        // proibirQuantificador("linhas-inferiores", quantificador);

        this.valores = valores;
    }
}
