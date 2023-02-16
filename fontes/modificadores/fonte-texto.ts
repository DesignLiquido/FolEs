import { listaDeValoresGlobais } from "./atributos/globais";
import { Modificador } from "./superclasse/modificador";

export class FonteTexto extends Modificador {
    // OBS.: Optei inicialmente por não traduzir o nome das fontes genéricas. @vitor
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
    }

    constructor(valor: string, quantificador?: string) {
        super("fonte-texto", "font-family");

        // OBS.: A lista de valores aceitos inclui todas as FONTES GENÉRICAS (<generic-name>).
        // Porém, o modificador também pode receber DOIS PARÂMETROS,
        // sendo o PRIMEIRO o nome de qualquer fonte existente (<family-name>).

        // Ex.: fonte-texto: "Gill Sans Extrabold", sans-serif;
        
        // OBS.2: Fontes com mais de uma palavra devem ser passadas como string (entre "");
        // OBS.3: O segundo parâmetro é obrigatório para o caso da primeira fonte não estar disponível.

        // A lógica abaixo cobre somente o recebimento dos valores genéricos.
        // TODO: Adaptar lógica para cobrir o caso de receber 2 parâmetros. 

        if (!(valor in this.valoresAceitos) &&
            !(valor in listaDeValoresGlobais)) {
            throw new Error(`Propriedade 'fonte-texto' com valor ${valor} inválido. Valores aceitos: 
            ${Object.keys(this.valoresAceitos).reduce((final, atual) => final += `, ${atual}`)},
            ${Object.keys(listaDeValoresGlobais).reduce((final, atual) => final += `, ${atual}`)}.`);
        }

        this.valor = valor;

        // Não recebe quantificador
        // this.quantificador = quantificador;
    }
}
