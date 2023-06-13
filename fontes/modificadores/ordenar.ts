import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";

export class Ordenar extends Modificador {
    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador) {
        super("ordenar", "order");
        
        validarValorNumerico('ordenar', valor);

        this.valor = valor;

        // Não recebe quantificador, apenas o valor numérico.
        // Logo, deve retornar um erro se recebido um segundo parâmetro. 
        if (quantificador !== undefined) {
            throw new Error(
                `Propriedade 'ordenar' aceita somente valores numéricos. O quantificador ${quantificador} é inválido para esta operação.`);
        }
    }
}
