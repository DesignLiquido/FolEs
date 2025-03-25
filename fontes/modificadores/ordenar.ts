import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";
import { proibirQuantificador } from "./validacoes/proibir-quantificador";

export class Ordenar extends Modificador {
    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador, valorVariavel: boolean = false) {
        super("ordenar", "order", pragmas);

        if (!valorVariavel) {
            validarValorNumerico('ordenar', valor);

            // Não recebe quantificador, apenas o valor numérico.
            proibirQuantificador('ordenar', quantificador);
        }

        this.valor = valor;
    }
}
