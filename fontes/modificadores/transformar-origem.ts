import { ListaDeValoresGlobais } from "./atributos/globais";
import { ListaDeQuantificadores } from "./atributos/quantificadores";
import { Modificador } from "./superclasse/modificador";

export class TransformarOrigem extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "esquerda": "left",
        "direita": "right",
        "superior": "top",
        "inferior": "bottom",
        "centro": "center",
    }

    constructor(valor: string, quantificador?: string) {
        super("transformar-origem", "transform-origin");

        // Pode receber de 1 a 3 valores;
        // A lógica abaixo cobre somente o recebimento de UM único valor.
        if (Number.isNaN(parseInt(valor)) &&
            !(valor in this.valoresAceitos) &&
            !(valor in ListaDeValoresGlobais)
        ) {
            throw new Error(
                `Propriedade 'transformar-origem' com valor ${valor} inválido. O valor deve ser numérico ou um dos valores:
                ${Object.keys(this.valoresAceitos).reduce((final, atual) => final += `, ${atual}`)},
                ${Object.keys(ListaDeValoresGlobais).reduce((final, atual) => final += `, ${atual}`)}.`);
        }

        this.valor = valor;

        // Aceita valores de posição (palavras) e também valor-quantificador.
        if (Number(parseInt(valor))) {
            if (
                !(quantificador in ListaDeQuantificadores) ||
                quantificador === undefined
            ) {
                throw new Error(
                    `Propriedade 'transformar-origem' com quantificador inválido. Valores aceitos:
                    ${Object.keys(ListaDeQuantificadores).reduce((final, atual) => final += `, ${atual}`)}.`);
            }

            this.quantificador = quantificador;
        }
    }
}
