import { Valor } from "../valores";
import { ListaDeValorPercentual, unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";

export class PosicaoDireita extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        auto: "auto",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
    ) {
        super(["posicao-direita", "posição-direita"], "right", pragmas);

        validarValorNumerico(
            "posição-direita",
            valores,
            this.valoresAceitos,
            null,
            unidadesMedida,
            ListaDeValorPercentual,
        );

        this.valores = valores;
    }
}
