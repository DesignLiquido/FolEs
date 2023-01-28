import { ListaDeValoresGlobais } from "./atributos/globais";
import { Modificador } from "./superclasse/modificador";

export class ReiniciarTudo extends Modificador {
    constructor(valor: string, quantificador?: string) {
        super("reiniciar-tudo", "all");
        
        // Aceita somente os valores globais
        if (!(valor in ListaDeValoresGlobais)) {
            throw new Error(`Propriedade 'reiniciar-tudo' com valor ${valor} inválido. Valores aceitos: 
            ${Object.keys(ListaDeValoresGlobais).reduce((final, atual) => final += `, ${atual}`)}.`)
        }

        this.valor = valor;

        // Não recebe quantificador
        // this.quantificador = quantificador;
    }
}
