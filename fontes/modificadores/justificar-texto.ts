import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class JustificarTexto extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "auto": "auto",
        "nenhum": "none",
        "entre-palavras": "inter-word",
        "entre-caracteres": "inter-character",
        "distribuir": "distribute",
    }

    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador) {
        super("justificar-texto", "text-justify");

        validarValores('justificar-texto', valor, this.valoresAceitos);

        this.valor = valor;

        // Quantificador não é usado aqui.
        // this.quantificador = quantificador;
    }
}
