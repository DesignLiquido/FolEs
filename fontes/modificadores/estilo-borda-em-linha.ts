import { estilos } from "./atributos/estilo";
import { valoresGlobais } from "./atributos/globais";
import { Modificador } from "./superclasse/modificador";

export class EstiloBordaEmLinha extends Modificador {
    constructor(valor: string, quantificador?: string) {
        super("estilo-borda-em-linha", "border-inline-style");

        if (!(valor in estilos && !(valor in valoresGlobais))) {
            throw new Error(`Propriedade 'estilo-borda-em-linha' com valor ${valor} inválido. Valores aceitos: 
            ${Object.keys(estilos).reduce((final, atual) => final += `, ${atual}`)},
            ${Object.keys(valoresGlobais).reduce((final, atual) => final += `, ${atual}`)}.`)
        }

        this.valor = valor;

        // Não recebe quantificador
        // this.quantificador = quantificador;
    }
}
