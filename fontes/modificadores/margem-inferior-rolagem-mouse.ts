import { Valor } from "../valores";
import { comprimentos } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";
import { validarQuantificador } from "./validacoes/quantificador";

export class MargemInferiorRolagemMouse extends Modificador {
    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
    ) {
        super("margem-inferior-rolagem-mouse", "scroll-margin-bottom", pragmas);

        validarValorNumerico("margem-inferior-rolagem-mouse", valores);

        // TODO: Repensar
        // if (Number(parseInt(valor))) {
        //     validarQuantificador(
        //         "margem-inferior-rolagem-mouse",
        //         quantificador,
        //         comprimentos,
        //     );

        //     this.quantificador = quantificador;
        // }

        this.valores = valores;
    }
}
