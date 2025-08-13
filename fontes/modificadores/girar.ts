import { Valor } from "../valores";
import { angulos } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";

export class Girar extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        nenhum: "none",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
    ) {
        super("girar", "rotate", pragmas);

        validarValorNumerico(
            "girar", 
            valores, 
            this.valoresAceitos,
            null,
            angulos
        );

        this.valores = valores;
    }
}
