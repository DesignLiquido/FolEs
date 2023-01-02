import { ListaDeValoresGlobais } from "./atributos/globais";
import { Modificador } from "./superclasse/modificador";

export class AtrasoAnimacao extends Modificador {
    constructor(valor: string, quantificador?: string) {
        super(
            ["atraso-animacao", "atraso-animação"],
            "animation-delay"
        );

        if (Number.isNaN(parseInt(valor)) && !(valor in ListaDeValoresGlobais)) {
            throw new Error(`Propriedade 'atraso-animação' com valor ${valor} inválido. Valor deve ser um número ou um dos valores: ${Object.keys(ListaDeValoresGlobais).reduce((final, atual) => final += `, ${atual}`)}.`)
        }

        this.valor = valor;

        if (Number(parseInt(valor))) {
            if (!['s', 'ms'].includes(quantificador) || quantificador === undefined) {
                throw new Error(`Propriedade 'atraso-animação' com quantificador ${quantificador} inválido. Valores aceitos: 's', 'ms'`);
            }

            this.quantificador = quantificador;
        }
    }
}
