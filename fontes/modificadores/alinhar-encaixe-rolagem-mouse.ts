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

    constructor(
        valores: Valor[],
        
        pragmas?: PragmasModificador,
        valorVariavel: boolean = false,
    ) {
        super("alinhar-encaixe-rolagem-mouse", "scroll-snap-align", pragmas);

        if (!valorVariavel)
            validarValores(
                "alinhar-encaixe-rolagem-mouse",
                valores,
                this.valoresAceitos,
            );

        this.valores = valores;
    }
}
