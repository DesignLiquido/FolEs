import { Valor } from "../valores";
import { comprimentos } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";
import { validarQuantificador } from "./validacoes/quantificador";

export class MargemEmLinhaRolagemMouse extends Modificador {
    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
    ) {
        super("margem-em-linha-rolagem-mouse", "scroll-margin-inline", pragmas);

        validarValorNumerico("margem-em-linha-rolagem-mouse", valores);

        // TODO: Repensar.
        // if (quantificador !== undefined) {
        //     validarQuantificador(
        //         "margem-em-bloco-rolagem-mouse",
        //         quantificador,
        //         comprimentos,
        //     );

        //     this.quantificador = quantificador;
        // }

        this.valores = valores;
    }
}
