import { validarValores } from "./validacoes/comum";
import { Modificador, PragmasModificador } from "./superclasse";

export class AlinharEncaixeRolagemMouse extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        nenhum: "none",
        inicio: "start",
        início: "start",
        fim: "end",
        centro: "center",
    };

    constructor(
        valor: string,
        quantificador?: string,
        pragmas?: PragmasModificador,
        valorVariavel: boolean = false,
    ) {
        super("alinhar-encaixe-rolagem-mouse", "scroll-snap-align", pragmas);

        if (!valorVariavel)
            validarValores(
                "alinhar-encaixe-rolagem-mouse",
                valor,
                this.valoresAceitos,
            );

        this.valor = valor;
    }
}
