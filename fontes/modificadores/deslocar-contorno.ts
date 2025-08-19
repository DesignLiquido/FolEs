import { Valor } from "../valores";
import { comprimentos } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";

export class DeslocarContorno extends Modificador {
    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
    ) {
        super("deslocar-contorno", "outline-offset", pragmas);

        validarValorNumerico(
            "deslocar-contorno",
            valores,
            null,
            null,
            comprimentos
        );

        this.valores = valores;
    }
}
