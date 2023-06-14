import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class TransformarTexto extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "nenhum": "none",
        "capitalizar": "capitalize",
        "maiusculo": "uppercase",
        "maiúsculo": "uppercase",
        "minusculo": "lowercase",
        "minúsculo": "lowercase",
        "largura-cheia": "full-width",
        "tamanho-completo-kana": "full-size-kana",
    }

    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador) {
        super("transformar-texto", "text-transform");

        validarValores('transformar-texto', valor, this.valoresAceitos);

        this.valor = valor;

        // Não recebe quantificador
        // this.quantificador = quantificador;
    }
}
