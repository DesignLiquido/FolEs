import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";
import { proibirQuantificador } from "./validacoes/proibir-quantificador";

export class Ordenar extends Modificador {
    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador) {
        super("ordenar", "order");
        
        validarValorNumerico('ordenar', valor);

        this.valor = valor;

        // Não recebe quantificador, apenas o valor numérico.
        proibirQuantificador('ordenar', quantificador);
    }
}
