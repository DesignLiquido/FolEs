import { ListaDeValoresGlobais } from "./atributos/globais";
import { Modificador } from "./superclasse/modificador";

export class ModoMescla extends Modificador {

    // Valores do tipo <blend-mode>
    // https://developer.mozilla.org/en-US/docs/Web/CSS/blend-mode 
    valoresAceitos: { [valorFoles: string]: string } = {
        "normal": "normal",
        "multiplicar": "multiply",
        "tela": "screen",
        "sobrepor": "overlay",
        "escurecer": "darken",
        "clarear": "lighten",
        "subexpor-cores": "color-dodge",
        "cores-quentes": "color-burn",
        "luz-forte": "hard-light",
        "luz-fraca": "soft-light",
        "diferenca": "difference",
        "diferença": "difference",
        "exclusao": "exclusion",
        "exclusão": "exclusion",
        "matiz": "hue",
        "saturar": "saturation",
        "colorir": "color",
        "luminosidade": "luminosity",
    }

    constructor(valor: string, quantificador?: string) {
        super("modo-mescla", "mix-blend-mode");

        if (!(valor in this.valoresAceitos &&
            !(valor in ListaDeValoresGlobais))) {
            throw new Error(`Propriedade 'modo-mescla' com valor ${valor} inválido. Valores aceitos: 
            ${Object.keys(this.valoresAceitos).reduce((final, atual) => final += `, ${atual}`)},
            ${Object.keys(ListaDeValoresGlobais).reduce((final, atual) => final += `, ${atual}`)}.`);
        }

        this.valor = valor;

        // Não recebe quantificador
        // this.quantificador = quantificador;
    }
}
