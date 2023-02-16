import { listaDeValoresGlobais } from "./atributos/globais";
import { ListaDeValoresTempo } from "./atributos/quantificadores";
import { Modificador } from "./superclasse/modificador";

export class DuracaoAnimacao extends Modificador {
    constructor(valor: string, quantificador?: string) {
        super(
            ["duracao-animacao", "duração-animação"],
            "animation-duration"
        );

        if (Number.isNaN(parseInt(valor)) && !(valor in listaDeValoresGlobais)) {
            throw new Error(`Propriedade 'duração-animação' com valor ${valor} inválido. Valor deve ser um número ou um dos valores: 
            ${Object.keys(listaDeValoresGlobais).reduce((final, atual) => final += `, ${atual}`)}.`)
        }

        this.valor = valor;

        if (Number(parseInt(valor))) {
            if (!(quantificador in ListaDeValoresTempo) || quantificador === undefined) {
                throw new Error(`Propriedade 'duração-animação' com quantificador inválido. Valores aceitos: 
                ${Object.keys(ListaDeValoresTempo).reduce((final, atual) => final += `, ${atual}`)}.`);
            }

            this.quantificador = quantificador;
        }
    }
}
