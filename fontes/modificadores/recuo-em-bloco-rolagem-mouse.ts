import {
    ListaDeValorPercentual,
    unidadesMedida,
} from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";
import { validarQuantificador } from "./validacoes/quantificador";

export class RecuoEmBlocoRolagemMouse extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        auto: "auto",
    };

    constructor(
        valor: string,
        quantificador?: string,
        pragmas?: PragmasModificador,
        valorVariavel: boolean = false,
    ) {
        super("recuo-em-bloco-rolagem-mouse", "scroll-padding-block", pragmas);

        if (!valorVariavel) {
            validarValorNumerico(
                "recuo-em-bloco-rolagem-mouse",
                valor,
                this.valoresAceitos,
            );

            if (Number(parseInt(valor))) {
                validarQuantificador(
                    "recuo-em-bloco-rolagem-mouse",
                    quantificador,
                    unidadesMedida,
                );

                this.quantificador = quantificador;
            }
        }

        this.valor = valor;
    }
}
