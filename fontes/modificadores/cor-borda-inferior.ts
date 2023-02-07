import { ListaDeCores } from "./atributos/cores";
import { ListaDeValoresGlobais } from "./atributos/globais";
import { Modificador } from "./superclasse/modificador";

export class CorBordaInferior extends Modificador {
    constructor(valor: string, quantificador?: string) {
        super("cor-borda-inferior", "border-bottom-color");

        // O valor é recebido como objeto, o que impossibilita de utilizar a função includes().
        // A constante abaixo é criada para não ocorrer esse problema.
        const valorString = valor.toString();

        if (!(valor in ListaDeCores) &&
            !(valor in ListaDeValoresGlobais) &&
            !(valorString.includes('rgb')) &&
            !(valorString.includes('rgba')) &&
            !(valorString.includes('hsl')) &&
            !(valorString.startsWith('#') && valorString.length <= 6) 
        ) {
            throw new Error(`Propriedade 'cor-borda-inferior' com valor ${valor} inválido. Valores aceitos:
            rgb, rgba, hsl, #HEX,
            ${Object.keys(ListaDeCores).reduce((final, atual) => final += `, ${atual}`)},
            ${Object.keys(ListaDeValoresGlobais).reduce((final, atual) => final += `, ${atual}`)}.`)
        }

        this.valor = valor;

        // Não recebe quantificador
        // this.quantificador = quantificador;
    }
}
