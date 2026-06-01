import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorCor } from "./validacoes/cor";

export class CorEnfaseTexto extends Modificador {
    static nomeFolEs: string[] = ["cor-enfase-texto", "cor-ênfase-texto"];
    static nomeCss: string = "text-emphasis-color";
    static descricao: string = 'Define a cor das marcas de ênfase do texto de um elemento.';
    static documentacao: string = '# `cor-enfase-texto`\nDefine a cor das marcas de ênfase do texto de um elemento.';
    static exemploCodigo: string = 'p {\n  cor-enfase-texto: rgb(0 200 0);\n}';

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(
            CorEnfaseTexto.nomeFolEs,
            CorEnfaseTexto.nomeCss,
            pragmas,
        );

        if (!variavel) validarValorCor(CorEnfaseTexto.nomeFolEs[1], valores);

        this.valores = valores;
        this.variavel = variavel;
    }
}
