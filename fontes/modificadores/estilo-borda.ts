import { estilos } from "./atributos/estilo";
import { valoresGlobais } from "./atributos/globais";
import { Modificador, PragmasModificador } from "./superclasse/modificador";

export class EstiloBorda extends Modificador {
    // Seletor de Atribuição Abreviada (Shorthand).
    // Pode receber de 1 a 4 valores.

    constructor(valor: string, quantificador: string) {
        super("estilo-borda", "border-style");

        if (!(valor in estilos) &&
            !(valor in valoresGlobais)) {
            throw new Error(`Propriedade 'estilo-borda' com valor ${valor} inválido. Valores aceitos: 
        ${Object.keys(estilos).reduce((final, atual) => final += `, ${atual}`)},
        ${Object.keys(valoresGlobais).reduce((final, atual) => final += `, ${atual}`)}.`);
        }

        this.valor = valor;

        // Não recebe quantificador
        // this.quantificador = quantificador;
    }
}
