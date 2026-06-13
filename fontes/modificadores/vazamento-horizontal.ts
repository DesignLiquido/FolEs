import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class VazamentoHorizontal extends Modificador {
    static nomeFolEs: string = "vazamento-horizontal'";
    static nomeCss: string = "overflow-x";
    static descricao: string = 'Define o que é exibido quando o conteúdo ultrapassa as bordas superior e inferior de um elemento de nível de bloco.';
    static documentacao: string = '# `vazamento-horizontal`\nA exibição pode ser nada, uma barra de rolagem ou o conteúdo excedente. Essa propriedade também pode ser definida usando a propriedade abreviada vazamento.';
    static exemploCodigo: string = 'p {\n  vazamento-horizontal: recortar;\n}';

    valoresAceitos: { [valorFoles: string]: string } = {
        visivel: "visible",
        visível: "visible",
        escondido: "hidden",
        recorte: "clip",
        "barra-rolagem": "scroll",
        auto: "auto",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(VazamentoHorizontal.nomeFolEs, VazamentoHorizontal.nomeCss, pragmas);

        if (!variavel) validarValores(VazamentoHorizontal.nomeFolEs, valores, this.valoresAceitos);

        this.valores = valores;
        this.variavel = variavel;
    }
}
