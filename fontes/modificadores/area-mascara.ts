import { validarValores } from "./validacoes/comum";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarAtribuicaoAbreviada } from "./validacoes/atribuicao-abreviada";
import { Valor } from "../valores";

export class AreaMascara extends Modificador {
    static nomeFolEs: string[] = ["area-mascara", "área-máscara"];
    static nomeCss: string = "mask-clip";
    static descricao: string = 'Determina a área que é afetada por uma máscara.';
    static documentacao: string = '# `area-mascara`\nPara utilizar esta propriedade, o conteúdo pintado de um elemento deve ser restrito a esta área.';
    static exemploCodigo: string = 'divisão {\n  area-mascara:  preenchimento-caixa;\n}';

    valoresAceitos: { [valorFoles: string]: string } = {
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
        "modo-conteudo": "content",
        "modo-conteúdo": "content",
        texto: "text",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(AreaMascara.nomeFolEs, AreaMascara.nomeCss, pragmas);

        if (!variavel) {
            if (valores.length > 1) {
                validarAtribuicaoAbreviada(
                    "comum",
                    AreaMascara.nomeFolEs[1],
                    valores,
                    this.valoresAceitos
                );
            } else {
                validarValores(
                    AreaMascara.nomeFolEs[1],
                    valores,
                    this.valoresAceitos
                );
            }
        }

        this.valores = valores;
        this.variavel = variavel;
    }
}
