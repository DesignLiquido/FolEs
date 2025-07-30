import { Valor } from "../valores";
import { comprimentos } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";

export class EspacoBorda extends Modificador {
    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
    ) {
        super(["espaco-borda", "espaço-borda"], "border-spacing", pragmas);

        validarValorNumerico(
            "espaço-borda", 
            valores,
            null,
            null,
            comprimentos
        );

        this.valores = valores;
    }
}
