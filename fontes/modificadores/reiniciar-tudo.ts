import { valoresGlobais } from "./atributos/globais";
import { Modificador, PragmasModificador } from "./superclasse";

export class ReiniciarTudo extends Modificador {
    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador, valorVariavel: boolean = false) {
        super("reiniciar-tudo", "all", pragmas);

        // Aceita somente os valores globais
        if (!valorVariavel) {
            if (!(valor in valoresGlobais)) {
                throw new Error(`Propriedade 'reiniciar-tudo' com valor ${valor} inválido. Valores aceitos: 
                    ${Object.keys(valoresGlobais).reduce((final, atual) => final += `, ${atual}`)}.`)
            }
        }

        this.valor = valor;
    }
}
