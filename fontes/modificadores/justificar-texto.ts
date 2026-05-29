import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class JustificarTexto extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        auto: "auto",
        nenhum: "none",
        "entre-palavras": "inter-word",
        "entre-caracteres": "inter-character",
        distribuir: "distribute",
    };

    static nomeCss: string = "text-justify";

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super("justificar-texto", JustificarTexto.nomeCss, pragmas);

        if (!variavel) validarValores("justificar-texto", valores, this.valoresAceitos);

        this.valores = valores;
        this.variavel = variavel;
    }
}
