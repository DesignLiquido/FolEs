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

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
    ) {
        super("justificar-texto", "text-justify", pragmas);

        validarValores("justificar-texto", valores, this.valoresAceitos);

        this.valores = valores;
    }
}
