import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class Visibilidade extends Modificador {
    static nomeFolEs: string = "visibilidade";
    static nomeCss: string = "visibility";
    static descricao: string = 'Mostra ou oculta um elemento sem alterar o layout de um documento.';
    static documentacao: string = '# `visibilidade`\nA propriedade também pode ocultar linhas ou colunas em uma tabela.';
    static exemploCodigo: string = 'coluna {\n  visibilidade: escondido;\n}';

    valoresAceitos: { [valorFoles: string]: string } = {
        visivel: "visible",
        visível: "visible",
        escondido: "hidden",
        recolher: "collapse",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(Visibilidade.nomeFolEs, Visibilidade.nomeCss, pragmas);

        if (!variavel) validarValores(Visibilidade.nomeFolEs, valores, this.valoresAceitos);

        this.valores = valores;
        this.variavel = variavel;
    }
}
