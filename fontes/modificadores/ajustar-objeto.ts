import { validarValores } from "./validacoes/comum";
import { Modificador, PragmasModificador } from "./superclasse";
import { Valor } from "../valores";

export class AjustarObjeto extends Modificador {
    static nomeFolEs: string = "ajustar-objeto";
    static nomeCss: string = "object-fit";
    static descricao: string = 'Estiliza o redimensionamento de um objeto da aplicação.';
    static documentacao: string = '# `ajustar-objeto`\nDefine como o conteúdo de um elemento substituído, como uma imagem ou um vídeo, deve ser redimensionado para caber em seu contêiner.';
    static exemploCodigo: string = 'imagem {\n  ajustar-objeto: preencher;\n}';

    valoresAceitos: { [valorFoles: string]: string } = {
        conter: "contain",
        cobrir: "cover",
        preencher: "fill",
        nenhum: "none",
        "diminuir-escala": "scale-down",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean

    ) {
        super(AjustarObjeto.nomeFolEs, AjustarObjeto.nomeCss, pragmas);

        if (!variavel) validarValores(AjustarObjeto.nomeFolEs, valores, this.valoresAceitos);

        this.valores = valores;
        this.variavel = variavel;
    }
}
