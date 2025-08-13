import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class QuebrarLinha extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        auto: "auto",
        solta: "loose",
        normal: "normal",
        rigorosa: "strict",
        "qualquer-lugar": "anywhere",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
    ) {
        super("quebrar-linha", "line-break", pragmas);

        validarValores("quebrar-linha", valores, this.valoresAceitos);

        this.valores = valores;
    }
}
