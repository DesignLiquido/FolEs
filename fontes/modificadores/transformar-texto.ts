import { ListaDeValoresGlobais } from "./atributos/globais";
import { Modificador } from "./superclasse/modificador";

export class TransformarTexto extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "nenhum": "none",
        "capitalizar": "capitalize",
        "maiusculo": "uppercase",
        "maiúsculo": "uppercase",
        "minusculo": "lowercase",
        "minúsculo": "lowercase",
        "largura-cheia": "full-width",
        "tamanho-completo-kana": "full-size-kana",
    }

    constructor(valor: string, quantificador?: string) {
        super("transformar-texto", "text-transform");

        if (!(valor in this.valoresAceitos) &&
            !(valor in ListaDeValoresGlobais)
        ) {
            throw new Error(`Propriedade 'transformar-texto' com valor ${valor} inválido. Valores aceitos: 
            ${Object.keys(this.valoresAceitos).reduce((final, atual) => final += `, ${atual}`)},
            ${Object.keys(ListaDeValoresGlobais).reduce((final, atual) => final += `, ${atual}`)}.`)
        }

        this.valor = valor;

        // Não recebe quantificador
        // this.quantificador = quantificador;
    }
}
