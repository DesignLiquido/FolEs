import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class CalhaBarraRolagem extends Modificador {
    static nomeFolEs: string = "calha-barra-rolagem";
    static nomeCss: string = "scrollbar-gutter";
    static descricao: string = 'Permite reservar espaço para a barra de rolagem da página.';
    static documentacao: string = '# `calha-barra-rolagem`\nPA calha da barra de rolagem é o espaço entre a borda interna de um elemento e a borda externa de seu preenchimento, onde o navegador pode exibir uma barra de rolagem. Se nenhuma barra de rolagem estiver presente, a calha será pintada como uma extensão do preenchimento.';
    static exemploCodigo: string = 'titulo2 {\n  calha-barra-rolagem: estável;\n}';

    valoresAceitos: { [valorFoles: string]: string } = {
        auto: "auto",
        estavel: "stable",
        estável: "stable",
        "ambas-bordas": "both-edges",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(CalhaBarraRolagem.nomeFolEs, CalhaBarraRolagem.nomeCss, pragmas);

        if (!variavel) validarValores(CalhaBarraRolagem.nomeFolEs, valores, this.valoresAceitos);

        this.valores = valores;
        this.variavel = variavel;
    }
}
