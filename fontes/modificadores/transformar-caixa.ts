import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class TransformarCaixa extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "conteudo-caixa": "content-box",
        "conteúdo-caixa": "content-box",
        "borda-caixa": "border-box",
        "completar-caixa": "fill-box",
        "delimitar-caixa": "stroke-box",
        "visualizar-caixa": "view-box",
    };

    static nomeCss: string = "transform-box";

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super("transformar-caixa", TransformarCaixa.nomeCss, pragmas);

        if (!variavel) validarValores("transformar-caixa", valores, this.valoresAceitos);

        this.valores = valores;
        this.variavel = variavel;
    }
}
