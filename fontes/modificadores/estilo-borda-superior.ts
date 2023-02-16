import { listaDeEstilos } from "./atributos/estilo";
import { valoresGlobais } from "./atributos/globais";
import { Modificador } from "./superclasse/modificador";

export class EstiloBordaSuperior extends Modificador {
    constructor(valor: string, quantificador?: string) {
        super("estilo-borda-superior", "border-top-style");

        if (!(valor in listaDeEstilos && !(valor in valoresGlobais))) {
            throw new Error(`Propriedade 'estilo-borda-superior' com valor ${valor} inválido. Valores aceitos: 
            ${Object.keys(listaDeEstilos).reduce((final, atual) => final += `, ${atual}`)},
            ${Object.keys(valoresGlobais).reduce((final, atual) => final += `, ${atual}`)}.`)
        }

        this.valor = valor;

        // Não recebe quantificador
        // this.quantificador = quantificador;
    }
}
