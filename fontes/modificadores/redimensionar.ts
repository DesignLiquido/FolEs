import { listaDeValoresGlobais } from "./atributos/globais";
import { Modificador } from "./superclasse/modificador";

export class Redimensionar extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "nenhum": "none",
        "ambos": "both",
        "horizontal": "horizontal",
        "vertical": "vertical",
        "em-bloco": "block",
        "em-linha": "inline",
    }

    constructor(valor: string, quantificador?: string) {
        super("redimensionar", "resize");

        if (!(valor in this.valoresAceitos) &&
            !(valor in listaDeValoresGlobais)
        ) {
            throw new Error(`Propriedade 'redimensionar' com valor ${valor} inválido. Valores aceitos: 
            ${Object.keys(this.valoresAceitos).reduce((final, atual) => final += `, ${atual}`)},
            ${Object.keys(listaDeValoresGlobais).reduce((final, atual) => final += `, ${atual}`)}.`)
        }

        this.valor = valor;

        // Não recebe quantificador
        // this.quantificador = quantificador;
    }
}
