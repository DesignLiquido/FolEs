import { Valor } from "../valores";
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
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super("recortar-fundo", "background-clip", pragmas);

        if (!variavel) validarValores("recortar-fundo", valores, this.valoresAceitos);

        this.valores = valores;
        this.variavel = variavel;
    }
}
