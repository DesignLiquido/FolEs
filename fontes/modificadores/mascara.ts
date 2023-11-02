import { posicoesBasicas } from "./atributos/posicoes";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValoresAdicionais } from "./validacoes/condicao-extra";

export class Mascara extends Modificador {
    // Seletor de Atribuição Abreviada (Shorthand).
    // Pode receber de 1 a 8 valores.

    valoresAceitos: { [valorFoles: string]: string } = {
        "alfa": "alpha",
        "luminancia": "luminance",
        "luminância": "luminance",
        "fonte-correspondente": "match-source",
        "auto": "auto",
        "nenhuma": "none",
        "conter": "contain",
        "cobrir": "cover",
        "repetir-horizontal": "repeat-x",
        "repetir-vertical": "repeat-y",
        "repetir": "repeat",
        "espacar": "space",
        "espaçar": "space",
        "arredondar": "round",
        "nao-repetir": "no-repeat",
        "não-repetir": "no-repeat",
        "adicionar": "add",
        "subtrair": "subtract",
        "cruzar": "intersect",
        "excluir": "exclude",
        "conteudo-caixa": "content-box",
        "conteúdo-caixa": "content-box",
        "preenchimento-caixa": "padding-box",
        "borda-caixa": "border-box",
        "margem-caixa": "margin-box",
        "completar-caixa": "fill-box",
        "delimitar-caixa": "stroke-box",
        "visualizar-caixa": "view-box",
        "nao-recortar": "no-clip",
        "não-recortar": "no-clip",
        "borda": "border",
        "preenchimento": "padding",
        "conteudo": "content",
        "conteúdo": "content",
        "texto": "text",
        "url": "url",
    }

    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador) {
        super(["mascara", "máscara"], "mask", pragmas);

        validarValoresAdicionais('máscara', valor, posicoesBasicas, this.valoresAceitos);

        this.valor = valor;

        // Não recebe quantificador
        // this.quantificador = quantificador;

    }
}
