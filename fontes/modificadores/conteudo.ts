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

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(["conteudo", "conteúdo"], "content", pragmas);

        // Também aceita como valor a função image-set()
        const valoresExtra = ["url", "linear-gradient", "counter"];

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
