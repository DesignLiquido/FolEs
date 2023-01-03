import { ListaDeEstilos } from "./atributos/estilo";
import { ListaDeValoresGlobais } from "./atributos/globais";
import { Modificador } from "./superclasse/modificador";

export class RegrasEstiloColuna extends Modificador {
    constructor(valor: string, quantificador?: string) {
        super("regras-estilo-coluna", "column-rules-style");

        if (!(valor in ListaDeEstilos && !(valor in ListaDeValoresGlobais))) {
            throw new Error(`Propriedade 'regras-estilo-coluna' com valor ${valor} inválido. Valores aceitos: 
            ${Object.keys(ListaDeEstilos).reduce((final, atual) => final += `, ${atual}`)},
            ${Object.keys(ListaDeValoresGlobais).reduce((final, atual) => final += `, ${atual}`)}.`)
        }

        this.valor = valor;

        // Não recebe quantificador
        // this.quantificador = quantificador;
    }
}
