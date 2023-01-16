import { ListaDeValoresGlobais } from "./atributos/globais";
import { Modificador } from "./superclasse/modificador";

export class Fluxo extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "nenhum": "none",
        "esquerda": "left",
        "direita": "right",
        "ambos": "both",
        "inicio-em-linha": "inline-start",
        "início-em-linha": "inline-start",
        "fim-em-linha": "inline-end",
    }

    constructor(valor: string, quantificador?: string) {
        super("fluxo", "clear");
        
        if (!(valor in this.valoresAceitos) &&
            !(valor in ListaDeValoresGlobais)) {
            throw new Error(`Propriedade 'fluxo' com valor ${valor} inválido. Valores aceitos: 
            ${Object.keys(this.valoresAceitos).reduce((final, atual) => final += `, ${atual}`)},
            ${Object.keys(ListaDeValoresGlobais).reduce((final, atual) => final += `, ${atual}`)}.`);
        }

        this.valor = valor;

        // Quantificador não é usado aqui.
        // this.quantificador = quantificador;
    }
}
