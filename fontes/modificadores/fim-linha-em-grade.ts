import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";

export class FimLinhaEmGrade extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "auto": "auto",
    }

    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador) {
        super("fim-linha-em-grade", "grid-row-end");

        // OBS.: Pode receber também DOIS valores: um número e um valor personalizado (<custom-ident>);
        // TODO: Implementar lógica restante no futuro, tendo em vista a estrutura do Av.Sintático.

        // A lógica abaixo cobre somente o recebimento de UM valor numérico.
        validarValorNumerico('fim-linha-em-grade', valor, this.valoresAceitos);

        this.valor = valor;

        // Não recebe quantificador, apenas o valor numérico.
        // Logo, deve retornar um erro se recebido um segundo parâmetro. 
        if (quantificador !== undefined) {
            throw new Error(
                `Propriedade 'fim-linha-em-grade' aceita somente valores numéricos. O quantificador ${quantificador} é inválido para esta operação.`);
        }
    }
}
