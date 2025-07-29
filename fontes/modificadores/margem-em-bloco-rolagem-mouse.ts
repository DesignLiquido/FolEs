import { Valor } from "../valores";
import { comprimentos } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";
import { validarQuantificador } from "./validacoes/quantificador";

export class MargemEmBlocoRolagemMouse extends Modificador {
    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
    ) {
        super("margem-em-bloco-rolagem-mouse", "scroll-margin-block", pragmas);

        validarValorNumerico("margem-em-bloco-rolagem-mouse", valores);

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
