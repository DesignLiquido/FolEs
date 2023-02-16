import { listaDeValoresGlobais } from "./atributos/globais";
import { ListaDePosiçõesBasicas } from "./atributos/posição";
import { Modificador } from "./superclasse/modificador";

export class AlinharUltimoItem extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "justificar": "justify",
        "auto": "auto",
    }

    constructor(valor: string, quantificador?: string) {
        super(
            ["alinhar-ultimo-item", "alinhar-último-item"], 
            "text-align-last"
        );

        if (!(valor in this.valoresAceitos) &&
            !(valor in ListaDePosiçõesBasicas) &&
            !(valor in listaDeValoresGlobais)
        ) {
            throw new Error(`Valor ${valor} inválido para 'alinhar-último-item'. Valores aceitos:
            ${Object.keys(this.valoresAceitos).reduce((final, atual) => final += `, ${atual}`)}, 
            ${Object.keys(ListaDePosiçõesBasicas).reduce((final, atual) => final += `, ${atual}`)},
            ${Object.keys(listaDeValoresGlobais).reduce((final, atual) => final += `, ${atual}`)}.`);
        }

        this.valor = valor;

        // Não recebe quantificador
        // this.quantificador = quantificador;
    }
}
