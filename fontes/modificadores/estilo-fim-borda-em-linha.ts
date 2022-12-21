import { ListaDeEstilos } from "./atributos/estilo";
import { Modificador } from "./superclasse/modificador";

export class EstiloFimBordaEmLinha extends Modificador {
    constructor(valor: string, quantificador?: string) {
        super("estilo-fim-borda-em-linha", "border-inline-end-style");

        if (!(valor in ListaDeEstilos)) {
            throw new Error(`Propriedade 'estilo-fim-borda-em-linha' com valor ${valor} inválido. Valores aceitos: ${Object.keys(ListaDeEstilos).reduce((final, atual) => final += `, ${atual}`)}.`)
        }

        this.valor = valor;

        // Não recebe quantificador
        // this.quantificador = quantificador;
    }
}
