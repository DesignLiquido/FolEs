import { Valor } from "../valores";
import { comprimentos } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";
import { validarQuantificador } from "./validacoes/quantificador";

export class MargemSuperiorRolagemMouse extends Modificador {
    constructor(
        valores: Valor[],
        
        pragmas?: PragmasModificador,
        valorVariavel: boolean = false,
    ) {
        super("margem-superior-rolagem-mouse", "scroll-margin-top", pragmas);

        if (!valorVariavel) {
            validarValorNumerico("margem-superior-rolagem-mouse", valores);

            // TODO: Repensar
            // if (Number(parseInt(valor))) {
            //     validarQuantificador(
            //         "margem-superior-rolagem-mouse",
            //         quantificador,
            //         comprimentos,
            //     );

            //     this.quantificador = quantificador;
            // }
        }

        this.valores = valores;
    }
}
