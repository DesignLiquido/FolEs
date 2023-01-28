import { ListaDeValoresGlobais } from "./atributos/globais";
import { ListaDeValoresTempo } from "./atributos/quantificadores";
import { Modificador } from "./superclasse/modificador";

export class AtrasoAnimacao extends Modificador {
    constructor(valor: string, quantificador?: string) {
        super(
            ["atraso-animacao", "atraso-animação"],
            "animation-delay"
        );

        if (Number.isNaN(parseInt(valor)) && !(valor in ListaDeValoresGlobais)) {
            throw new Error(`Propriedade 'atraso-animação' com valor ${valor} inválido. Valor deve ser numérico ou um dos valores: 
            ${Object.keys(ListaDeValoresGlobais).reduce((final, atual) => final += `, ${atual}`)}.`)
        }

        this.valor = valor;

        if (Number(parseInt(valor))) {
            if (!(quantificador in ListaDeValoresTempo) || quantificador === undefined) {
                throw new Error(`Propriedade 'atraso-animação' com quantificador inválido. Valores aceitos:
                ${Object.keys(ListaDeValoresTempo).reduce((final, atual) => final += `, ${atual}`)}.`);
            }

            this.quantificador = quantificador;
        }
    }
}
