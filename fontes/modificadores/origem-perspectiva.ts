import { ListaDeValorPercentual } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";

export class OrigemPerspectiva extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "esquerda": "left",
        "centro": "center",
        "direita": "right",
        "superior": "top",
        "inferior": "bottom",
    }

    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador) {
        super("origem-perspectiva", "perspective-origin");

        // OBS.: Também pode receber 2 valores.
        // Ex.: origem-perspectiva: superior direita;

        // A lógica abaixo cobre somente o recebimento de UM valor. 
        // TODO: Adaptar lógica para cobrir os demais casos. 

        validarValorNumerico('origem-perspectiva', valor, this.valoresAceitos);

        this.valor = valor;

        // Aceita somente o valor percentual (%) como quantificador
        // Também pode receber somente o valor numérico, sem quantificador
        if (Number(parseInt(valor))) {
            if (
                !(quantificador in ListaDeValorPercentual) ||
                quantificador === undefined
            ) {
                throw new Error(
                `Propriedade 'origem-perspectiva' com quantificador inválido. Valores aceitos:
                ${Object.keys(ListaDeValorPercentual).reduce((final, atual) => final += `, ${atual}`)}.`);
            }

            this.quantificador = quantificador;
        }

    }
}
