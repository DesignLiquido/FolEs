import { valoresGlobais } from "./atributos/globais";
import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador } from "./superclasse/modificador";

export class BordaMascara extends Modificador {
    // Seletor de Atribuição Abreviada (Shorthand).
    // Pode receber de 1 a 6 valores.
    valoresAceitos: { [valorFoles: string]: string } = {
        "nenhuma": "none",
        "preencher": "fill",
        "auto": "auto",
        "esticar": "stretch",
        "repetir": "repeat",
        "arredondar": "round",
        "espacar": "space",
        "espaçar": "space",
        "luminancia": "luminance",
        "luminância": "luminance",
        "alfa": "alpha",
    }

    constructor(valor: string, quantificador?: string) {
        super(["borda-mascara", "borda-máscara"], "mask-border");

        // O valor é recebido como objeto, o que impossibilita de utilizar a função includes().
        // A constante abaixo é criada para ser possível fazer as validações seguintes.
        const valorString = valor.toString();

        if (!(valor in this.valoresAceitos) &&
            Number.isNaN(parseInt(valor)) &&
            !(valorString.includes('url')) &&
            !(valor in valoresGlobais)) {
            throw new Error(`Propriedade 'borda-mascara' com valor ${valor} inválido. Valores aceitos: 
            número-quantificador, URL, 
            ${Object.keys(this.valoresAceitos).reduce((final, atual) => final += `, ${atual}`)},
            ${Object.keys(valoresGlobais).reduce((final, atual) => final += `, ${atual}`)}.`);
        }

        this.valor = valor;

        if (Number(parseInt(valor))) {
            if (!(quantificador in unidadesMedida) || quantificador === undefined) {
                throw new Error(`Propriedade 'borda-mascara' com quantificador inválido. Valores aceitos:
                ${Object.keys(unidadesMedida).reduce((final, atual) => final += `, ${atual}`)}.`);
            }

            this.quantificador = quantificador;
        }
    }
}
