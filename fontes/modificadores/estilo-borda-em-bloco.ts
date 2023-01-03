import { ListaDeEstilos } from "./atributos/estilo";
import { ListaDeValoresGlobais } from "./atributos/globais";
import { Modificador } from "./superclasse/modificador";

export class EstiloBordaEmBloco extends Modificador {
    constructor(valor: string, quantificador?: string) {
        super("estilo-borda-em-bloco", "border-block-style");

        if (!(valor in ListaDeEstilos && !(valor in ListaDeValoresGlobais))) {
            throw new Error(`Propriedade 'estilo-borda-em-bloco' com valor ${valor} inválido. Valores aceitos: 
            ${Object.keys(ListaDeEstilos).reduce((final, atual) => final += `, ${atual}`)},
            ${Object.keys(ListaDeValoresGlobais).reduce((final, atual) => final += `, ${atual}`)}.`)
        }

        this.valor = valor;

        // Não recebe quantificador
        // this.quantificador = quantificador;
    }
}
