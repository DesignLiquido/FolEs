import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class VazamentoEmBloco extends Modificador {
    static nomeFolEs: string = "vazamento-em-bloco";
    static nomeCss: string = "overflow-block";
    static descricao: string = 'Define o que é exibido quando o conteúdo ultrapassa as bordas inicial e final do bloco de uma caixa.';
    static documentacao: string = '# `vazamento-em-bloco`\nO elemento em exibição pode ser nada, uma barra de rolagem ou o conteúdo excedente.';
    static exemploCodigo: string = 'p {\n  vazamento-em-bloco: barra-rolagem;\n}';

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
        super(VazamentoEmBloco.nomeFolEs, VazamentoEmBloco.nomeCss, pragmas);

        if (!variavel) validarValores(VazamentoEmBloco.nomeFolEs, valores, this.valoresAceitos);

        this.valores = valores;
        this.variavel = variavel;
    }
}
