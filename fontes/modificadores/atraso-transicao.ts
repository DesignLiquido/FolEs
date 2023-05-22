import { valoresGlobais } from "./atributos/globais";
import { valoresTemporais } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";

export class AtrasoTransicao extends Modificador {
    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador) {
        super(
            ["atraso-transicao", "atraso-transição"],
            "transition-delay"
        );
        
        // Também aceita dois valores separados por vírgula
        // Ex.: atraso-transição: 2s, 4ms;

        // TODO: Adaptar lógica para cobrir todos os casos
        if (Number.isNaN(parseInt(valor)) && 
            !(valor in valoresGlobais)
        ) {
            throw new Error(`Propriedade 'atraso-transição' com valor ${valor} inválido. Valor deve ser numérico ou um dos valores: 
            ${Object.keys(valoresGlobais).reduce((final, atual) => final += `, ${atual}`)}.`)
        }

        this.valor = valor;

        if (Number(parseInt(valor))) {
            if (!(quantificador in valoresTemporais) || quantificador === undefined) {
                throw new Error(`Propriedade 'atraso-transição' com quantificador inválido. Valores aceitos:
                ${Object.keys(valoresTemporais).reduce((final, atual) => final += `, ${atual}`)}.`);
            }

            this.quantificador = quantificador;
        }
    }
}
