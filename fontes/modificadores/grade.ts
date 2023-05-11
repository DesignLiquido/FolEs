import { valoresGlobais } from "./atributos/globais";
import { Modificador, PragmasModificador } from "./superclasse/modificador";

export class Grade extends Modificador {
    // Seletor de Atribuição Abreviada (Shorthand).
    // Pode receber de 1 a 6 valores.
    valoresAceitos: { [valorFoles: string]: string } = {
        "conteudo-maximo": "max-content",
        "conteúdo-máximo": "max-content",
        "conteudo-minimo": "min-content",
        "conteúdo-mínimo": "min-content",
        "auto": "auto",
        "linha": "row",
        "coluna": "column",
        "denso": "dense",
    }
    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador) {
        super("grade", "grid");

        // OBS.: Também aceita receber os valores válidos para os seletores: 
        // 1. grid-template-areas
        // 2. grid-template-column
        // 3. grid-template-rows

        // Também aceita as funções minmax() e repeat()

        // TODO: Adicionar casos faltantes.
        if (!(valor in this.valoresAceitos) &&
            !(valor in valoresGlobais)
        ) {
            throw new Error(`Propriedade 'grade' com valor ${valor} inválido. Valores aceitos: 
            ${Object.keys(this.valoresAceitos).reduce((final, atual) => final += `, ${atual}`)},
            ${Object.keys(valoresGlobais).reduce((final, atual) => final += `, ${atual}`)}.`)
        }

        this.valor = valor;

        // Não recebe quantificador
        // this.quantificador = quantificador;
    }
}
