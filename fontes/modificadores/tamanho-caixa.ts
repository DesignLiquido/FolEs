import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class TamanhoCaixa extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "conteudo-caixa": "content-box",
        "conteúdo-caixa": "content-box",
        "borda-caixa": "border-box",
    };

    constructor(
        valor: string,
        quantificador?: string,
        pragmas?: PragmasModificador,
        valorVariavel: boolean = false,
    ) {
        super("tamanho-caixa", "box-sizing", pragmas);

        if (!valorVariavel)
            validarValores("tamanho-caixa", valor, this.valoresAceitos);

        this.valor = valor;
    }
}
