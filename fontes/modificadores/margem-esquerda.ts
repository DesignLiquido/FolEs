import { Valor } from "../valores";
import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";

export class MargemEsquerda extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        auto: "auto",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
    ) {
        super("margem-esquerda", "margin-left", pragmas);

        validarValorNumerico(
            "margem-esquerda", 
            valores, 
            this.valoresAceitos,
            null,
            unidadesMedida
        );

        this.valores = valores;
    }
}
