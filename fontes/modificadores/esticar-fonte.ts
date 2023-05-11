import { valoresGlobais } from "./atributos/globais";
import { ListaDeValorPercentual } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse/modificador";

export class EsticarFonte extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "ultra-condensada": "ultra-condensed",
        "extra-condensada": "extra-condensed",
        "condensada": "condensed",
        "semi-condensada": "semi-condensed",
        "normal": "normal",
        "semi-expandida": "semi-expanded",
        "expandida": "expanded",
        "extra-expandida": "extra-expanded",
        "ultra-expandida": "ultra-expanded",
    }

    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador) {
        super("esticar-fonte", "font-stretch");

        // Pode receber valores próprios ou número-quantificador
        if (Number.isNaN(parseInt(valor)) &&
            !(valor in this.valoresAceitos) &&
            !(valor in valoresGlobais)
        ) {
            throw new Error(
                `Propriedade 'esticar-fonte' com valor ${valor} inválido. O valor deve ser numérico ou um dos valores:
                ${Object.keys(this.valoresAceitos).reduce((final, atual) => final += `, ${atual}`)},
                ${Object.keys(valoresGlobais).reduce((final, atual) => final += `, ${atual}`)}.`);
        }

        this.valor = valor;

        // O único quantificador aceito pelo seletor é o Percentual (%)
        if (Number(parseInt(valor))) {
            if (
                !(quantificador in ListaDeValorPercentual) ||
                quantificador === undefined
            ) {
                throw new Error(
                    `Propriedade 'esticar-fonte' com quantificador inválido. Valores aceitos:
                    ${Object.keys(ListaDeValorPercentual).reduce((final, atual) => final += `, ${atual}`)}.`);
            }

            this.quantificador = quantificador;
        }
    }
}
