import { listaDeEstilos } from "./atributos/estilo";
import { listaDeValoresGlobais } from "./atributos/globais";
import { Modificador } from "./superclasse/modificador";

export class EstiloBordaInferior extends Modificador {
    constructor(valor: string, quantificador?: string) {
        super("estilo-borda-inferior", "border-bottom-style");

        if (!(valor in listaDeEstilos && !(valor in listaDeValoresGlobais))) {
            throw new Error(`Propriedade 'estilo-borda-inferior' com valor ${valor} inválido. Valores aceitos: 
            ${Object.keys(listaDeEstilos).reduce((final, atual) => final += `, ${atual}`)},
            ${Object.keys(listaDeValoresGlobais).reduce((final, atual) => final += `, ${atual}`)}.`)
        }

        this.valor = valor;

        // Não recebe quantificador
        // this.quantificador = quantificador;
    }
}
