import { Valor } from "../valores";
import { comprimentos } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";

export class Perspectiva extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        nenhuma: "none",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
    ) {
        super("perspectiva", "perspective", pragmas);

        validarValorNumerico(
            "perspectiva", 
            valores, 
            this.valoresAceitos,
            null,
            comprimentos
        );

        this.valores = valores;
    }
}
