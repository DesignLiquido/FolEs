import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class TransformarCaixa extends Modificador {
    static nomeFolEs: string = "transformar-caixa";
    static nomeCss: string = "transform-box";
    static descricao: string = 'Especifica as ações de transformação de uma caixa de layout.';
    static documentacao: string = '# `transformar-caixa`\nPropriedade que define a caixa de layout à qual se relacionam às propriedades: coordenadas, escala, girar, transformar, transformar-origem e às demais propriedades individuais de transformação.';
    static exemploCodigo: string = 'divisao {\n  transformar-caixa: completar-caixa;\n}';

    valoresAceitos: { [valorFoles: string]: string } = {
        "conteudo-caixa": "content-box",
        "conteúdo-caixa": "content-box",
        "borda-caixa": "border-box",
        "completar-caixa": "fill-box",
        "delimitar-caixa": "stroke-box",
        "visualizar-caixa": "view-box",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(TransformarCaixa.nomeFolEs, TransformarCaixa.nomeCss, pragmas);

        if (!variavel) validarValores(TransformarCaixa.nomeFolEs, valores, this.valoresAceitos);

        this.valores = valores;
        this.variavel = variavel;
    }
}
