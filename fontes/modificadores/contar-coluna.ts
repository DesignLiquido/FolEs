import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";

export class ContarColuna extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        auto: "auto",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
    ) {
        super("contar-coluna", "column-count", pragmas);

        validarValorNumerico(
            "contar-coluna", 
            valores, 
            this.valoresAceitos,
            null,
            null,
            true
        );

        this.valores = valores;
    }
}
