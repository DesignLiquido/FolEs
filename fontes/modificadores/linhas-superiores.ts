import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";
import { proibirQuantificador } from "./validacoes/proibir-quantificador";

export class LinhasSuperiores extends Modificador {
    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador) {
        super("linhas-superiores", "widows", pragmas);

        validarValorNumerico('linhas-superiores', valor);

        this.valor = valor;

        // Não recebe quantificador, apenas o valor numérico.
        proibirQuantificador('linhas-superiores', quantificador);
    }
}
