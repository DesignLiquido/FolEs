import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class ComportamentoRolagem extends Modificador {
    static nomeFolEs: string = "comportamento-rolagem";
    static nomeCss: string = "scroll-behavior";
    static descricao: string = 'Define o comportamento de uma caixa de rolagem da aplicação.';
    static documentacao: string = '# `comportamento-rolagem`\nPropriedade aplicável para quando a rolagem é acionada pela navegação ou pelas APIs de rolagem do CSSOM.';
    static exemploCodigo: string = 'corpo {\n  comportamento-rolagem: suave;\n}';

    valoresAceitos: { [valorFoles: string]: string } = {
        auto: "auto",
        suave: "smooth",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(ComportamentoRolagem.nomeFolEs, ComportamentoRolagem.nomeCss, pragmas);

        if (!variavel) validarValores("comportamento-rolagem", valores, this.valoresAceitos);

        this.valores = valores;
        this.variavel = variavel;
    }
}
