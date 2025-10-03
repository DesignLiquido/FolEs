import { Valor, ValorQualitativo } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class Aparencia extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        nenhum: "none",
        auto: "auto",
        "botao-menu": "menulist-button",
        "botão-menu": "menulist-button",
        "campo-texto": "textfield",
    };

    // Os valores a seguir são equivalentes a 'auto'
    // https://developer.mozilla.org/en-US/docs/Web/CSS/appearance
    valoresEquivalentes: { [valorFoles: string]: string } = {
        botao: "button",
        botão: "button",
        "caixa-selecao": "checkbox",
        "caixa-seleção": "checkbox",
        "caixa-listagem": "listbox",
        "lista-menu": "menulist",
        metro: "meter",
        "barra-progresso": "progress-bar",
        "apertar-botao": "push-button",
        "apertar-botão": "push-button",
        radio: "radio",
        rádio: "radio",
        "campo-busca": "searchfield",
        "deslizar-horizontal": "slider-horizontal",
        "botao-quadrado": "square-button",
        "botão-quadrado": "square-button",
        "area-texto": "textarea",
        "área-texto": "textarea",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(["aparencia", "aparência"], "appearance", pragmas);

        // Se for um valor equivalente, o valor atribuído é 'auto';
        if (valores[0] instanceof ValorQualitativo && valores[0].qualitativo in this.valoresEquivalentes) {
            valores[0].qualitativo = "auto";
        }

        if (!variavel) validarValores("aparência", valores, this.valoresAceitos, null);

        this.valores = valores;
        this.variavel = variavel;
    }
}
