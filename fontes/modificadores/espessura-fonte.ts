import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";

export class EspessuraFonte extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "normal": "normal",
        "negrito": "bold",
        "mais-clara": "lighter",
        "mais-escura": "bolder",
    }

    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador) {
        super("espessura-fonte", "font-weight");

        validarValorNumerico('espessura-fonte', valor, this.valoresAceitos);

        this.valor = valor;

        // Não recebe quantificador, apenas o valor numérico.
        // Logo, deve retornar um erro se recebido um segundo parâmetro. 
        if (quantificador !== undefined) {
            throw new Error(
                `Propriedade 'espessura-fonte' aceita somente valores numéricos. O quantificador ${quantificador} é inválido para esta operação.`);
        }
    }
}
