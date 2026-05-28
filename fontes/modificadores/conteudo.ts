import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class Conteudo extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        normal: "normal",
        nenhum: "none",
        "abrir-citacao": "open-quote",
        "abrir-citação": "open-quote",
        "fechar-citacao": "close-quote",
        "fechar-citação": "close-quote",
        "nao-abrir-citacao": "no-open-quote",
        "não-abrir-citação": "no-open-quote",
        "nao-fechar-citacao": "no-close-quote",
        "não-fechar-citação": "no-close-quote",
    };

    static nomeCss: string = "content";

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(["conteudo", "conteúdo"], Conteudo.nomeCss, pragmas);

        const valoresExtra = ["cross-fade", "counter", "image", "image-set", "linear-gradient", "url",];

        if (!variavel) {
            validarValores(
                "conteúdo",
                valores,
                this.valoresAceitos,
                valoresExtra,
            );
        }

        this.valores = valores;
        this.variavel = variavel;
    }
}
