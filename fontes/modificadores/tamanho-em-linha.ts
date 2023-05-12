import { valoresGlobais } from "./atributos/globais";
import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";

export class TamanhoEmLinha extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "conteudo-maximo": "max-content",
        "conteúdo-máximo": "max-content",
        "conteudo-minimo": "min-content",
        "conteúdo-mínimo": "min-content",
        "auto": "auto",
    }

    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador) {
        super("tamanho-em-linha", "inline-size");

        // OBS.: Também pode receber a função fit-content( [ <length> | <percentage> ] )
        // A lógica abaixo cobre somente o recebimento de UM único valor. 

        // TODO: Adaptar lógica para cobrir todos os casos
        if (Number.isNaN(parseInt(valor)) &&
            !(valor in this.valoresAceitos) &&
            !(valor in valoresGlobais)
        ) {
            throw new Error(
                `Propriedade 'tamanho-em-linha' com valor ${valor} inválido. O valor deve ser numérico ou um dos valores:
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
                    `Propriedade 'tamanho-em-linha' com quantificador inválido. Valores aceitos:
                    ${Object.keys(unidadesMedida).reduce((final, atual) => final += `, ${atual}`)}.`);
            }

            this.quantificador = quantificador;
        }
    }
}
