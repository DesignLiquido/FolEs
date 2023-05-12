import { estilos } from "./atributos/estilo";
import { valoresGlobais } from "./atributos/globais";
import { Modificador, PragmasModificador } from "./superclasse";

export class EstiloBordaEmLinha extends Modificador {
    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador) {
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
