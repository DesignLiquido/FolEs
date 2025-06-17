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
        valor: string,
        quantificador?: string,
        pragmas?: PragmasModificador,
        valorVariavel: boolean = false,
    ) {
        super(["conteudo", "conteúdo"], "content", pragmas);

        // Também aceita como valor a função image-set()
        const valoresExtra = ["url", "linear-gradient", "counter"];

        if (!valorVariavel)
            validarValores(
                "conteúdo",
                valor,
                this.valoresAceitos,
                valoresExtra,
            );

        this.valor = valor;
    }
}
