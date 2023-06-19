import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";
import { proibirQuantificador } from "./validacoes/proibir-quantificador";

export class FlexCrescimento extends Modificador {
    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador) {
        super("flex-crescimento", "flex-grow");

        validarValorNumerico('flex-crescimento', valor);

        this.valor = valor;
    
        // Não recebe quantificador, apenas o valor numérico.
        proibirQuantificador('flex-crescimento', quantificador);
    }
}
