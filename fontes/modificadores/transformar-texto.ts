import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class TransformarTexto extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        nenhum: "none",
        capitalizar: "capitalize",
        maiusculo: "uppercase",
        maiúsculo: "uppercase",
        minusculo: "lowercase",
        minúsculo: "lowercase",
        "largura-cheia": "full-width",
        "tamanho-completo-kana": "full-size-kana",
    };

    constructor(
        valores: Valor[],
        
        pragmas?: PragmasModificador,
        valorVariavel: boolean = false,
    ) {
        super("transformar-texto", "text-transform", pragmas);

        if (!valorVariavel)
            validarValores("transformar-texto", valores, this.valoresAceitos);

        this.valores = valores;
    }
}
