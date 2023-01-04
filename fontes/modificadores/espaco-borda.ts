import { ListaDeValoresGlobais } from "./atributos/globais";
import { ListaDeQuantificadores } from "./atributos/quantificadores";
import { Modificador } from "./superclasse/modificador";

export class EspacoBorda extends Modificador {
    constructor(valor: string, quantificador?: string) {
        super(["espaco-borda", "espaço-borda"], "border-spacing");

        // Pode receber também mais de um valor número-quantificador
        // Ex.: espaco-borda: 1cm 2em;
        // A lógica abaixo cobre apenas o recebimento de UM único valor
        if (Number.isNaN(parseInt(valor)) &&
            !(valor in ListaDeValoresGlobais)
        ) {
            throw new Error(
                `Propriedade 'espaco-borda' com valor ${valor} inválido. O valor deve ser numérico ou um dos valores:
                ${Object.keys(ListaDeValoresGlobais).reduce((final, atual) => final += `, ${atual}`)}.`);
        }

        this.valor = valor;

        if (Number(parseInt(valor))) {

            // Verificação parte da lista de Comprimento, e não da de Quantificadores,
            // pois o modificador não aceita valores percentuais. 
            if (
                !(quantificador in ListaDeQuantificadores) ||
                quantificador === undefined
            ) {
                throw new Error(
                    `Propriedade 'espaco-borda' com quantificador inválido. Valores aceitos:
                ${Object.keys(ListaDeQuantificadores).reduce((final, atual) => final += `, ${atual}`)}.`);
            }

            this.quantificador = quantificador;
        }
    }
}
