import { ListaDeValoresGlobais } from "./atributos/globais";
import { ListaDeComprimento } from "./atributos/quantificadores";
import { Modificador } from "./superclasse/modificador";

export class InicioBordaMascara extends Modificador {
    constructor(valor: string, quantificador?: string) {
        super(
            ["inicio-borda-mascara", "início-borda-máscara"],
            "mask-border-outset"
        );

        // OBS.: Pode receber de 1 a 4 valores
        // A lógica abaixo cobre somente o recebimento de um único valor
        if (Number.isNaN(parseInt(valor)) &&
            !(valor in ListaDeValoresGlobais)
        ) {
            throw new Error(
                `Propriedade 'início-borda-máscara' com valor ${valor} inválido. O valor deve ser numérico ou um dos valores:
            ${Object.keys(ListaDeValoresGlobais).reduce((final, atual) => final += `, ${atual}`)}.`);
        }

        this.valor = valor;

        // Não aceita valores percentuais, somente de comprimento
        if (Number(parseInt(valor))) {
            if (
                !(quantificador in ListaDeComprimento) ||
                quantificador === undefined
            ) {
                throw new Error(
                    `Propriedade 'início-borda-máscara' com quantificador inválido. Valores aceitos:
                ${Object.keys(ListaDeComprimento).reduce((final, atual) => final += `, ${atual}`)}.`);
            }

            this.quantificador = quantificador;
        }
    }
}
