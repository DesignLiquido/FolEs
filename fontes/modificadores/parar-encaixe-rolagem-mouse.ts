import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class PararEncaixeRolagemMouse extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        normal: "normal",
        sempre: "always",
    };

    static nomeCss: string = "scroll-snap-stop";

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super("parar-encaixe-rolagem-mouse", PararEncaixeRolagemMouse.nomeCss, pragmas);

        if (!variavel) {
            validarValores(
                "parar-encaixe-rolagem-mouse",
                valores,
                this.valoresAceitos,
            );
        }

        this.valores = valores;
        this.variavel = variavel;
    }
}
