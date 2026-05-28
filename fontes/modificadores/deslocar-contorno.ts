import { Valor } from "../valores";
import { comprimentos } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";

export class DeslocarContorno extends Modificador {
    static nomeCss: string = "outline-offset";

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super("deslocar-contorno", DeslocarContorno.nomeCss, pragmas);

        if (!variavel) {
            validarValorNumerico(
                "deslocar-contorno",
                valores,
                null,
                null,
                comprimentos
            );
        }

        this.valores = valores;
        this.variavel = variavel;
    }
}
