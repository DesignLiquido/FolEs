import { valoresGlobais } from "./atributos/globais";
import { Modificador } from "./superclasse/modificador";

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

    constructor(valor: string, quantificador?: string) {
        super(["aparencia", "aparência"], "appearance");

        if (!(valor in this.valoresAceitos) &&
            !(valor in this.valoresEquivalentes) &&
            !(valor in valoresGlobais)) {
            
            throw new Error(`Propriedade 'aparência' com valor ${valor} inválido. Valores aceitos: 
            ${Object.keys(this.valoresAceitos).reduce((final, atual) => final += `, ${atual}`)},
            ${Object.keys(this.valoresEquivalentes).reduce((final, atual) => final += `, ${atual}`)},
            ${Object.keys(valoresGlobais).reduce((final, atual) => final += `, ${atual}`)}.`);
        }

        // Se for um equivalente, o valor atribuído é 'auto';
        // Para os demais casos aceitos, o valor é o próprio parâmetro. 
        if(valor in this.valoresEquivalentes) {
            this.valor = 'auto';
        } else {
            this.valor = valor;
        }

        // Quantificador não é usado aqui.
        // this.quantificador = quantificador;
    }
}
