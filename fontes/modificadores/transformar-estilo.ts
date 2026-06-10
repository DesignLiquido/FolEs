import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class TransformarEstilo extends Modificador {
    static nomeFolEs: string = "transformar-estilo";
    static nomeCss: string = "transform-style";
    static descricao: string = 'Define se os filhos de um elemento são posicionados no espaço 3D ou se são achatados no plano do elemento.';
    static documentacao: string = '# `transformar-estilo`\nComo esta propriedade não é herdada, ela deve ser definida para todos os descendentes não-folha do elemento. Se nivelados, os filhos do elemento não existirão por si próprios no espaço 3D.';
    static exemploCodigo: string = 'divisao {\n  transformar-estilo: espaço-3d;\n}';

    valoresAceitos: { [valorFoles: string]: string } = {
        achatar: "flat",
        "espaco-3d": "preserve-3d",
        "espaço-3d": "preserve-3d",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(TransformarEstilo.nomeFolEs, TransformarEstilo.nomeCss, pragmas);

        if (!variavel) validarValores(TransformarEstilo.nomeFolEs, valores, this.valoresAceitos);

        this.valores = valores;
        this.variavel = variavel;
    }
}
