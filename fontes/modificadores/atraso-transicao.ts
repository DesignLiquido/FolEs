import { AtrasoAnimacao } from "./atraso-animacao";
import { ListaDeValoresGlobais } from "./atributos/globais";
import { ListaDeValoresTempo } from "./atributos/quantificadores";
import { Modificador } from "./superclasse/modificador";

export class AtrasoTransicao extends Modificador {
    constructor(valor: string, quantificador?: string) {
        super(
            ["atraso-transicao", "atraso-transição"],
            "transition-delay"
        );

        if (Number.isNaN(parseInt(valor)) && 
            !(valor in ListaDeValoresGlobais)
        ) {
            throw new Error(`Propriedade 'atraso-transição' com valor ${valor} inválido. Valor deve ser numérico ou um dos valores: 
            ${Object.keys(ListaDeValoresGlobais).reduce((final, atual) => final += `, ${atual}`)}.`)
        }

        this.valor = valor;

        if (Number(parseInt(valor))) {
            if (!(quantificador in ListaDeValoresTempo) || quantificador === undefined) {
                throw new Error(`Propriedade 'atraso-transição' com quantificador inválido. Valores aceitos:
                ${Object.keys(ListaDeValoresTempo).reduce((final, atual) => final += `, ${atual}`)}.`);
            }

            this.quantificador = quantificador;
        }
    }
}
