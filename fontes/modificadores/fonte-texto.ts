import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarAtribuicaoAbreviada } from "./validacoes/atribuicao-abreviada";
import { validarValorFonte } from "./validacoes/fonte";

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
        "serifa": "serif",
        "sem-serifa": "sans-serif",
        "monoespaço": "monospace",
        "monoespaco": "monospace",
        "cursiva": "cursive",
        "fantasia": "fantasy",
        "sistema-iu": "system-ui",
        "iu-serifa": "ui-serif",
        "iu-sem-serifa": "ui-sans-serif",
        "iu-monoespaço": "ui-monospace",
        "iu-monoespaco": "ui-monospace",
        "iu-arredondada": "ui-rounded",
        "matematica": "math",
        "matemática": "math",
        "serifa-chinesa": "fangsong",
    };

    static nomeCss: string = "font-family";

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super("fonte-texto", FonteTexto.nomeCss, pragmas);

        if (!variavel) {
            if (valores.length > 1) {
                validarAtribuicaoAbreviada(
                    "fonte",
                    "fonte-texto",
                    valores,
                    this.valoresAceitos,
                );
                // TODO: Recebe validacaoPersonalizada como true
            } else {
                validarValorFonte(
                    "fonte-texto",
                    valores,
                    this.valoresAceitos
                );
            }
        }

        this.valores = valores;
        this.variavel = variavel;
    }
}
