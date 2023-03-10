import { valoresGlobais } from "./atributos/globais";
import { Modificador } from "./superclasse/modificador";

export class Contem extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "nenhum": "none",
        "estrito": "strict",
        "modo-conteudo": "content",
        "modo-conteúdo": "content",
        "tamanho": "size",
        "tamanho-alinhado": "inline-size",
        "layout": "layout",
        "estilo": "style",
        "pintar": "paint",
    }

    constructor(valor: string, quantificador?: string) {
        super(["contem", "contém"], "contain");

        // OBS.: Também pode receber múltiplos valores.
        // A lógica abaixo cobre somente o recebimento de UM único valor.
        // TODO: Adaptar lógica para cobrir os demais casos. 
        if (!(valor in this.valoresAceitos) &&
            !(valor in valoresGlobais)
        ) {
            throw new Error(`Propriedade 'contém' com valor ${valor} inválido. Valores aceitos: 
            ${Object.keys(this.valoresAceitos).reduce((final, atual) => final += `, ${atual}`)},
            ${Object.keys(valoresGlobais).reduce((final, atual) => final += `, ${atual}`)}.`);
        }

        this.valor = valor;

        // Não recebe quantificador
        // this.quantificador = quantificador;
    }
}
