import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class TipoEncaixeRolagemMouse extends Modificador {
    static nomeFolEs: string = "tipo-encaixe-rolagem-mouse";
    static nomeCss: string = "scroll-snap-type";
    static descricao: string = 'Define como os pontos de ajuste são aplicados no contêiner de rolagem da página, caso haja um.';
    static documentacao: string = '# `tipo-encaixe-rolagem-mouse`\nPara obter o comportamento de rolagem instantânea, esta propriedade deve ser definida no elemento pai e a propriedade `alinhar-encaixe-rolagem-mouse` deve ser definida nos elementos filhos.';
    static exemploCodigo: string = 'corpo {\n  tipo-encaixe-rolagem-mouse: horizontal;\n}';

    valoresAceitos: { [valorFoles: string]: string } = {
        nenhum: "none",
        horizontal: "x",
        vertical: "y",
        "em-bloco": "block",
        "em-linha": "inline",
        ambos: "both",
        obrigatorio: "mandatory",
        obrigatório: "mandatory",
        proximidade: "proximity",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(TipoEncaixeRolagemMouse.nomeFolEs, TipoEncaixeRolagemMouse.nomeCss, pragmas);

        if (!variavel) {
            validarValores(
                TipoEncaixeRolagemMouse.nomeFolEs,
                valores,
                this.valoresAceitos,
            );
        }

        this.valores = valores;
        this.variavel = variavel;
    }
}
