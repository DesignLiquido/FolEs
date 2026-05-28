import { validarValores } from "./validacoes/comum";
import { Modificador, PragmasModificador } from "./superclasse";
import { Valor } from "../valores";

export class AlinharEncaixeRolagemMouse extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        nenhum: "none",
        inicio: "start",
        início: "start",
        fim: "end",
        centro: "center",
    };

    static nomeCss: string = "scroll-snap-align";

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super("alinhar-encaixe-rolagem-mouse", AlinharEncaixeRolagemMouse.nomeCss, pragmas);

        if (!variavel) {
            validarValores(
                "alinhar-encaixe-rolagem-mouse",
                valores,
                this.valoresAceitos,
            );
        }

        this.valores = valores;
        this.variavel = variavel;
    }
}
