import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";
import { proibirQuantificador } from "./validacoes/proibir-quantificador";

export class LinhasSuperiores extends Modificador {
    constructor(
        valor: string,
        quantificador?: string,
        pragmas?: PragmasModificador,
        valorVariavel: boolean = false,
    ) {
        super("linhas-superiores", "widows", pragmas);

        if (!valorVariavel) {
            validarValorNumerico("linhas-superiores", valor);

            proibirQuantificador("linhas-superiores", quantificador);
        }

        this.valor = valor;
    }
}
