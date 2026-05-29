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

    static nomeCss: string = "line-break";

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super("quebrar-linha", QuebrarLinha.nomeCss, pragmas);

        if (!variavel) validarValores("quebrar-linha", valores, this.valoresAceitos);

        this.valores = valores;
        this.variavel = variavel;
    }
}
