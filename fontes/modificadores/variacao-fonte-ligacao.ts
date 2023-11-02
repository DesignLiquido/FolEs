import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class VariacaoFonteLigacao extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "normal": "normal",
        "nenhuma": "none",
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
        "contextual": "contextual",
        "nao-contextual": "no-contextual",
        "não-contextual": "no-contextual",
    }

    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador) {
        super(
            ["variacao-fonte-ligacao", "variação-fonte-ligação"],
            "font-variant-ligatures", 
            pragmas
        );

        validarValores('variação-fonte-ligação', valor, this.valoresAceitos);

        this.valor = valor;

        // Não recebe quantificador
        // this.quantificador = quantificador;
    }
}
