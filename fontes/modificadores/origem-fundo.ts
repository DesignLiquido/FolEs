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

    static nomeCss: string = "background-origin";

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super("origem-fundo", OrigemFundo.nomeCss, pragmas);

        if (!variavel) validarValores("origem-fundo", valores, this.valoresAceitos);

        this.valores = valores;
        this.variavel = variavel;
    }
}
