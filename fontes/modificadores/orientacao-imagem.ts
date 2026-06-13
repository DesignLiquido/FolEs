import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class OrientacaoImagem extends Modificador {
    static nomeFolEs: string[] = ["orientacao-imagem", "orientação-imagem"];
    static nomeCss: string = "image-orientation";
    static descricao: string = 'Define a orientação de uma imagem da aplicação.';
    static documentacao: string = '# `orientacao-imagem`\nEsta propriedade especifica uma correção de layout para a orientação de uma imagem na aplicação.';
    static exemploCodigo: string = 'imagem {\n  orientacao-imagem: da-imagem;\n}';

    valoresAceitos: { [valorFoles: string]: string } = {
        nenhuma: "none",
        "da-imagem": "from-image",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(
            OrientacaoImagem.nomeFolEs,
            OrientacaoImagem.nomeCss,
            pragmas,
        );

        if (!variavel) validarValores(OrientacaoImagem.nomeFolEs[1], valores, this.valoresAceitos);

        this.valores = valores;
        this.variavel = variavel;
    }
}
