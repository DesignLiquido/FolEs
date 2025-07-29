import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class DecoracaoEstiloTexto extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        solido: "solid",
        sólido: "solid",
        duplicado: "double",
        tracejado: "dashed",
        pontilhado: "dotted",
        ondulado: "wavy",
        nenhum: "none",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
    ) {
        super(
            ["decoracao-estilo-texto", "decoração-estilo-texto"],
            "text-decoration-style",
            pragmas,
        );

        validarValores(
            "decoração-estilo-texto",
            valores,
            this.valoresAceitos,
        );

        this.valores = valores;
    }
}
