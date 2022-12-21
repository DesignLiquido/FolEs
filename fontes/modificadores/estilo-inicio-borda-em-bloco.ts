import { ListaDeEstilos } from "./atributos/estilo";
import { Modificador } from "./superclasse/modificador";

export class EstiloInicioBordaEmBloco extends Modificador {
    constructor(valor: string, quantificador?: string) {
        super(
            ["estilo-inicio-borda-em-bloco", "estilo-início-borda-em-bloco"], 
            "border-block-start-style"
        );

        if (!(valor in ListaDeEstilos)) {
            throw new Error(`Propriedade 'estilo-inicio-borda-em-bloco' com valor ${valor} inválido. Valores aceitos: ${Object.keys(ListaDeEstilos).reduce((final, atual) => final += `, ${atual}`)}.`)
        }

        this.valor = valor;

        // Não recebe quantificador
        // this.quantificador = quantificador;
    }
}
