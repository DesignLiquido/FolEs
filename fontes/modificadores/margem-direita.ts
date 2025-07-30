import { Valor } from "../valores";
import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";

export class MargemDireita extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        auto: "auto",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
    ) {
        super("margem-direita", "margin-right", pragmas);

        validarValorNumerico(
            "margem-direita", 
            valores, 
            this.valoresAceitos,
            null,
            unidadesMedida
        );

        this.valores = valores;
    }
}
