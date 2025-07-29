import { Valor } from "../valores";
import { comprimentos } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";
import { validarQuantificador } from "./validacoes/quantificador";

export class Perspectiva extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        nenhuma: "none",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
    ) {
        super("perspectiva", "perspective", pragmas);

        validarValorNumerico("perspectiva", valores, this.valoresAceitos);

        this.valores = valores;

        // TODO: Repensar
        // if (Number(parseInt(valor))) {
        //     validarQuantificador("perspectiva", quantificador, comprimentos);

        //     this.quantificador = quantificador;
        // }
    }
}
