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
        valorVariavel: boolean = false,
    ) {
        super("quebrar-linha", "line-break", pragmas);

        if (!valorVariavel)
            validarValores("quebrar-linha", valores, this.valoresAceitos);

        this.valores = valores;
    }
}
