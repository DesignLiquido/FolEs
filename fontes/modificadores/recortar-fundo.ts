import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class RecortarFundo extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        borda: "border-box",
        preenchimento: "padding-box",
        "conteudo-caixa": "content-box",
        "conteúdo-caixa": "content-box",
        texto: "text",
    };

    constructor(
        valor: string,
        quantificador?: string,
        pragmas?: PragmasModificador,
        valorVariavel: boolean = false,
    ) {
        super("recortar-fundo", "background-clip", pragmas);

        if (!valorVariavel)
            validarValores("recortar-fundo", valor, this.valoresAceitos);

        this.valor = valor;
    }
}
