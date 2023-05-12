import { valoresGlobais } from "./atributos/globais";
import { Modificador, PragmasModificador } from "./superclasse";

export class MesclarFundo extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "normal": "normal",
        "multiplicar": "multiply",
        "alternar": "screen",
        "sobre": "overlay",
        "escurecer": "darken",
        "clarear": "normal",
        "subexposicao": "color-dodge",
        "subexposição": "color-dodge",
        "cores-quentes": "color-burn",
        "luz-forte": "hard-light",
        "luz-fraca": "soft-light",
        "diferenca": "difference",
        "diferença": "difference",
        "excluir": "exclusion",
        "espaçar": "space",
        "matiz": "hue",
        "saturar": "saturation",
        "colorir": "color",
        "luminosidade": "luminosity",
    }

    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador) {
        super("mesclar-fundo", "background-blend-mode");

        if (!(valor in this.valoresAceitos) && !(valor in valoresGlobais)) {
            throw new Error(`Propriedade 'mesclar-fundo' com valor ${valor} inválido. Valores aceitos: 
            ${Object.keys(this.valoresAceitos).reduce((final, atual) => final += `, ${atual}`)},
            ${Object.keys(valoresGlobais).reduce((final, atual) => final += `, ${atual}`)}.`)
        }

        this.valor = valor;

        // Não recebe quantificador
        // this.quantificador = quantificador;
    }
}
