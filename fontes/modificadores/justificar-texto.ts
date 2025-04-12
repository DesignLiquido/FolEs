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
        valor: string,
        quantificador?: string,
        pragmas?: PragmasModificador,
        valorVariavel: boolean = false,
    ) {
        super("justificar-texto", "text-justify", pragmas);

        if (!valorVariavel)
            validarValores("justificar-texto", valor, this.valoresAceitos);

        this.valor = valor;
    }
}
