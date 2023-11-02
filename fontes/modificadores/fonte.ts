import { valoresFonte, unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";
import { validarQuantificador } from "./validacoes/quantificador";

export class Fonte extends Modificador {
    // Seletor de Atribuição Abreviada (Shorthand).
    // Pode receber de 1 a 7 valores.
    valoresAceitos: { [valorFoles: string]: string } = {
        "serif": "serif",
        "sans-serif": "sans-serif",
        "monospace": "monospace",
        "cursive": "cursive",
        "fantasy": "fantasy",
        "system-ui": "system-ui",
        "ui-serif": "ui-serif",
        "ui-sans-serif": "ui-sans-serif",
        "ui-monospace": "ui-monospace",
        "ui-rounded": "ui-rounded",
        "math": "math",
        "emoji": "emoji",
        "fangsong": "fangsong",
        "extra-pequeno": "xx-small",
        "muito-pequeno": "x-small",
        "pequeno": "small",
        "medio": "medium",
        "médio": "medium",
        "grande": "large",
        "muito-grande": "x-large",
        "extra-grande": "xx-large",
        "gigante": "xxx-large",
        "maior": "larger",
        "menor": "smaller",
        "normal": "normal",
        "italica": "italic",
        "itálica": "italic",
        "obliqua": "oblique",
        "oblíqua": "oblique",
        "negrito": "bold",
        "mais-clara": "lighter",
        "mais-escura": "bolder",
        "ultra-condensada": "ultra-condensed",
        "extra-condensada": "extra-condensed",
        "condensada": "condensed",
        "semi-condensada": "semi-condensed",
        "semi-expandida": "semi-expanded",
        "expandida": "expanded",
        "extra-expandida": "extra-expanded",
        "ultra-expandida": "ultra-expanded",
    }

    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador) {
        super("fonte", "font", pragmas);

        validarValorNumerico('fonte', valor, this.valoresAceitos);

        this.valor = valor;

        if (Number(parseInt(valor))) {
            validarQuantificador('fonte', quantificador, unidadesMedida, valoresFonte);

            this.quantificador = quantificador;
        }
    }
}
