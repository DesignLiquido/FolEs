import { ListaDeEstilos } from "./atributos/estilo";
import { Modificador } from "./superclasse/modificador";

export class RegrasEstiloColuna extends Modificador {
    constructor(valor: string, quantificador?: string) {
        super("regras-estilo-coluna", "column-rules-style");

        if (!(valor in ListaDeEstilos)) {
            throw new Error(`Propriedade 'regras-estilo-coluna' com valor ${valor} inválido. Valores aceitos: ${Object.keys(ListaDeEstilos).reduce((final, atual) => final += `, ${atual}`)}.`)
        }

        this.valor = valor;

        // Não recebe quantificador
        // this.quantificador = quantificador;
    }
}
