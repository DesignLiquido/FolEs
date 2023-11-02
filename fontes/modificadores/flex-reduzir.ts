import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";
import { proibirQuantificador } from "./validacoes/proibir-quantificador";

export class FlexReduzir extends Modificador {
    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador) {
        super("flex-reduzir", "flex-shrink", pragmas);

        validarValorNumerico('flex-reduzir', valor);

        this.valor = valor;
        
        // Não recebe quantificador, apenas o valor numérico.
        proibirQuantificador('flex-reduzir', quantificador);
    }
}
