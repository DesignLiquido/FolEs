import { valoresGlobais } from "./atributos/globais";
import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";

export class LarguraBordaMascara extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "auto": "auto",
    }

    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador) {
        super(
            ["largura-borda-mascara", "largura-borda-máscara"],
            "mask-border-width"
        );

        // OBS.: Pode receber de 1 a 4 valores
        // A lógica abaixo cobre somente o recebimento de um único valor
        if (Number.isNaN(parseInt(valor)) &&
            !(valor in this.valoresAceitos) &&
            !(valor in valoresGlobais)
        ) {
            throw new Error(
                `Propriedade 'largura-borda-máscara' com valor ${valor} inválido. O valor deve ser numérico ou um dos valores:
            ${Object.keys(this.valoresAceitos).reduce((final, atual) => final += `, ${atual}`)},
            ${Object.keys(valoresGlobais).reduce((final, atual) => final += `, ${atual}`)}.`);
        }

        this.valor = valor;

        // Também pode receber somente o valor numérico, sem quantificador
        if (quantificador !== undefined) {
            if (
                !(quantificador in unidadesMedida)
            ) {
                throw new Error(
                    `Propriedade 'largura-borda-máscara' com quantificador inválido. Valores aceitos:
                ${Object.keys(unidadesMedida).reduce((final, atual) => final += `, ${atual}`)}.`);
            }

            this.quantificador = quantificador;
        }
    }
}
