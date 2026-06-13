import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarAtribuicaoAbreviada } from "./validacoes/atribuicao-abreviada";
import { validarValores } from "./validacoes/comum";

export class PropriedadeTransicao extends Modificador {
    static nomeFolEs: string[] = ["propriedade-transicao", "propriedade-transição"];
    static nomeCss: string = "transition-property";
    static descricao: string = 'Especifica as definições de uma transição a ser aplicada sobre um elemento.';
    static documentacao: string = '# `propriedade-transicao`\nEsta propriedade define em quais propriedades deve ser aplicado um efeito de transição.';
    static exemploCodigo: string = 'p {\n  propriedade-transicao: todas;\n}';

    valoresAceitos: { [valorFoles: string]: string } = {
        nenhuma: "none",
        todas: "all",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(
            PropriedadeTransicao.nomeFolEs,
            PropriedadeTransicao.nomeCss,
            pragmas,
        );

        if (!variavel) {
            if (valores.length > 1) {
                validarAtribuicaoAbreviada(
                    "comum",
                    PropriedadeTransicao.nomeFolEs[1],
                    valores,
                    this.valoresAceitos,
                    null,
                    null,
                    false,
                    true
                );
            } else {
                validarValores(
                    PropriedadeTransicao.nomeFolEs[1],
                    valores,
                    this.valoresAceitos
                );
            }
        }

        this.valores = valores;
        this.variavel = variavel;
    }
}
