import { ListaDeEstilos } from "./atributos/estilo";
import { Modificador } from "./superclasse/modificador";

export class EstiloBordaEsquerda extends Modificador {
    constructor(valor: string, quantificador?: string) {
        super("estilo-borda-esquerda", "border-left-style");

        if (!(valor in ListaDeEstilos)) {
            throw new Error(`Propriedade 'estilo-borda-esquerda' com valor ${valor} inválido. Valores aceitos: ${Object.keys(ListaDeEstilos).reduce((final, atual) => final += `, ${atual}`)}.`)
        }

        this.valor = valor;

        // Não recebe quantificador
        // this.quantificador = quantificador;
    }
}
