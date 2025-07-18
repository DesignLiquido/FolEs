import { Valor } from "../valores";
import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";
import { validarQuantificador } from "./validacoes/quantificador";

export class RecuoDireito extends Modificador {
    constructor(
        valores: Valor[],
        
        pragmas?: PragmasModificador,
        valorVariavel: boolean = false,
    ) {
        super("recuo-direito", "padding-right", pragmas);

        if (!valorVariavel) {
            validarValorNumerico("recuo-direito", valores);

            // O seletor aceita o número 0.
            // Logo, o código só passa pela validação caso haja um segundo parâmetro ou caso o primeiro seja diferente de 0.
            // TODO: Repensar
            // if (quantificador !== undefined && valor !== "0") {
            //     validarQuantificador(
            //         "recuo-direito",
            //         quantificador,
            //         unidadesMedida,
            //     );

            //     this.quantificador = quantificador;
            // }
        }

        this.valores = valores;
    }
}
