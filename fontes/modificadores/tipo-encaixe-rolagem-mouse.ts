import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class TipoEncaixeRolagemMouse extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        nenhum: "none",
        horizontal: "x",
        vertical: "y",
        "em-bloco": "block",
        "em-linha": "inline",
        ambos: "both",
        obrigatorio: "mandatory",
        obrigatório: "mandatory",
        proximidade: "proximity",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
    ) {
        super("tipo-encaixe-rolagem-mouse", "scroll-snap-type", pragmas);

        validarValores(
            "tipo-encaixe-rolagem-mouse",
            valores,
            this.valoresAceitos,
        );

        this.valores = valores;
    }
}
