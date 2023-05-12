import { estilos } from "./atributos/estilo";
import { valoresGlobais } from "./atributos/globais";
import { Modificador, PragmasModificador } from "./superclasse";

export class EstiloBordaSuperior extends Modificador {
    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador) {
        super("estilo-borda-superior", "border-top-style");

        if (!(valor in estilos && !(valor in valoresGlobais))) {
            throw new Error(`Propriedade 'estilo-borda-superior' com valor ${valor} inválido. Valores aceitos: 
            ${Object.keys(estilos).reduce((final, atual) => final += `, ${atual}`)},
            ${Object.keys(valoresGlobais).reduce((final, atual) => final += `, ${atual}`)}.`)
        }

        this.valor = valor;

        // Não recebe quantificador
        // this.quantificador = quantificador;
    }
}
