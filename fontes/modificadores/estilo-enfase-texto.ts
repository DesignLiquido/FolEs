import { ListaDeValoresGlobais } from "./atributos/globais";
import { Modificador } from "./superclasse/modificador";

export class EstiloEnfaseTexto extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "nenhum": "none",
        "preenchido": "filled",
        "abrir": "open",
        "ponto": "dot",
        "circulo": "circle",
        "círculo": "circle",
        "circulo-duplo": "double-circle",
        "círculo-duplo": "double-circle",
        "triangulo": "triangle",
        "triângulo": "triangle",
        "sesamo": "sesame",
        "sésamo": "sesame",
    }

    constructor(valor: string, quantificador?: string) {
        super(
            ["estilo-enfase-texto", "estilo-ênfase-texto"],
            "text-emphasis-style"
        );

        // OBS.: O seletor também aceita receber STRINGS, desde que essas contenham UM caractere.
        
        // Ex.1: estilo-ênfase-texto: "x";
        // Ex.2: estilo-ênfase-texto: "\25B2"; // ESSE CASO É PERMITIDO.
        // Ex.3: estilo-ênfase-texto: "foo"; // ESSE CASO NÃO É PERMITIDO! 
        
        // OBS.2: Dada a complexidade do Exemplo 2, uma simples condicional avaliando se a string
        // possui 1 caractere não seria suficiente. A própria documentação não é muito clara sobre esse exemplo.
        // https://developer.mozilla.org/en-US/docs/Web/CSS/text-emphasis-style 

        // A lógica abaixo cobre somente o recebimento de UM dos valores aceitos listados. 
        // TODO: Adaptar lógica para cobrir os demais casos.

        if (!(valor in this.valoresAceitos &&
            !(valor in ListaDeValoresGlobais))) {
            throw new Error(`Propriedade 'estilo-ênfase-texto' com valor ${valor} inválido. Valores aceitos: 
            ${Object.keys(this.valoresAceitos).reduce((final, atual) => final += `, ${atual}`)},
            ${Object.keys(ListaDeValoresGlobais).reduce((final, atual) => final += `, ${atual}`)}.`);
        }

        this.valor = valor;

        // Não recebe quantificador
        // this.quantificador = quantificador;
    }
}
