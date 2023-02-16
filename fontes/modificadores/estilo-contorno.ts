import { estilos } from "./atributos/estilo";
import { valoresGlobais } from "./atributos/globais";
import { Modificador } from "./superclasse/modificador";

export class EstiloContorno extends Modificador {
    constructor(valor: string, quantificador?: string) {
        super("estilo-contorno", "outline-style");

        // Pode receber 'auto' além das opções da Lista de Estilos
        if (!(valor in estilos) && valor !== 'auto' && !(valor in valoresGlobais)) {
            throw new Error(`Propriedade 'estilo-contorno' com valor ${valor} inválido. Valores aceitos: 
            auto, ${Object.keys(estilos).reduce((final, atual) => final += `, ${atual}`)},
            ${Object.keys(valoresGlobais).reduce((final, atual) => final += `, ${atual}`)}.`)
        }

        this.valor = valor;

        // Não recebe quantificador
        // this.quantificador = quantificador;
    }
}
