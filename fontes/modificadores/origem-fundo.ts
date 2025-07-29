import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class OrigemFundo extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "borda-caixa": "border-box",
        preenchimento: "padding-box",
        "conteudo-caixa": "content-box",
        "conteúdo-caixa": "content-box",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
    ) {
        super("origem-fundo", "background-origin", pragmas);

        validarValores("origem-fundo", valores, this.valoresAceitos);

        this.valores = valores;
    }
}
