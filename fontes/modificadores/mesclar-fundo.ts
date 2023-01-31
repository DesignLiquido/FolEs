import { ListaDeValoresGlobais } from "./atributos/globais";
import { Modificador } from "./superclasse/modificador";

export class MesclarFundo extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "normal": "normal",
        "multiplicar": "multiply",
        "alternar": "screen",
        "sobrepor": "overlay",
        "escurecer": "darken",
        "clarear": "normal",
        "subexposicao": "color-dodge",
        "subexposição": "color-dodge",
        "contraste": "color-burn",
        "luz-forte": "hard-light",
        "luz-fraca": "soft-light",
        "diferenca": "difference",
        "diferença": "difference",
        "excluir": "exclusion",
        "espaçar": "space",
        "matiz": "hue",
        "saturar": "saturation",
        "cor": "color",
        "luminosidade": "luminosity",
    }

    constructor(valor: string, quantificador?: string) {
        super("mesclar-fundo", "background-blend-mode");

        if (!(valor in this.valoresAceitos) && !(valor in ListaDeValoresGlobais)) {
            throw new Error(`Propriedade 'mesclar-fundo' com valor ${valor} inválido. Valores aceitos: 
            ${Object.keys(this.valoresAceitos).reduce((final, atual) => final += `, ${atual}`)},
            ${Object.keys(ListaDeValoresGlobais).reduce((final, atual) => final += `, ${atual}`)}.`)
        }

        this.valor = valor;

        // Não recebe quantificador
        // this.quantificador = quantificador;
    }
}
