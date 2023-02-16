import { valoresGlobais } from "./atributos/globais";
import { valoresTemporais } from "./atributos/quantificadores";
import { Modificador } from "./superclasse/modificador";

export class AtrasoAnimacao extends Modificador {
    constructor(valor: string, quantificador?: string) {
        super(
            ["atraso-animacao", "atraso-animação"],
            "animation-delay"
        );

        if (Number.isNaN(parseInt(valor)) && !(valor in valoresGlobais)) {
            throw new Error(`Propriedade 'atraso-animação' com valor ${valor} inválido. Valor deve ser numérico ou um dos valores: 
            ${Object.keys(valoresGlobais).reduce((final, atual) => final += `, ${atual}`)}.`)
        }

        this.valor = valor;

        if (Number(parseInt(valor))) {
            if (!(quantificador in valoresTemporais) || quantificador === undefined) {
                throw new Error(`Propriedade 'atraso-animação' com quantificador inválido. Valores aceitos:
                ${Object.keys(valoresTemporais).reduce((final, atual) => final += `, ${atual}`)}.`);
            }

            this.quantificador = quantificador;
        }
    }
}
