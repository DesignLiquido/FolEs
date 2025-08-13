import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class CombinarTextoVertical extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        nenhum: "none",
        tudo: "all",
        digitos: "digits",
        dígitos: "digits",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
    ) {
        super("combinar-texto-vertical", "text-combine-upright", pragmas);

        validarValores(
            "combinar-texto-vertical",
            valores,
            this.valoresAceitos,
        );

        this.valores = valores;
    }
}
