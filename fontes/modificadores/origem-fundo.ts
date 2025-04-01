import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class OrigemFundo extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "borda-caixa": "border-box",
        "preenchimento": "padding-box",
        "conteudo-caixa": "content-box",
        "conteúdo-caixa": "content-box",
    }

    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador, valorVariavel: boolean = false) {
        super("origem-fundo", "background-origin", pragmas);

        if (!valorVariavel) validarValores('origem-fundo', valor, this.valoresAceitos);

        this.valor = valor;
    }
}
