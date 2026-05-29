import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class VariacaoFonteLigacao extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        normal: "normal",
        nenhuma: "none",
        "ligacoes-comuns": "common-ligatures",
        "ligações-comuns": "common-ligatures",
        "sem-ligacoes-comuns": "no-common-ligatures",
        "sem-ligações-comuns": "no-common-ligatures",
        "ligacoes-discretas": "discretionary-ligatures",
        "ligações-discretas": "discretionary-ligatures",
        "sem-ligacoes-discretas": "no-discretionary-ligatures",
        "sem-ligações-discretas": "no-discretionary-ligatures",
        "ligacoes-historicas": "historical-ligatures",
        "ligações-históricas": "historical-ligatures",
        "sem-ligacoes-historicas": "no-historical-ligatures",
        "sem-ligações-históricas": "no-historical-ligatures",
        contextual: "contextual",
        "nao-contextual": "no-contextual",
        "não-contextual": "no-contextual",
    };

    static nomeCss: string = "font-variant-ligatures";

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(
            ["variacao-fonte-ligacao", "variação-fonte-ligação"],
            VariacaoFonteLigacao.nomeCss,
            pragmas,
        );

        if (!variavel) {
            validarValores(
                "variação-fonte-ligação",
                valores,
                this.valoresAceitos,
            );
        }

        this.valores = valores;
        this.variavel = variavel;
    }
}
