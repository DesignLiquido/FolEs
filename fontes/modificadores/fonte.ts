import { Valor } from "../valores";
import { valoresFonte, unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarAtribuicaoAbreviada } from "./validacoes/atribuicao-abreviada";
import { validarValorNumerico } from "./validacoes/numerica";

export class Fonte extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        serif: "serif",
        "sans-serif": "sans-serif",
        monospace: "monospace",
        cursive: "cursive",
        fantasy: "fantasy",
        "system-ui": "system-ui",
        "ui-serif": "ui-serif",
        "ui-sans-serif": "ui-sans-serif",
        "ui-monospace": "ui-monospace",
        "ui-rounded": "ui-rounded",
        math: "math",
        emoji: "emoji",
        fangsong: "fangsong",
        "extra-pequeno": "xx-small",
        "muito-pequeno": "x-small",
        pequeno: "small",
        medio: "medium",
        médio: "medium",
        grande: "large",
        "muito-grande": "x-large",
        "extra-grande": "xx-large",
        gigante: "xxx-large",
        maior: "larger",
        menor: "smaller",
        normal: "normal",
        italica: "italic",
        itálica: "italic",
        obliqua: "oblique",
        oblíqua: "oblique",
        "em-negrito": "bold",
        "mais-clara": "lighter",
        "mais-escura": "bolder",
        "ultra-condensada": "ultra-condensed",
        "extra-condensada": "extra-condensed",
        condensada: "condensed",
        "semi-condensada": "semi-condensed",
        "semi-expandida": "semi-expanded",
        expandida: "expanded",
        "extra-expandida": "extra-expanded",
        "ultra-expandida": "ultra-expanded",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
    ) {
        super("fonte", "font", pragmas);

        // TODO: Adaptar modificador para receber, dentre os múltiplos valores, o valor do tipo Fonte
        const quantificadoresAceitos: { [nome: string]: string} = {...unidadesMedida, ...valoresFonte};
        if (valores.length > 1) {
            validarAtribuicaoAbreviada(
                "numérica", 
                "fonte", 
                valores, 
                this.valoresAceitos,
                quantificadoresAceitos
            );
        } else {
            validarValorNumerico(
                "fonte", 
                valores, 
                this.valoresAceitos,
                null,
                quantificadoresAceitos
            );
        }

        this.valores = valores;
    }
}
