import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class VazamentoEmLinha extends Modificador {
    static nomeFolEs: string = "vazamento-em-linha";
    static nomeCss: string = "overflow-inline";
    static descricao: string = 'Define o que é exibido quando o conteúdo ultrapassa as bordas inicial e final da linha de uma caixa.';
    static documentacao: string = '# `vazamento-em-linha`\nO elemento em exibição pode ser nada, uma barra de rolagem ou o conteúdo excedente.';
    static exemploCodigo: string = 'p {\n  vazamento-em-linha: barra-rolagem;\n}';

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
        super(VazamentoEmLinha.nomeFolEs, VazamentoEmLinha.nomeCss, pragmas);

        if (!variavel) validarValores(VazamentoEmLinha.nomeFolEs, valores, this.valoresAceitos);

        this.valores = valores;
        this.variavel = variavel;
    }
}
