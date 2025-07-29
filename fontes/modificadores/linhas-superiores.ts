import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";
import { proibirQuantificador } from "./validacoes/proibir-quantificador";

export class LinhasSuperiores extends Modificador {
    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
    ) {
        super("linhas-superiores", "widows", pragmas);

        validarValorNumerico("linhas-superiores", valores);

        // TODO: Repensar.
        // proibirQuantificador("linhas-superiores", quantificador);

        this.valores = valores;
    }
}
