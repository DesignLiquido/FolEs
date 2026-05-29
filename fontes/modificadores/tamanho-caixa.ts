import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class TamanhoCaixa extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "conteudo-caixa": "content-box",
        "conteúdo-caixa": "content-box",
        "borda-caixa": "border-box",
    };

    static nomeCss: string = "box-sizing";

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super("tamanho-caixa", TamanhoCaixa.nomeCss, pragmas);

        if (!variavel) validarValores("tamanho-caixa", valores, this.valoresAceitos);

        this.valores = valores;
        this.variavel = variavel;
    }
}
