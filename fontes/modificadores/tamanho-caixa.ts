import { ListaDeValoresGlobais } from "./atributos/globais";
import { Modificador } from "./superclasse/modificador";

export class TamanhoCaixa extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "conteudo": "content-box",
        "conteúdo": "content-box",
        "borda": "border-box",
    }

    constructor(valor: string, quantificador?: string) {
        super("tamanho-caixa", "box-sizing");

        if (!(valor in this.valoresAceitos) &&
            !(valor in ListaDeValoresGlobais)
        ) {
            throw new Error(`Propriedade 'tamanho-caixa' com valor ${valor} inválido. Valores aceitos: 
            ${Object.keys(this.valoresAceitos).reduce((final, atual) => final += `, ${atual}`)},
            ${Object.keys(ListaDeValoresGlobais).reduce((final, atual) => final += `, ${atual}`)}.`)
        }

        this.valor = valor;

        // Não recebe quantificador
        // this.quantificador = quantificador;      
    }
}
