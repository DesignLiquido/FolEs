import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class DecoracaoLinhaTexto extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        nenhuma: "none",
        sublinhado: "underline",
        "linha-superior": "overline",
        "atraves-linha": "line-through",
        "através-linha": "line-through",
        piscar: "blink",
    };

    static nomeCss: string = "text-decoration-line";

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(
            ["decoracao-linha-texto", "decoração-linha-texto"],
            DecoracaoLinhaTexto.nomeCss,
            pragmas,
        );

        if (!variavel) validarValores("decoração-linha-texto", valores, this.valoresAceitos);

        this.valores = valores;
        this.variavel = variavel;
    }
}
