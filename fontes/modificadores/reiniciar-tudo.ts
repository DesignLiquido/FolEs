import { Valor } from "../valores";
import { valoresGlobais } from "./atributos/globais";
import { Modificador, PragmasModificador } from "./superclasse";

export class ReiniciarTudo extends Modificador {
    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
    ) {
        super("reiniciar-tudo", "all", pragmas);

        // TODO: Repensar
        //     if (!(valor in valoresGlobais)) {
        //         throw new Error(`Modificador ou variável 'reiniciar-tudo' com valor ${valor} inválido. Valores aceitos: 
        //             ${Object.keys(valoresGlobais).reduce((final, atual) => (final += `, ${atual}`))}.`);
        //     }

        this.valores = valores;
    }
}
