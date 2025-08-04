import { Valor } from "../valores";
import { posicoesBasicas } from "./atributos/posicoes";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarAtribuicaoAbreviada } from "./validacoes/atribuicao-abreviada";
import { validarValoresAdicionais } from "./validacoes/condicao-extra";

export class Mascara extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        alfa: "alpha",
        luminancia: "luminance",
        luminância: "luminance",
        "fonte-correspondente": "match-source",
        auto: "auto",
        nenhuma: "none",
        conter: "contain",
        cobrir: "cover",
        "repetir-horizontal": "repeat-x",
        "repetir-vertical": "repeat-y",
        repetir: "repeat",
        espacar: "space",
        espaçar: "space",
        arredondar: "round",
        "nao-repetir": "no-repeat",
        "não-repetir": "no-repeat",
        adicionar: "add",
        subtrair: "subtract",
        cruzar: "intersect",
        excluir: "exclude",
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
        borda: "border",
        preenchimento: "padding",
        conteudo: "content",
        conteúdo: "content",
        texto: "text",
        url: "url",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
    ) {
        super(["mascara", "máscara"], "mask", pragmas);

        // TODO: Repensar
        //     if (valor.includes(" ")) {
        //         validarAtribuicaoAbreviada("condição-extra", "máscara", valores, posicoesBasicas, this.valoresAceitos);
        //     }

        validarValoresAdicionais("máscara", valores, posicoesBasicas, this.valoresAceitos);

        this.valores = valores;
    }
}
