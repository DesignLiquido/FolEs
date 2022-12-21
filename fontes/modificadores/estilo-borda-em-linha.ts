import { ListaDeEstilos } from "./atributos/estilo";
import { Modificador } from "./superclasse/modificador";

export class EstiloBordaEmLinha extends Modificador {
    constructor(valor: string, quantificador?: string) {
        super("estilo-borda-em-linha", "border-inline-style");

        if (!(valor in ListaDeEstilos)) {
            throw new Error(`Propriedade 'estilo-borda-em-linha' com valor ${valor} inválido. Valores aceitos: ${Object.keys(ListaDeEstilos).reduce((final, atual) => final += `, ${atual}`)}.`)
        }

        this.valor = valor;

        // Não recebe quantificador
        // this.quantificador = quantificador;
    }
}
