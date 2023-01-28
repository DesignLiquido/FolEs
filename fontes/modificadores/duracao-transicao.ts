import { ListaDeValoresGlobais } from "./atributos/globais";
import { ListaDeValoresTempo } from "./atributos/quantificadores";
import { Modificador } from "./superclasse/modificador";

export class DuracaoTransicao extends Modificador {
    constructor(valor: string, quantificador?: string) {
        super(
            ["duracao-transicao", "duração-transição"],
            "transition-duration"
        );

        // OBS.: Também aceita receber múltiplos valores. 
        // Ex.: duração-transição: 10s, 15s, 230ms;
        
        // A lógica abaixo cobre somente o recebimento de UM dos valores aceitos listados. 
        // TODO: Adaptar lógica para cobrir os demais casos. 

        if (Number.isNaN(parseInt(valor)) &&
            !(valor in ListaDeValoresGlobais)
        ) {
            throw new Error(`Propriedade 'duração-transição' com valor ${valor} inválido. Valor deve ser numérico ou um dos valores: 
            ${Object.keys(ListaDeValoresGlobais).reduce((final, atual) => final += `, ${atual}`)}.`)
        }

        this.valor = valor;

        if (Number(parseInt(valor))) {
            if (!(quantificador in ListaDeValoresTempo) || quantificador === undefined) {
                throw new Error(`Propriedade 'duração-transição' com quantificador inválido. Valores aceitos:
                ${Object.keys(ListaDeValoresTempo).reduce((final, atual) => final += `, ${atual}`)}.`);
            }

            this.quantificador = quantificador;
        }
    }
}
