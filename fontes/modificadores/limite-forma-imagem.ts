import { Valor } from "../valores";
import { valoresGlobais } from "./atributos/globais";
import { Modificador, PragmasModificador } from "./superclasse";
import { proibirQuantificador } from "./validacoes/proibir-quantificador";

export class LimiteFormaImagem extends Modificador {
    constructor(
        valores: Valor[],
        
        pragmas?: PragmasModificador,
        valorVariavel: boolean = false,
    ) {
        super("limite-forma-imagem", "shape-image-threshold", pragmas);

        // if (!valorVariavel) {
        //     // Valor numérico deve estar entre 0 e 1 (<alpha-value>).
        //     if (
        //         (Number(parseInt(valor)) < 0 || Number(parseInt(valor)) > 1) &&
        //         !(valor in valoresGlobais)
        //     ) {
        //         throw new Error(
        //             `Modificador ou variável 'limite-forma-imagem' com valor ${valor} inválido. O valor deve estar entre 0 e 1 ou ser um dos valores:
        //             ${Object.keys(valoresGlobais).reduce((final, atual) => (final += `, ${atual}`))}.`,
        //         );
        //     }

        //     proibirQuantificador("limite-forma-imagem", quantificador);
        // }

        this.valores = valores;
    }
}
