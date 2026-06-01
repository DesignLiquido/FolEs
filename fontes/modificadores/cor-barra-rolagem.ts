import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorCor } from "./validacoes/cor";

export class CorBarraRolagem extends Modificador {
    static nomeFolEs: string = "cor-barra-rolagem";
    static nomeCss: string = "scrollbar-color";
    static descricao: string = 'Define a cor da faixa da barra de rolagem e do polegar.';
    static documentacao: string = '# `cor-barra-rolagem`\nA faixa refere-se ao plano de fundo da barra de rolagem, que geralmente é fixo independentemente da posição de rolagem. O polegar refere-se à parte móvel da barra de rolagem, que geralmente flutua no topo da trilha.';
    static exemploCodigo: string = 'corpo {\n  cor-barra-rolagem: #f60ab3;\n}';

    valoresAceitos: { [valorFoles: string]: string } = {
        auto: "auto",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(CorBarraRolagem.nomeFolEs, CorBarraRolagem.nomeCss, pragmas);

        if (!variavel) validarValorCor("cor-barra-rolagem", valores, this.valoresAceitos);

        this.valores = valores;
        this.variavel = variavel;
    }
}
