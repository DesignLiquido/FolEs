import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class PararEncaixeRolagemMouse extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        normal: "normal",
        sempre: "always",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
    ) {
        super("parar-encaixe-rolagem-mouse", "scroll-snap-stop", pragmas);

        validarValores(
            "parar-encaixe-rolagem-mouse",
            valores,
            this.valoresAceitos,
        );

        this.valores = valores;
    }
}
