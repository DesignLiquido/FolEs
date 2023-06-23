import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class Aparencia extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "nenhum": "none",
        "auto": "auto",
        "botao-menu": "menulist-button",
        "botão-menu": "menulist-button",
        "campo-texto": "textfield",
    }

    // Os valores a seguir são equivalentes a 'auto'
    // https://developer.mozilla.org/en-US/docs/Web/CSS/appearance
    valoresEquivalentes: { [valorFoles: string]: string } = {
        "botao": "button",
        "botão": "button",
        "caixa-selecao": "checkbox",
        "caixa-seleção": "checkbox",
        "caixa-listagem": "listbox",
        "lista-menu": "menulist",
        "metro": "meter",
        "barra-progresso": "progress-bar",
        "apertar-botao": "push-button",
        "apertar-botão": "push-button",
        "radio": "radio",
        "rádio": "radio",
        "campo-busca": "searchfield",
        "deslizar-horizontal": "slider-horizontal",
        "botao-quadrado": "square-button",
        "botão-quadrado": "square-button",
        "area-texto": "textarea",
        "área-texto": "textarea",
    }

    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador) {
        super(["aparencia", "aparência"], "appearance");

        // Se for um equivalente, o valor atribuído é 'auto';
        valor in this.valoresEquivalentes ? valor = 'auto' : null

        validarValores('aparência', valor, this.valoresAceitos);

        this.valor = valor;

        // Quantificador não é usado aqui.
        // this.quantificador = quantificador;
    }
}
