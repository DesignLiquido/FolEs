import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

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

        validarValores('mesclar-fundo', valor, this.valoresAceitos);

        this.valor = valor;

        // Não recebe quantificador
        // this.quantificador = quantificador;
    }
}
