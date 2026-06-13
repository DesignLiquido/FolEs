import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class ModoPreenchimentoAnimacao extends Modificador {
    static nomeFolEs: string[] = ["modo-preenchimento-animacao", "modo-preenchimento-animação"];
    static nomeCss: string = "animation-fill-mode";
    static descricao: string = 'Define como uma animação é estilizada antes e depois de sua execução.';
    static documentacao: string = '# `modo-preenchimento-animacao`\nPara ajustar as outras definições de uma animação, pode ser mais objetivo usar a propriedade `animação` para definir todas as propriedades da animação de uma só vez.';
    static exemploCodigo: string = 'imagem {\n  modo-preenchimento-animacao: para-frente;\n}';

    valoresAceitos: { [valorFoles: string]: string } = {
        nenhum: "none",
        "para-frente": "forwards",
        "para-tras": "backwards",
        "para-trás": "backwards",
        ambos: "both",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(
            ModoPreenchimentoAnimacao.nomeFolEs,
            ModoPreenchimentoAnimacao.nomeCss,
            pragmas,
        );

        if (!variavel) {
            validarValores(
                ModoPreenchimentoAnimacao.nomeFolEs[1],
                valores,
                this.valoresAceitos,
            );
        }

        this.valores = valores;
        this.variavel = variavel;
    }
}
