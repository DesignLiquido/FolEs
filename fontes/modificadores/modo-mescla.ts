import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class ModoMescla extends Modificador {

    // Valores do tipo <blend-mode>
    // https://developer.mozilla.org/en-US/docs/Web/CSS/blend-mode 
    valoresAceitos: { [valorFoles: string]: string } = {
        "normal": "normal",
        "multiplicar": "multiply",
        "tela": "screen",
        "sobre": "overlay",
        "escurecer": "darken",
        "clarear": "lighten",
        "subexposicao": "color-dodge",
        "subexposição": "color-dodge",
        "cores-quentes": "color-burn",
        "luz-forte": "hard-light",
        "luz-fraca": "soft-light",
        "diferenca": "difference",
        "diferença": "difference",
        "excluir": "exclusion",
        "matiz": "hue",
        "saturar": "saturation",
        "colorir": "color",
        "luminosidade": "luminosity",
    }

    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador) {
        super("modo-mescla", "mix-blend-mode");

        validarValores('modo-mescla', valor, this.valoresAceitos);

        this.valor = valor;

        // Não recebe quantificador
        // this.quantificador = quantificador;
    }
}
