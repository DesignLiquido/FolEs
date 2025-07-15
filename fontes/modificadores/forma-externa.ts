import { MetodoCss } from "../valores/metodos/css/metodo-css";
import { Metodo } from "../valores/metodos/foles/metodo";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class FormaExterna extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        nenhuma: "none",
        "margem-caixa": "margin-box",
        "conteudo-caixa": "content-box",
        "conteúdo-caixa": "content-box",
        "borda-caixa": "border-box",
        "preenchimento-caixa": "padding-box",
    };

    constructor(
        valor: Metodo | MetodoCss | string,
        quantificador?: string,
        pragmas?: PragmasModificador,
        valorVariavel: boolean = false,
    ) {
        super("forma-externa", "shape-outside", pragmas);

        const valoresExtra = ["url"];

        let metodoResolvido = "";
        if (valor instanceof Metodo) {
            metodoResolvido = valor.traducao;
        } else if (valor instanceof MetodoCss) {
            metodoResolvido = valor.traducao;
        } else {
            metodoResolvido = valor;
        }

        if (!valorVariavel)
            validarValores(
                "forma-externa",
                metodoResolvido,
                this.valoresAceitos,
                valoresExtra,
            );

        this.valor = valor;
    }
}
