import { ListaDeEstilos } from "./atributos/estilo";
import { ListaDeValoresGlobais } from "./atributos/globais";
import { Modificador } from "./superclasse/modificador";

export class EstiloFimBordaEmBloco extends Modificador {
    constructor(valor: string, quantificador?: string) {
        super("estilo-fim-borda-em-bloco", "border-block-end-style");
        
        if (!(valor in ListaDeEstilos) && !(valor in ListaDeValoresGlobais)) {
            throw new Error(`Propriedade 'estilo-fim-borda-em-bloco' com valor ${valor} inválido. Valores aceitos: ${Object.keys(ListaDeEstilos).reduce((final, atual) => final += `, ${atual}`)},
            ${Object.keys(ListaDeValoresGlobais).reduce((final, atual) => final += `, ${atual}`)}.`)
        }

        this.valor = valor;

        // Não recebe quantificador
        // this.quantificador = quantificador;
    }
}
