import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorFonte } from "./validacoes/fonte";
import { validarValorString } from "./validacoes/string";

export class FonteTexto extends Modificador {
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
    };

    constructor(
        valor: string,
        quantificador?: string,
        pragmas?: PragmasModificador,
        valorVariavel: boolean = false,
    ) {
        super("fonte-texto", "font-family", pragmas);

        const valorString = validarValorString(valor);
        if (valorString) valor = valor.replace(/^["']|["']$/g, '');
        
        if (!valorVariavel) {
            if (valor.includes(",")) {
                const separarValores = valor.split(", ");
                
                separarValores.forEach((valorIndividual) => {
                    validarValorFonte("fonte-texto", valorIndividual, this.valoresAceitos);
                });
            } else {
                validarValorFonte("fonte-texto", valor, this.valoresAceitos);
            }
        }

        if (valorString) valor = `"${valor}"`;
        this.valor = valor;
    }
}
