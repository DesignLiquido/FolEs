import { listaDeValoresGlobais } from "./atributos/globais";
import { Modificador } from "./superclasse/modificador";

export class FormaExterna extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "nenhuma": "none",
        "margem-caixa": "margin-box",
        "conteudo-caixa": "content-box",
        "conteúdo-caixa": "content-box",
        "borda-caixa": "border-box",
        "preenchimento-caixa": "padding-box",
    }

    constructor(valor: string, quantificador?: string) {
        super("forma-externa", "shape-outside");

        if (!(valor in this.valoresAceitos) &&
            !(valor in listaDeValoresGlobais)
        ) {
            throw new Error(`Propriedade 'forma-externa' com valor ${valor} inválido. Valores aceitos: 
            ${Object.keys(this.valoresAceitos).reduce((final, atual) => final += `, ${atual}`)},
            ${Object.keys(listaDeValoresGlobais).reduce((final, atual) => final += `, ${atual}`)}.`)
        }

        this.valor = valor;

        // Não recebe quantificador
        // this.quantificador = quantificador;
    }
}
