import { Valor } from "../valores";
import { comprimentos } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";
import { validarQuantificador } from "./validacoes/quantificador";

export class MargemEsquerdaRolagemMouse extends Modificador {
    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
    ) {
        super("margem-esquerda-rolagem-mouse", "scroll-margin-left", pragmas);

        validarValorNumerico("margem-esquerda-rolagem-mouse", valores);

        // TODO: Repensar
        // if (Number(parseInt(valor))) {
        //     validarQuantificador(
        //         "margem-esquerda-rolagem-mouse",
        //         quantificador,
        //         comprimentos,
        //     );

        //     this.quantificador = quantificador;
        // }

        this.valores = valores;
    }
}
