import { valoresGlobais } from "./atributos/globais";
import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";

export class TamanhoMascara extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "auto": "auto",
        "conter": "contain",
        "cobrir": "cover",
    }

    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador) {
        super(["tamanho-mascara", "tamanho-máscara"], "mask-size");

        // OBS.: Pode receber também 2 ou múltiplos valores
        // Ex.: tamanho-máscara: 6px, auto, cobrir;
        // A lógica abaixo cobre somente o recebimento de um único valor
        // TODO: Adaptar lógica para cobrir todos os casos
        if (Number.isNaN(parseInt(valor)) &&
            !(valor in this.valoresAceitos) &&
            !(valor in valoresGlobais)
        ) {
            throw new Error(
                `Propriedade 'tamanho-máscara' com valor ${valor} inválido. O valor deve ser numérico ou um dos valores:
            ${Object.keys(this.valoresAceitos).reduce((final, atual) => final += `, ${atual}`)},
            ${Object.keys(valoresGlobais).reduce((final, atual) => final += `, ${atual}`)}.`);
        }

        this.valor = valor;

        if (Number(parseInt(valor))) {
            if (
                !(quantificador in unidadesMedida) ||
                quantificador === undefined
            ) {
                throw new Error(
                    `Propriedade 'tamanho-máscara' com quantificador inválido. Valores aceitos:
                ${Object.keys(unidadesMedida).reduce((final, atual) => final += `, ${atual}`)}.`);
            }

            this.quantificador = quantificador;
        }
    }
}
