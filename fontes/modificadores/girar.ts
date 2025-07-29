import { Valor } from "../valores";
import { angulos } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";
import { validarQuantificador } from "./validacoes/quantificador";

export class Girar extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        nenhum: "none",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
    ) {
        super("girar", "rotate", pragmas);

        validarValorNumerico("girar", valores, this.valoresAceitos);

        // TODO: Repensar
        // if (Number(parseInt(valor))) {
        //     validarQuantificador("girar", quantificador, angulos);

        //     this.quantificador = quantificador;
        // }

        this.valores = valores;
    }
}
